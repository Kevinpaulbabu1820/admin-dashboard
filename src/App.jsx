import "./App.css";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App overflow-y-hidden ">
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Sidebar />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
