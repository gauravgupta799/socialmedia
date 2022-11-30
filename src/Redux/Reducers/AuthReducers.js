
const initialState = {
	authData: null,
	loading: false,
	error: false,
};
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "AUTH_START":
			return { ...state, loading: true, error: false };
		case "AUTH_SUCCESS":
			window.localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			return { ...state, authData: action.data, loading: false, error: false };
		case "AUTH_FAIL":
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};


