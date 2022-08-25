import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.shrtco.de/v2/shorten?url=';

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async (url: string) => {
    const response = await fetch(API_BASE_URL + url, { method: 'POST' });
    return await response.json();
  }
);

type LoadingStatus = 'pending' | 'fulfilled' | 'rejected';

interface ApiResponseLink {
  [key: string]: string;
}

interface ApiResponse {
  ok: boolean;
  result: ApiResponseLink;
}

interface linkState {
  items: ApiResponseLink[];
  status: LoadingStatus | null;
}

const initialState: linkState = {
  items: [],
  status: null,
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.items = [];
    },
  },
  extraReducers: {
    [createShortLink.pending.type]: (state) => {
      state.status = 'pending';
    },
    [createShortLink.fulfilled.type]: (
      state,
      action: PayloadAction<ApiResponse>
    ) => {
      const { ok, result } = action.payload;

      if (ok) {
        state.items = [result, ...state.items];
        state.status = 'fulfilled';
      } else {
        state.status = 'rejected';
      }
    },
    [createShortLink.rejected.type]: (state) => {
      state.status = 'rejected';
    },
  },
});

export const { clearAll } = linkSlice.actions;
export default linkSlice.reducer;
