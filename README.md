# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 상태관리

이 프로젝트에서는 react-query, recoil, redux-toolkit을 사용했다.
연습을 위한 프로젝트기 때문에 가능한 많은 방법을 사용하려고 했다.

### `React-query`

React-query는 서버 상태 관리 라이브러리로 통신 과정 중 중복 참조, api 호출 후 리패칭 등 비동기 처리를 편하게 해준다. api통신 툴로 사용했다.

### `recoil`

기존 react 상태관리 라이브러리인 context API를 기반으로 만들어 사용성이 편리하고 배우기가 쉽다. 로그인 후 access token을 저장하는 용도로 사용했다.

### `redux-toolkit`

기존 redux를 간소화 해 boiler plate를 줄이고 사용성을 높여 보다 편한 비동기 상태 관리를 하게 해 준다. api에서 받아온 데이터를 저장하는 용도로 사용했다.
