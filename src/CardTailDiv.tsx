import React from 'react';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { CardTail } from './style';
import { useSelector } from 'react-redux';
import { jwtUtils } from './JwtUtils';
import { useMutation, useQueryClient } from 'react-query';
import { boardApi } from './callApi';

interface props {
    index: number;
    id_val: number;
}

const CardTailDiv = (props: props) => {
    const { index, id_val } = props;
    const queryClient = useQueryClient();

    const unlike = useMutation((id: number) => boardApi.unlikeApi(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('myList');
        },
    });

    const like = useMutation((id: number) => boardApi.likeApi(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('myList');
        },
    });

    const likeAPI = () => {
        like.mutate(id_val);
    };
    const unlikeAPI = () => {
        unlike.mutate(id_val);
    };
    const localToken = localStorage.getItem('recoil-persist');
    const myList = useSelector((state: any) => state.post.list);

    return (
        <CardTail>
            <p style={{ marginLeft: 10 }}>
                <b>좋아요 {myList[index].likes.length}개</b>
            </p>
            {localToken &&
            myList[index].likes.includes(
                jwtUtils.userId(JSON.parse(localToken).tokenState),
            ) ? (
                <BsSuitHeartFill
                    onClick={() => {
                        unlikeAPI();
                    }}
                    size={30}
                    color="red"
                    style={{ marginRight: 10 }}
                />
            ) : localToken ? (
                <BsSuitHeart
                    onClick={() => {
                        likeAPI();
                    }}
                    size={30}
                    color="red"
                    style={{ marginRight: 10 }}
                />
            ) : (
                <BsSuitHeart
                    onClick={() => {
                        alert('로그인이 필요합니다.');
                    }}
                    size={30}
                    color="red"
                    style={{ marginRight: 10 }}
                />
            )}
        </CardTail>
    );
};

export default CardTailDiv;
