import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Logo, State } from './style';

const StateDiv = () => {
    const logout = () => {
        return axios.get('http://13.209.65.162/api/logout').then((res) => {
            alert(res.data);
            localStorage.clear();
            nav('/login');
        });
    };

    const localToken = localStorage.getItem('recoil-persist');
    const nav = useNavigate();
    return (
        <State>
            <Logo />
            {localToken ? (
                <Button
                    onClick={() => {
                        nav('/posting');
                    }}
                >
                    <b>작성하기</b>
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        alert('로그인후 이용해 주세요.');
                    }}
                >
                    <b>작성하기</b>
                </Button>
            )}

            {localToken ? (
                <Button
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        logout();
                    }}
                >
                    <b>로그아웃</b>
                </Button>
            ) : (
                <Button
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        nav('/login');
                    }}
                >
                    <b>로그인</b>
                </Button>
            )}
        </State>
    );
};
export default StateDiv;
