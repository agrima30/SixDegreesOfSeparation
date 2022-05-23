import "./App.css";
import Add from "./components/add/Add";
import CheckRelation from "./components/checkRelation/CheckRelation";
import SetRelation from "./components/setRelation/SetRelation";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Add></Add>
        <SetRelation></SetRelation>
        <CheckRelation></CheckRelation>
      </ContextProvider>
    </div>
  );
}

export default App;
