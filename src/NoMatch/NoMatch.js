import React from 'react';

const NoMatch = () => {
    const wrongPath = {
        textAlign: "center",
        margin: "100px",
        color: "red"
    }
    return (
        <div style={wrongPath}>
            <h3>No Match</h3>
            <h1>404! ERROR!!</h1>
        </div>
    );
};

export default NoMatch;