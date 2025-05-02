// import { createSlice } from "@reduxjs/toolkit";
// const colorSlice = createSlice({
//     name:"mycolor",
//     initialState:{
//         work:[]
//     },

//     reducers:{
//         changecolor:(state,actions)=>{
//            state.work.push(actions.payload);
//         }
//     }
// })

// export const {changecolor}=colorSlice.actions;
// export default colorSlice.reducer;


















import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },

    reducers:{
        changecolor:(state,actions)=>{
            console.log(actions.payload);
            state.color=actions.payload
        }
    }
})

export const {changecolor}=colorSlice.actions;
export default colorSlice.reducer;