import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "joy",
  age: 20,
  status: "coder",
};

// export default (state = initialState, action) => {
//   if (action.type === "UPDATE_AGE") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

//using redux toolkit
export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.age = action.payload;
  });
});
