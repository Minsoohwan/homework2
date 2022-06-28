import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    CardOutLine,
    CardTitle,
    CartTitleImg,
    CartTitleLeft,
    CartTitleRight,
    DeleteLabel,
    Img,
    ImgBox,
    ImgInput,
    ImgLabel,
    Logo,
    State,
    UploadButton,
    UploadButtonDisable,
    UploadContent,
    UploadInput,
} from './style';
import UpdateLayout from './UpdateLayout';

function Update() {
    interface Type {
        nickname: string;
        content: string;
        imgUrl: string;
        likes: number;
        heart: boolean;
        layoutType: number;
        id: number;
        date: string;
        userId: number;
    }
    const [showReq, setShowReq] = useState<boolean>(false);
    const location = useLocation();
    const state = location.state as { v: Type };

    function openReq() {
        setShowReq(!showReq);
    }

    function closeReq() {
        setShowReq(!showReq);
    }
    const nav = useNavigate();
    const img: any = useRef();
    const onChange = (e: any) => {
        setText(e.target.value);
    };
    const [text, setText] = useState<string | any>(state.v.content);
    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState(state.v.imgUrl);
    const [file, setFile] = useState('');
    // 파일 저장
    const saveFileImage = (e: any) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage('');
        setFile('');
    };
    return (
        <CardOutLine>
            <State>
                <Logo />
                <Button
                    onClick={() => {
                        nav('/');
                    }}
                >
                    <b>메인</b>
                </Button>
                <Button
                    onClick={() => {
                        nav('/login');
                    }}
                    style={{ marginRight: 20 }}
                >
                    <b>로그아웃</b>
                </Button>
            </State>

            <Card>
                <CardTitle>
                    <CartTitleLeft>
                        <CartTitleImg />
                        <p>
                            <b>me</b>
                        </p>
                    </CartTitleLeft>
                    <CartTitleRight>
                        <ImgLabel htmlFor="img">사진 업로드</ImgLabel>
                        <ImgInput
                            id="img"
                            type="file"
                            ref={img}
                            accept="image/*"
                            onChange={saveFileImage}
                        />
                        {fileImage ? (
                            <DeleteLabel
                                onClick={() => {
                                    deleteFileImage();
                                    img.current.value = '';
                                }}
                            >
                                삭제
                            </DeleteLabel>
                        ) : (
                            ''
                        )}
                    </CartTitleRight>
                </CardTitle>
                <UploadContent>
                    <ImgBox>
                        {fileImage ? '' : '사진을 등록해 주세요'}
                        {fileImage && (
                            <Img
                                alt="sample"
                                src={fileImage}
                                style={{ margin: 'auto' }}
                            />
                        )}
                    </ImgBox>
                    <UploadInput
                        value={text}
                        onChange={onChange}
                        placeholder="내용을 입력하세요."
                    />
                </UploadContent>
                {fileImage && text ? (
                    <UploadButton
                        onClick={() => {
                            openReq();
                        }}
                    >
                        수정하기
                    </UploadButton>
                ) : (
                    <UploadButtonDisable>수정하기</UploadButtonDisable>
                )}
            </Card>
            <UpdateLayout
                val_id={state.v.id}
                files={file}
                content={text}
                img_url={fileImage}
                open={showReq}
                close={closeReq}
            />
        </CardOutLine>
    );
}

export default Update;
