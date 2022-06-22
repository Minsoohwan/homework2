import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BsLayoutTextSidebarReverse,
    BsLayoutTextSidebar,
} from 'react-icons/bs';
import { RiLayoutTopLine } from 'react-icons/ri';
import './modal.css';
import './App.css';
import { ModalOutLine } from './style';

import { useMutation } from 'react-query';
import { boardApi } from './callApi';

interface props {
    val_id: number;
    files: any;
    content: any;
    img_url: string;
    open: boolean;
    close: () => void; // 함수 타입 정의할 때
}

const UpdateLayout = (props: props): ReactElement => {
    const { open, close, content, files, val_id } = props;
    const nav = useNavigate();

    const updateAPI = (e: number) => {
        let formData = new FormData();
        if (files && content) {
            formData.append('content', content);
            formData.append('img', files);
            formData.append('layoutType', e.toString());
        }

        updatedata.mutate(formData);
    };
    const updatedata = useMutation(
        (data: FormData) => boardApi.reviseApi(val_id, data),
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
                                updateAPI(1);
                            }}
                        />
                        <BsLayoutTextSidebarReverse
                            className="rowlayout"
                            size="100"
                            style={{ margin: '0 20' }}
                            onClick={() => {
                                updateAPI(2);
                            }}
                        />
                        <RiLayoutTopLine
                            className="columnlayout"
                            size="100"
                            onClick={() => {
                                updateAPI(3);
                            }}
                        />
                    </div>
                </ModalOutLine>
            ) : null}
        </div>
    );
};
export default UpdateLayout;
