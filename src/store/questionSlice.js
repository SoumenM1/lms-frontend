import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    questionsList: [],
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questionsList = action.payload;
    },
    addQuestion: (state, action) => {
      state.questionsList.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const index = state.questionsList.findIndex(q => q.id === action.payload.id);
      if (index !== -1) {
        state.questionsList[index] = action.payload;
      }
    },
    removeQuestion: (state, action) => {
      state.questionsList = state.questionsList.filter(q => q.id !== action.payload.id);
    },
  },
});

export const { setQuestions, addQuestion, updateQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;
