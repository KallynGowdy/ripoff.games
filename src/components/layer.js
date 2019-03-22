import React from 'react';
import style from './layer.css'

const Layer = ({ depth = 0, children, width = 100, height = 100 }) => (
    <div className={style.layer} data-depth={depth} width={width} height={height}>
        {children}
    </div>
);

export default Layer;