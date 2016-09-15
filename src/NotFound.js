import React from 'react';

const NotFound = ({location}) => {
    return (
        <div>
            <h2>Following page is not found: {location.pathname}</h2>
        </div>
    );
};

export default NotFound;