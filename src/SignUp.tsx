import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    OutLine,
    State,
    Logo,
    LoginTitle,
    LoginInput,
    LoginText,
    LoginButton,
    Warning,
    LoginButtonDisable,
} from './style';
const SignUp = () => {
    const localToken = localStorage.getItem('recoil-persist');
    const nav = useNavigate();
    const check = () => {
        if (localToken) {
            alert('이미 로그인이 되어있습니다.');
            nav('/');
        }
    };
    const rePass: any = useRef();
    const CheckName = (asValue: any) => {
        var regExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(asValue);
    };
    const CheckPassword = (asValue: any) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
        return regExp.test(asValue);
    };
    const [nametext, setNameText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordre, setPasswordRe] = useState<string>('');
    const [nickNametext, setnickNametext] = useState<string>('');
    const onchange = (e: any) => {
        setnickNametext(e.target.value);
    };
    const onChange1 = (e: any) => {
        setNameText(e.target.value);
    };
    const onChange2 = (e: any) => {
        setPassword(e.target.value);
    };
    const onChange3 = (e: any) => {
        setPasswordRe(e.target.value);
    };
    interface data {
        email: string;
        nickname: string;
        password: string;
    }
    const postSignUp = (data: data) => {
        return axios
            .post('http://13.209.65.162/api/signup', data)
            .then((res) => {
                console.log(res);
                nav('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const { mutate } = useMutation(postSignUp);
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
                        nav('/login');
                    }}
                >
                    <b>로그인</b>
                </Button>
            </State>
            <LoginTitle>로그인</LoginTitle>
            <LoginText>아이디</LoginText>
            <LoginInput
                placeholder="아이디를 입력하세요."
                value={nametext}
                onChange={onChange1}
            />
            {nametext ? (
                CheckName(nametext) ? (
                    <Warning color={'blue'}>사용 가능한 아이디 입니다.</Warning>
                ) : (
                    <Warning color={'red'}>아이디를 확인해 주세요.</Warning>
                )
            ) : (
                <Warning color={'black'}>
                    아이디는 2-10자의 영문과 숫자와 일부 특수문자(._-)만 입력
                    가능합니다.
                </Warning>
            )}
            <LoginText>닉네임</LoginText>
            <LoginInput
                placeholder="닉네임을 입력하세요."
                value={nickNametext}
                onChange={onchange}
            />
            <LoginText>비밀번호</LoginText>
            <LoginInput
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={onChange2}
                type="password"
            />
            {password ? (
                CheckPassword(password) ? (
                    <Warning color={'blue'}>
                        사용 가능한 비밀번호입니다.
                    </Warning>
                ) : (
                    <Warning color={'red'}>비밀번호를 확인해 주세요.</Warning>
                )
            ) : (
                <Warning color={'black'}>
                    영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요.
                    특수문자(!@#$%^&*)도 사용 가능합니다.
                </Warning>
            )}
            <LoginText>비밀번호 확인</LoginText>
            <LoginInput
                placeholder="비밀번호를 다시 입력하세요."
                value={passwordre}
                onChange={onChange3}
                type="password"
                ref={rePass}
            />
            {passwordre ? (
                password === passwordre ? (
                    <Warning color={'blue'}>비밀번호가 일치합니다.</Warning>
                ) : (
                    <Warning color={'red'}>
                        비밀번호가 일치하지 않습니다.
                    </Warning>
                )
            ) : (
                <Warning color={'black'}>
                    비밀번호를 다시 입력해 주세요.
                </Warning>
            )}
            {CheckPassword(password) &&
            CheckName(nametext) &&
            password === passwordre ? (
                <LoginButton
                    onClick={() => {
                        const data = {
                            nickname: nickNametext,
                            email: nametext,
                            password: password,
                        };
                        mutate(data);
                    }}
                >
                    회원가입
                </LoginButton>
            ) : (
                <LoginButtonDisable>회원가입</LoginButtonDisable>
            )}
        </OutLine>
    );
};

export default SignUp;
