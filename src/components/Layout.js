import React from 'react';
import NavBar from './NavBar';
//React.fragment // herramienta para eliminar un div no necesario 
const Layout = (props) => {
    return (
        <React.Fragment> 
            <NavBar></NavBar>
            {props.children}
        </React.Fragment>
    );

}
export default Layout;