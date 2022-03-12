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
      
       {/*<BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
      <BasicCart name='RRR' price='295' img="https://img.republicworld.com/republic-prod/stories/images/xxhdpi/vupf0bx9is7tjbzc_1645073778.jpeg?1645073789626"/>
         */}
        <TopBar />
        <ImageSection />
        <BasicCart name='python' img="https://www.elearninfotech.com/img/courses/python.webp" />
        
        
    </div>
  );
}

export default App;
