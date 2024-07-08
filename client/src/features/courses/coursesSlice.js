import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  selectedCourse: null,
  questions: [],
  loading: false,
  error: null,
  submissionMessage: '',
  answers: [], // Add answers state
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesPending(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCoursesSuccess(state, action) {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    submitAnswersSuccess(state, action) {
      state.answers=[...state.answers,action.payload]
    },
    submitAnswersFailure(state, action) {
      state.error = action.payload;
    },
    fetchAllAnswersPending(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllAnswersSuccess(state, action) {
      state.loading = false;
      state.answers = action.payload;
    },
    fetchAllAnswersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    selectCourse(state, action) {
        state.selectedCourse=action.payload
    },
  },
});

export const {
  fetchCoursesPending,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  submitAnswersSuccess,
  submitAnswersFailure,
  fetchAllAnswersPending,
  fetchAllAnswersSuccess,
  fetchAllAnswersFailure,
  selectCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
