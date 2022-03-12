import logo from './logo.svg';
import './App.css';
// import Basicmovie from './basicmovie';
// import Webpage from './webpage';
// import BasicCart from './basicCart';
import TopBar from './topBar';
import ImageSection from './components/imageSection';
import BasicCart from './components/basicCart';

function App() {
  return (
    <div className="App">
      
      
        <TopBar />
        <ImageSection />
        <BasicCart name='python' img="https://www.elearninfotech.com/img/courses/python.webp" />
        
        
    </div>
  );
}

export default App;
