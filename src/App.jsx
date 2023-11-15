import './App.scss';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Description from './Components/Description';
import VerticalPage from './Components/VerticalPage/VerticalPage';
import AnimatedIcon from './Components/AnimatedIcon';
import Footer from './Components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Description />
      <VerticalPage />
      <AnimatedIcon />
      <Footer />
    </main>
  );
}

export default App;
