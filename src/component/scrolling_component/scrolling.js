import React, {useState} from 'react';

import './style.css';
function Scrolling(){
    const [vg_value, set_vg_value] = useState('Hello World');
    window.onscroll = ()=> {
        set_vg_value(()=> document.documentElement.scrollTop)
    }
    return (
        <>
        <div className="container scroll_height">
            <span className="line">
                <span style={{width: `${vg_value + vg_value/100}px`}}></span>
            </span>
            <svg className="position-fixed" style={{width: '100%', display: 'block'}}> <text x="50%" y="50%"> {vg_value} </text> </svg>
        </div>
        </>
    )
}
export default Scrolling