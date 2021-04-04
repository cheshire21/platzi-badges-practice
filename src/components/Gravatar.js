import React from 'react';
function Gravatar(props){
    
    return (
        <img 
            className={props.className} 
            src={props.avatarUrl}
        />
    );
}

export default Gravatar;
