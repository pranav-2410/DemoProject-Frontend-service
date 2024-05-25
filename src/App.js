import "./App.css";
// import AboutUs from "./Component/AboutUs";
import NavBar from "./Component/NavBar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" about="About Us"/>
      <div className="container my-3">
        <TextForm/>
        {/* <AboutUs/> */}
      </div>
    </>
  );
}

export default App;
