import styled from 'styled-components';

export const OutLine = styled.div`
    width: 500px;
    min-height: 430px;
    background: #f8daee;
    margin: 0 auto auto auto;
`;
export const CardOutLine = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    background: #f8daee;
    margin: 70px auto auto auto;
    /* box-sizing: border-box; */
    padding-bottom: 20px;
`;
export const InfoOutLine = styled.div`
    width: 500px;
    min-height: 200px;
    background: #f8daee;
    margin: 0 auto auto auto;
`;

export const State = styled.header`
    position: fixed;
    top: 0;
    width: 500px;
    height: 70px;
    background-color: #730318;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 10px;
`;

export const Button = styled.button`
    width: 100px;
    height: 60%;
    /* background-color: ; */
    cursor: pointer;
    &:hover {
    }
`;

export const Logo = styled.div`
    position: absolute;
    left: 20px;
    right: 192px;
    background: gray;
    height: 48px;
    width: 48px;
`;
export const LoginTitle = styled.h1`
    text-align: left;
    margin: 80px 0 0 40px;
    font-size: 35px;
`;
export const LoginText = styled.div`
    text-align: left;
    margin: 10px 0 10px 25px;
`;
export const LoginInput = styled.input`
    width: 90%;
    height: 55px;
`;
export const LoginButton = styled.button`
    width: 460px;
    height: 55px;
    margin: 20px 0;
    color: white;
    font-size: 20px;
    background-color: black;
    cursor: pointer;
    &:active {
        background-color: #1f1b1b;
    }
`;
export const LoginButtonDisable = styled.button`
    width: 460px;
    height: 55px;
    margin: 20px 0;
    color: white;
    font-size: 20px;
    background-color: gray;
`;

export const Card = styled.div`
    background-color: white;
    margin-top: 20px;
    width: 100%;
    min-height: 200px;
`;

export const CardTitle = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const CartTitleLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    gap: 10px;
`;
export const CartTitleImg = styled.div`
    background-color: black;
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

export const CartTitleRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    gap: 10px;
`;
type layout = {
    layout: string;
};
export const CardLayoutDiv = styled.div`
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-direction: ${(props: layout) => props.layout};
`;
export const Notion = styled.div`
    position: absolute;
    right: 115px;
    bottom: 35px;
    background: #da9517;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 20px;
`;
export const CardButton = styled.button`
    width: 60px;
    height: 60%;
    cursor: pointer;
`;
type width = {
    width: number;
};
export const CardContent = styled.div`
    display: flex;
    width: ${(props: width) => props.width}%;
    word-break: break-all;
    text-align: left;
`;
export const CardTail = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const InfoCard = styled.div`
    background-color: white;
    margin: 20px auto;
    height: 150px;
    width: 90%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const InfoLogo = styled.div`
    background: gray;
    height: 80%;
    width: 120px;
    margin-left: 15px;
`;
export const InfoContent = styled.div`
    width: 60%;
    display: flex;
    max-height: 80%;
    text-align: left;
`;
export const ImgInput = styled.input`
    display: none;
`;
export const ImgLabel = styled.label`
    background: #c796c3;
    border: 2px solid black;
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        border: 2px solid red;
    }
    &:active {
        background: #eb9c9c;
    }
`;
export const DeleteLabel = styled.label`
    background: black;
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 60px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        border: 3px solid gray;
    }
    &:active {
        background: white;
        color: black;
    }
`;
export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
export const ImgBox = styled.div`
    width: 90%;
    min-height: 100px;
    display: flex;
    padding: 10px;
    font-size: 15px;
    box-sizing: border-box;
`;
export const UploadContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const UploadInput = styled.textarea`
    width: 90%;
    height: 100px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px 0;
`;
export const UploadButton = styled.button`
    background: #c796c3;
    margin: auto auto 10px auto;
    border: 2px solid black;
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        border: 2px solid red;
    }
    &:active {
        background: #eb9c9c;
    }
`;
export const UploadButtonDisable = styled.button`
    background: gray;
    margin: auto auto 10px auto;
    border: 2px solid black;
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100px;
    box-sizing: border-box;
`;
export const Warning = styled.div`
    font-size: 12px;
    margin-top: 10px;
    margin-left: 20px;
    color: ${(props) => props.color};
    text-align: left;
`;

export const ModalOutLine = styled.div`
    display: flex;
    border-radius: 20px;
    padding: 20px;
    background-color: white;
    flex-direction: column;
`;
