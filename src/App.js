import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MyRouter from "./Routers/MyRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <MyRouter/>    
      </BrowserRouter>
    </div>
  );
}

export default App;
