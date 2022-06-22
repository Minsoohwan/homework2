import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    State,
    Logo,
    Notion,
    InfoCard,
    InfoLogo,
    InfoContent,
    InfoOutLine,
} from './style';
const Information = () => {
    const nav = useNavigate();
    return (
        <InfoOutLine>
            <State>
                <Logo />
                <Button
                    onClick={() => {
                        nav('/');
                    }}
                >
                    <b>메인</b>
                </Button>
                <Notion>10</Notion>
                <Button style={{ marginRight: 20 }}>
                    <b>로그아웃</b>
                </Button>
            </State>
            <br />
            <br />
            <br />
            <InfoCard>
                <InfoLogo></InfoLogo>
                <InfoContent>
                    <div>
                        <b>nickname</b>님이 게시글에 좋아요를 남겼습니다:)!
                    </div>
                </InfoContent>
            </InfoCard>
        </InfoOutLine>
    );
};

export default Information;
