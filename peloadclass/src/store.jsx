// import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./colorSlice";
// const store=configureStore({
//     reducer:{
//         mydark:colorReducer
//     }
// })
// export default store;










import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
const store=configureStore({
    reducer:{
        mycolor:colorReducer
    }
})
export default store;