import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching the user
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/showMe`,
        { withCredentials: true }
      );
      return data.user;
    } catch (error) {
      console.log({ errorFromRedux: error });
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Error fetching user"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: true,
    showCreateModal: false,
    replyEchoData: null,
    showShareModal: false,
    shareEchoData: null,
    showImageModal: false,
    imageModalData: null,
    showNotificationsToast: false,
    shouldNotificationClear: true,
  },
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setShowCreateModal: (state, action) => {
      state.showCreateModal = action.payload;
    },
    setReplyEchoData: (state, action) => {
      state.replyEchoData = action.payload;
    },
    setShowShareModal: (state, action) => {
      state.showShareModal = action.payload;
    },
    setShareEchoData: (state, action) => {
      state.shareEchoData = action.payload;
    },
    setShowImageModal: (state, action) => {
      state.showImageModal = action.payload;
    },
    setImageModalData: (state, action) => {
      state.imageModalData = action.payload;
    },
    incrementUserUnreadNotificationsCount: (state) => {
      if (state.user) {
        state.user.unreadNotificationsCount =
          (state.user.unreadNotificationsCount || 0) + 1;
      }
    },
    clearUserUnreadNotificationsCount: (state) => {
      if (state.user) {
        state.user.unreadNotificationsCount = 0;
      }
    },
    setShowNotificationsToast: (state, action) => {
      state.showNotificationsToast = action.payload;
    },
    setShouldNotificationClear: (state, action) => {
      state.shouldNotificationClear = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export const {
  saveUser,
  removeUser,
  setShowCreateModal,
  setReplyEchoData,
  setShowShareModal,
  setShareEchoData,
  setShowImageModal,
  setImageModalData,
  incrementUserUnreadNotificationsCount,
  clearUserUnreadNotificationsCount,
  setShowNotificationsToast,
  setShouldNotificationClear,
} = userSlice.actions;

export default userSlice.reducer;
