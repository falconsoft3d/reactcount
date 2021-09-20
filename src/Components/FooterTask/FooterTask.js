import React from 'react';
import './FooterTask.css';

export default function FooterTask({counter, porcent}) {
    return (
        <div className="footer">
            <p className="footer-left">{counter}/45</p>
            <p className="footer-right">{porcent}%</p>
        </div>
    )
}
