import React from 'react';
import './styles/PageError.css';
function PageError(props){
    return(
        <div className="PageError">
            <b>{props.error.message}</b>
        </div>
    );
}

export default PageError;