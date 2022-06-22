import { createSlice } from '@reduxjs/toolkit';
interface Type {
    nickname: string;
    content: string;
    img_url: string;
    likes: [];
    layoutType: number;
    id: number;
    userId: number;
}
const post = createSlice({
    name: 'cat',
    initialState: {
        list: [] as Type[],
    },
    reducers: {
        addPost: (state, action) => {
            state.list = action.payload;
        },
    },
});
export const { addPost } = post.actions;

export default post.reducer;
