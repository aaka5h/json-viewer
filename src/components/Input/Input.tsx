import React, {CSSProperties} from 'react';
import './Input.css';

const JsonInputComponent = (props) => {
    return (
        <div className={'wrapper'}>
            <textarea className={'text-area'} ref={props.textField} />
            <button className={'parse-button'} onClick={props.onParseClick}>Parse</button>
        </div>
    );
};

export default JsonInputComponent;
