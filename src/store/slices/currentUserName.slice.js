import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const currentUserNameSlice = createSlice({
	name: 'currentUserName',
    initialState: '',
    reducers: {
        changeUserName: (state, action)=>{
            const userName = action.payload;
            return userName;
        }
    }
})

export const { changeUserName } = currentUserNameSlice.actions;

export default currentUserNameSlice.reducer;