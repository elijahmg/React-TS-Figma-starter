import React, { useRef } from "react";
import logoPng from "./logo.png";
import logoSvg from "./logo.svg?raw";
import Logo from "./Logo";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  return (
    <main>
      <header>
        <img src={logoPng} />
        &nbsp;
        <img src={`data:image/svg+xml;utf8,${logoSvg}`} />
        &nbsp;
        <Logo />
        <h2>Distortion</h2>
      </header>
      <section>
        <input id="input" type="number" min="0" ref={inputRef} />
        <label htmlFor="input">Power</label>
      </section>
      <footer>
        <button className="brand" onClick={onCreate}>
          Rock!!!
        </button>
      </footer>
    </main>
  );
}

export default App;
