import React,{useState} from 'react';
import './accordion.styles.scss';

import {Link} from 'react-router-dom';

const Accordion = ({title,body,routing})=>{
    const [isOpen,setIsOpen] = useState(false);
    return(
    <div className="accordion">
        <div className="accordion__header" onClick={()=>setIsOpen(!isOpen)} >
            <span>{title}</span>
            <span className='accordion__sign' >{isOpen? '-' : '+'}</span>
        </div>
        {isOpen && <Link to={routing} className="accordion__body">{body}</Link>}
    </div>
)};

export default Accordion;