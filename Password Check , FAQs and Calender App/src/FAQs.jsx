import React, { useState } from 'react';
import './FAQ.css';

const FaqItem = ({question,answer}) =>{
    const [show,setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }
    return(
        <div className={`faq-item ${show ? 'active' : ''}`}>
            <header className="faq-item-header" onClick={toggleShow}>{question}</header>
            <article className='faq-item-body'>
                <aside className='faq-item-body-content'>{answer}</aside>
            </article>
        </div>
    )
}

const FaqAccordion = ({data}) =>{

    return(
    <div className='faq-accordion'>
        <h2>FAQs :</h2>
        {data.map((item)=>(
            <FaqItem key={item.id} question={item.question} answer={item.answer} />
        ))}
    </div>
    )
};

const data = [
    {
        id:1,
        question:"What is React?",
        answer:"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
    },
    {
        id:2,
        question:"What is React used for?",
        answer:"React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation."
    },
    {
        id:3,
        question:"Is React front-end or backend?",
        answer:"React. js: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application."
    },
    {
        id:4,
        question:"Is ReactJS a language?",
        answer:"React JS is a JavaScript library used for building user interfaces (UIs) for single-page applications. React manages the view layer and is used for the development of both web and mobile applications"
    },
];
const FAQs = () => {
  return (
    <div className='faq-container'>
      <FaqAccordion data={data}/>
    </div>
  )
}

export default FAQs
