import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    toggleFavorites(state, action) {
      if (state.favorites.includes(action.payload)) {
        const newList = state.favorites.filter(
          (item) => item !== action.payload
        );
        state.favorites = newList;
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: {},
});
export default FavoriteSlice.reducer;

//Selectors
export const getFavorites = (state) => state.favorite;

//Actions
export const { toggleFavorites } = FavoriteSlice.actions;
