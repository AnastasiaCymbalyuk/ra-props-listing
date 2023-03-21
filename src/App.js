import './App.css';
import data from './components/etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <Listing data={data}/>
  );
}

export default App;
