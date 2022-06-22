import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Information from './Information';
import MyPage from './MyPage';
import styled from 'styled-components';
import Update from './Update';

function App() {
    return (
        <Div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/info" element={<Information />} />
                <Route path="/posting" element={<MyPage />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    background-color: #c6e9d6;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    text-align: center;
`;
export default App;
