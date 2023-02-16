import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("api/testwithcurrentuser")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div className="App">hello world</div>;
}

export default App;
