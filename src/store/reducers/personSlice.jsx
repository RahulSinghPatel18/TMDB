import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
    name: 'person',
    initialState : null,
    reducers: {
        loadperson: (state, action)=>{
            state.info = action.payload;
        },

        removeperson:(state,action)=>{
            state.info = null;
        }
      },
  })
  

  export const {  loadperson, removeperson } = personSlice.actions

export default personSlice.reducer