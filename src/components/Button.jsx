import React from 'react';

const Button = ({color='coral'}) => {
    return (
        <button style={{backgroundColor:color}} className="button">
            Mi Botton personalizado
        </button>

    )
}

export default Button;
