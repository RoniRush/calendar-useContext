import React from 'react';
import {ButtonType} from './types'
import './Button.css';

const Button = (props: ButtonType) => {
    return (
        <button
            type={'button'}
            className= {`Button ${props.className}`}
            onClick={ props.onClick}
            disabled= {props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;