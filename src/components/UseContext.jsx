import {createContext, useState } from "react";

const OwnConText = createContext();

const OwnProvider = ({ children }) => {

    const moneyFromContextAPI_1 = 200;
    const moneyFromContextAPI_2 = 600;
    

    return (
        <OwnConText.Provider value={{moneyFromContextAPI_1,moneyFromContextAPI_2}}>
            {children}
        </OwnConText.Provider>
    )
}

export { OwnConText, OwnProvider }