import reactLogo from './assets/react.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Description from './Components/Description';
import VerticalPage from './Components/VerticalPage';

{
  /* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */
}

function App() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Description />
      <VerticalPage />
    </main>
  );
}

export default App;
