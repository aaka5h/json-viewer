import React from 'react';

const JsonInputComponent = (props) => {
    return (
        <>
            <textarea ref={props.textField}></textarea>
            <button onClick={props.onParseClick}>Parse</button>
        </>
    );
};

export default JsonInputComponent;
