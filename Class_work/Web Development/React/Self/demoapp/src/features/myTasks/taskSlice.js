const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  number: 0,
  name: "Udit Rana",
  isImage: true,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    plus: (state) => {
      return { ...state, number: state.number + 1 };
    },
    minus: (state) => {
      return { ...state, number: state.number - 1 };
    },
    change: (state) => {
      return { ...state, name: "Jeel Patel" };
    },
    hide: (state) => {
      return { ...state, isImage: false };
    },
    show: (state) => {
      return { ...state, isImage: true };
    },
    toggle: (state) => {
      return { ...state, isImage: !state.isImage };
    },
  },
});

export const { plus, minus, change, hide, show, toggle } = taskSlice.actions;

export default taskSlice.reducer;
