import React, { useState, Fragment } from 'react';
import './App.css';

const DEFAULT_VALUE = 'Enter Global ID';

function Convertor() {
  const [convertedValue, setConvertedValue] = useState(DEFAULT_VALUE);
  const [error, setError] = useState(null);

  return (
    <Fragment>
      <input
        className="convertor--input"
        autoFocus
        onChange={(event) => {
          const { value: globalId } = event.target;
          let localID = DEFAULT_VALUE;
          if (globalId) {
            try {
              localID = atob(globalId)
            } catch (err) {
              setError('Invalid global ID entered');
            }
          } else {
            setError(null);
          }
          setConvertedValue(localID);
        }}
      />
    {!error && <div className="convertor--output">{convertedValue}</div>}
    {error && <div className="convertor--error">{error}</div>}
    </Fragment>
  );
}

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Convert Global ID to local ID</h1>
      </header>
      <Convertor />
      <footer className="footer">
        created by <a href="https://twitter.com/shetsovdm">Dmitry Shvetsov</a>
      </footer>
    </div>
  );
}

export default App;
