import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "./index.css";
import { data } from "./data";

function App() {
  // const [cards, setCards] = useState(0);

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="left-section">
            <h1>Questions And Answers About Login</h1>
          </div>
          <div className="question__card">
            {data.map((x) => (
              <div key={x.id} className="section">
                <p>{x.question}</p>
                <button>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
