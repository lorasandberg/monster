import './App.css';
import { useState } from 'react';
import Entry from './Entry';
import Adventure from './Adventure';

function App() {

  const [values, setValues] = useState(Array.from({ length: 10 }, (v,k) => k + 1));

  const [solved, setSolved] = useState(0);

  return (
    <div className="App">
      <header className="App-header" id="header">

        {values.map((value, i) => {

          if(solved < i)
            return;

          return (
            <Entry 
            key={i}
            text={Adventure[i].text} 
            solution={Adventure[i].solution}
            active={i == solved} 
            onSolved={() => setSolved(solved + 1)}
            index={i}
            last={i + 1 == values.length} />
          )
        })}

      </header>
    </div>
  );
}

export default App;
