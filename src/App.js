import "./App.css";
import Header from "./components/Header";
import { getSingleCharacter } from "./utils/api";

function App() {
  getSingleCharacter(1).then((res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
