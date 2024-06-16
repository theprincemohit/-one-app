import React, {createContext, useState } from "react";
export const LanguageContext = createContext(null);
export function Language({ children }) {
    const [language, setLanguage] = useState('Light');
    
    return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>
}
 