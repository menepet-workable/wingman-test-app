import logo from './logo.svg';
import './App.css';
import { LocationSuggest } from 'wingman-fe';
import { useApolloClient } from '@apollo/client';

function App() {
  const client = useApolloClient();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <LocationSuggest schemeId="seekAnz" client={client} />;
    </div>
  );
}

export default App;
