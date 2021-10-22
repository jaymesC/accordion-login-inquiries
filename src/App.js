import Accordion from "./components/Accordion";
import "./index.css";
import { data } from "./data";

function App() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="card">
            <div className="left-section">
              <h1>Questions And Answers About Login</h1>
            </div>
            <div className="question__card">
              {data.map((x) => (
                <Accordion {...x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
