const initialState = {
	tokens: {
		Authorization: "",
		"x-refresh-token": "",
	},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET":
			state.tokens.Authorization = action.Authorization;
			state.tokens.XRefreshToken = action.XRefreshToken;
			return { ...state };
		default:
			return state;
	}
};

export { initialState, reducer };
