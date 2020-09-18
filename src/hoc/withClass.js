import React from 'react';

// a function that returns a functional component. higher order component
const withClass = (WrappedComponent, myClass) => {
    return props => (
        <div className={myClass}>
            <WrappedComponent />
        </div>
    )
}

export default withClass;

// curly braces {} nullify the arrow function's default return, must include the Return to return JSX 

// parnenthesis maintain the arrow funcitons default return, no need to vusually include the Return statement. Can only return one expression.