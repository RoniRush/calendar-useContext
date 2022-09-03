import React from 'react';
import {PlaceHolderType} from './types'
import './PlaceHolder.css';

const PlaceHolder = (props: PlaceHolderType) => {
    return (
        <div className="placeHolder" style={{height: props.height, width: props.width}} >
        </div>
    );
}

export default PlaceHolder;