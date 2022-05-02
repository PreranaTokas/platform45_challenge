
import './App.css';
import { Home } from './components';

function App() {
  return (
    <>
      <div id="resizeMask">
        <h1>Please increase your browser window</h1>
      </div>
      <div id="main" className="centerXY">
        <Home />
      </div>
    </>
  );
}

export default App;