import { createContext, useContext, useState } from 'react';

import React from 'react';

const Context = createContext();

const user = () => {
    const [info, setInfo] = useContext(Context);
    return ({ info });
}

function userContext() {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birth: new Date().toLocaleDateString(),
        cin: "",
        phone: "",
        password: "",
        accept: false
    });

    return (
        <div className="App">
            <Context.Provider value={[info, setInfo]}>
                <Product />
            </Context.Provider>
        </div>
    );
}

export default userContext;