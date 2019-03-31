import React from 'react';
import style from './layer.module.css'

const Layer = ({ depth = 0, children }) => (
    <div className={style.layer} data-depth={depth}>
        {children}
    </div>
);

export default Layer;