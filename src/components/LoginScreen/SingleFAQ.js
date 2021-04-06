import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'

const SingleFAQ = ({ title, info }) => {
    const [showFAQ, setShowFAQ] = useState(false)

    return (
        <li className="faq__single">
            <button 
                onClick={() => setShowFAQ(!showFAQ)}
                className="faq__qn"
            >
                {title} 
                <GoPlus className={`faq__icon ${showFAQ ? 'open' : 'closed'}`} />
            </button>
            <div className={`faq__ans ${showFAQ ? 'open' : 'closed'} `}>
                <span>{info}</span>
            </div>
        </li>
    )
}

export default SingleFAQ
