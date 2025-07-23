import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  modalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const { setLoading, toggleModal } = uiSlice.actions;
export default uiSlice.reducer;
