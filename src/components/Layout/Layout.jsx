import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <header></header>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;