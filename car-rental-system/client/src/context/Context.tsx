import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE={
    user:null,
    isFetching:false,
    error:false,
};

export const Context = createContext<any>({});

export const ContextProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return(
        <Context.Provider value={{
            user:state.user,
            isFetching: state.isFetching,
            error:state.error,
            dispatch,
        }}>{children}</Context.Provider>
    );
}