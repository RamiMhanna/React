import React from 'react'

const Hello = () => {
//    return (
//        <div>
//            <h1>Hello Rami</h1>
//        </div>
//    );
    return React.createElement(
        'div',
        {id: 'hello', className: 'hello'},
        React.createElement('h1', null, 'Hello Rami')
    );
};

export default Hello