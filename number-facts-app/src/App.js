import logo from './logo.svg';
import './App.css';
import NumApp from './NumApp/NumApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp);

function App() {
  return (
    <NumApp />
  );
}

export default App;
