import React from 'react';
const Button = ({buttonName,clickHandler}) => {
    return (

        <button onClick={clickHandler}>{buttonName}</button>
    )
};

export default Button;