import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [allShortenedLinks, changeShortenedLinks] = useState([]);

  return (
    <GlobalContext.Provider value={{allShortenedLinks, changeShortenedLinks}}>
      {props.children}
    </GlobalContext.Provider>
  )
}