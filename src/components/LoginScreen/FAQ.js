import React, { useState } from 'react'
import faq from '../../faqData'
import SingleFAQ from './SingleFAQ'

const FAQ = () => {
    const [faqs] = useState(faq)

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="faq__list">
            {faqs.map(faq => (
                <SingleFAQ key={faq.id} {...faq} />
            ))}
            </ul>
        </div>
    )
}

export default FAQ
