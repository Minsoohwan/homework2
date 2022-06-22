import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';
import {
    BsLayoutTextSidebar,
    BsLayoutTextSidebarReverse,
} from 'react-icons/bs';
import { RiLayoutTopLine } from 'react-icons/ri';
import './modal.css';
import './App.css';
import { ModalOutLine } from './style';
import { useMutation } from 'react-query';
import { boardApi } from './callApi';

interface props {
    files: any;
    content: any;
    img_url: string;
    open: boolean;
    close: () => void; // 함수 타입 정의할 때
}

const OrderModal = (props: props): ReactElement => {
    const { open, close, content, files } = props;

    const nav = useNavigate();

    const postAPI = (e: number) => {
        let formData = new FormData();
        if (files && content) {
            formData.append('content', content);
            formData.append('img', files);
            formData.append('layoutType', e.toString());
        }

        writeUserdata.mutate(formData);
    };
    const writeUserdata = useMutation(
        (data: FormData) => boardApi.writeApi(data),
        {
            onSuccess: () => {
                nav('/');
            },
        },
    );
    return (
        <div onClick={close} className={open ? 'bg' : ''}>
            {open ? (
                <ModalOutLine
                    onClick={(e: any) => {
                        e.stopPropagation();
                    }}
                >
                    <div>레이아웃 선택</div>
                    <div>
                        <BsLayoutTextSidebar
                            className="reverselayout"
                            size="100"
                            onClick={() => {
                                postAPI(1);
                            }}
                        />
                        <BsLayoutTextSidebarReverse
                            className="rowlayout"
                            size="100"
                            style={{ margin: '0 20' }}
                            onClick={() => {
                                postAPI(2);
                            }}
                        />
                        <RiLayoutTopLine
                            className="columnlayout"
                            size="100"
                            onClick={() => {
                                postAPI(3);
                            }}
                        />
                    </div>
                </ModalOutLine>
            ) : null}
        </div>
    );
};
export default OrderModal;
