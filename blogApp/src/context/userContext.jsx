import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johnDoe@gmail.com ",
        dob: "01/01/2000",
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => useContext(UserContext);