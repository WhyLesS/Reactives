import React, { useCallback, useContext, useState } from 'react';

const USER_DATA = { firstName: 'Ivan', lastName: 'Ivanov' };

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(undefined);

    const toggleUserAuth = useCallback(() => {
        setUser((prevState) =>
            prevState === USER_DATA ? undefined : USER_DATA
        );
    }, []);

    return (
        <UserContext.Provider value={{ value: user, toggleUserAuth }}>
            {children}
        </UserContext.Provider>
    );
}
