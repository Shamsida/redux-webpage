import Leftbar from "./components/Leftbar/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Rightbar from "./components/Rightbar/Rightbar";
import Update from "./components/Update/Update";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update/>
        <Rightbar/>
      </div>
    </>
  );
};

export default App;