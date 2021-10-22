import { useState } from "react";

function Accordion({ question,response }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question__card">
      <div>
        <div className="section">
          <div className="top">
          <p>{question}</p>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
          </div>
        {isOpen && <div className="response">{response}</div>}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
