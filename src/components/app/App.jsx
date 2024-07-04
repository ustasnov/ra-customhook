import TestComponent from "../testComponent/TestComponent";
import "./App.css";

function App() {
  return (
    <>
      <TestComponent url={"http://localhost:7070/data"}></TestComponent>
      <TestComponent url={"http://localhost:7070/error"}></TestComponent>
      <TestComponent url={"http://localhost:7070/loading"}></TestComponent>
    </>
  )
}

export default App