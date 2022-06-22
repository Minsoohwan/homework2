import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtUtils } from './JwtUtils';
import OrderModal from './OrderModal';
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

function MyPage() {
    const localToken = localStorage.getItem('recoil-persist');

    const [showReq, setShowReq] = useState<boolean>(false);

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
    const [text, setText] = useState();
    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState('');
    const [file, setFile] = useState();
    // 파일 저장
    const saveFileImage = (e: any) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage('');
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
                        localStorage.clear();
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
                            <b>
                                {localToken
                                    ? jwtUtils.getNickname(
                                          JSON.parse(localToken).tokenState,
                                      )
                                    : null}
                            </b>
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
                        업로드
                    </UploadButton>
                ) : (
                    <UploadButtonDisable>업로드</UploadButtonDisable>
                )}
            </Card>
            <OrderModal
                files={file}
                content={text}
                img_url={fileImage}
                open={showReq}
                close={closeReq}
            />
        </CardOutLine>
    );
}

export default MyPage;
