import logo from './logo.svg';
import './App.css';
import Season from './season/Season';
import ClickCounter from './clickCounter/ClickCounter';
import FunnyImgs from './funnyImgs/FunnyImgs';

const App = () => {

  const name = "Barel"

  return(
    <>
      <h1>HELLO {name}</h1>

      <Season />

      <ClickCounter />
      <FunnyImgs />
    </>
  )
}

export default App;
