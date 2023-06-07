import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer.jsx";

const tokensContext = createContext([]);

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<tokensContext.Provider value={[state, dispatch]}>
			{children}
		</tokensContext.Provider>
	);
};

export { tokensContext, Provider };
