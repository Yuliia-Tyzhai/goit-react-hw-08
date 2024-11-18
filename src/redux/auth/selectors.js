export const selectIsLoggedIn = state => state.authData.isLoggedIn;

export const selectUser = state => state.authData.user;

export const selectIsRefreshing = state => state.authData.isRefreshing;
