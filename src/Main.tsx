import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Card,
    CardTitle,
    CardButton,
    CartTitleRight,
    CartTitleLeft,
    CartTitleImg,
    CardContent,
    CardOutLine,
    Img,
    CardLayoutDiv,
} from './style';
import { RootState } from './redux/modules';
import CardTailDiv from './CardTailDiv';
import { useDispatch } from 'react-redux';
import { addPost } from './redux/modules/post';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { boardApi } from './callApi';
import { jwtUtils } from './JwtUtils';
import StateDiv from './StateDiv';

const Main = () => {
    const localToken = localStorage.getItem('recoil-persist');

    const getBoardList = () => {
        return axios.get('http://13.209.65.162/api/boards');
    };

    const list_query = useQuery('myList', getBoardList, {
        onSuccess: (data) => {
            dispatch(addPost(data.data));
        },
    });
    console.log(list_query);
    const myList = useSelector((state: RootState) => state.post.list);
    const dispatch = useDispatch();

    const nav = useNavigate();

    const deletePost = (id: number) => {
        deleteUserdata.mutate(id);
    };
    const queryClient = useQueryClient();
    const deleteUserdata = useMutation((id: number) => boardApi.deleteApi(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('myList');
        },
    });

    return (
        <CardOutLine<any>>
            <StateDiv />
            {myList.length === 0 ? (
                <Card>게시글을 작성해 주세요</Card>
            ) : (
                myList.map((v, i) => {
                    return (
                        <Card key={v.id}>
                            <CardTitle>
                                <CartTitleLeft>
                                    <CartTitleImg />
                                    <p>
                                        <b>{v.nickname}</b>
                                    </p>
                                </CartTitleLeft>
                                {localToken &&
                                jwtUtils.userId(
                                    JSON.parse(localToken).tokenState,
                                ) === v.userId ? (
                                    <CartTitleRight>
                                        {/* <p>{time2str(v.date)}</p> */}

                                        <CardButton
                                            onClick={() => {
                                                nav('/update/' + v.id, {
                                                    state: { v },
                                                } as {});
                                            }}
                                        >
                                            수정
                                        </CardButton>
                                        <CardButton
                                            onClick={() => {
                                                deletePost(v.id);
                                            }}
                                        >
                                            삭제
                                        </CardButton>
                                    </CartTitleRight>
                                ) : null}
                            </CardTitle>
                            <CardLayoutDiv
                                layout={
                                    v.layoutType === 1
                                        ? 'row'
                                        : v.layoutType === 2
                                        ? 'row-reverse'
                                        : 'column'
                                }
                            >
                                <CardContent
                                    width={
                                        v.layoutType === 1 || v.layoutType === 2
                                            ? 50
                                            : 100
                                    }
                                >
                                    {v.content}
                                </CardContent>
                                <CardContent
                                    width={
                                        v.layoutType === 1 || v.layoutType === 2
                                            ? 50
                                            : 100
                                    }
                                >
                                    <Img src={v.img_url} />
                                </CardContent>
                            </CardLayoutDiv>
                            <CardTailDiv index={i} id_val={v.id} />
                        </Card>
                    );
                })
            )}
        </CardOutLine>
    );
};

export default Main;
