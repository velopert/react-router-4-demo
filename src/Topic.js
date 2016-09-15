import React from 'react';

const Topic = ({params}) => {
    return (
        <div>
            <h3>{params.topicId}</h3>
        </div>
    );
};

export default Topic;