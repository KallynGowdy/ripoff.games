import React from 'react';

const Layer = ({ depth = 0, children }) => (
    <li className="layer" data-depth={depth}>
        {children}
    </li>
);

export default Layer;