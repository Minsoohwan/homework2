import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
    Button,
    OutLine,
    State,
    Logo,
    LoginTitle,
    LoginInput,
    LoginText,
    LoginButton,
} from './style';
import { useSetRecoilState } from 'recoil';
import { tokenState } from './recoil/store';
const Login = () => {
    const localToken = localStorage.getItem('recoil-persist');
    const nav = useNavigate();
    const check = () => {
        if (localToken) {
            alert('이미 로그인이 되어있습니다.');
            nav('/');
        }
    };
    const loginToken = useSetRecoilState(tokenState);
    const [nametext, setNameText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onChange1 = (e: any) => {
        setNameText(e.target.value);
    };
    const onChange2 = (e: any) => {
        setPassword(e.target.value);
    };
    interface data {
        email: string;
        password: string;
    }
    const signIn = (data: data) => {
        return axios
            .post('http://13.209.65.162/api/login', data)
            .then((res) => {
                console.log(res.headers.authorization.split(' ')[1]);
                loginToken(res.headers.authorization.split(' ')[1]);
                nav('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const { mutate } = useMutation(signIn);
    useEffect(() => {
        check();
    });
    return (
        <OutLine>
            <State>
                <Logo />
                <Button
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        nav('/');
                    }}
                >
                    <b>메인으로</b>
                </Button>
                <Button
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        nav('/signup');
                    }}
                >
                    <b>회원가입</b>
                </Button>
            </State>
            <LoginTitle>로그인</LoginTitle>
            <LoginText>아이디</LoginText>
            <LoginInput
                placeholder="아이디를 입력하세요."
                value={nametext}
                onChange={onChange1}
            />
            <LoginText>비밀번호</LoginText>
            <LoginInput
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={onChange2}
                type="password"
            />
            <LoginButton
                onClick={() => {
                    const data = {
                        email: nametext,
                        password: password,
                    };
                    mutate(data);
                }}
            >
                로그인
            </LoginButton>
        </OutLine>
    );
};

export default Login;
