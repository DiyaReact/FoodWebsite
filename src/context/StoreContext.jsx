import { useState, createContext, useContext } from 'react';
import { food_list } from "../assets/assets";
export const StatesContext = createContext();

export const useStatesContext = () => useContext(StatesContext);

export const StoreContext = ({ children }) => {

  let contextValue = {
    food_list
  }

  return (
    <StatesContext.Provider value={{ contextValue }}>
      {children}
    </StatesContext.Provider>
  );
}

export default StoreContext;





// import { createContext } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) =>{


//     const contexValue = {
//       food_list
//     }

//     return(
//         <StoreContext.Provider value={contexValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;