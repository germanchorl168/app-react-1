import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
