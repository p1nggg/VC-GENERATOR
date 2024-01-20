import { Navbar } from "./components/UI/Navbar";
import "./styles/App.css";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyInputB from "./components/UI/MyInputB/MyInputB";
import InputList from "./components/InputList/InputList";
import { Button } from "react-bootstrap";
import MyButton from "./components/UI/MyButton/MyButton";
import FormBlock from "./components/FormBlock/FormBlock";
import Footer from "./components/UI/Footer/Footer";
function App() {

  const [buttons, setButtons] = useState([
      {id:1, variant: "dark", value: "Add", dop: "Experience"},
      {id:2,variant: "dark", value: "Add", dop: "Education"},
      {id:3,variant: "danger", value: "Reset", dop: "F"},
      {id:4,variant: "success", value: "Generate PDF", dop: "F"}
  ])
  const [inputs, setInputs] = useState([
      {id: 1, ref: useRef(), value: "1", onChange: "", placeholder: "1"},
      {id: 2, ref: useRef(), value: "2", onChange: "", placeholder: "1"},
      {id: 3, ref: useRef(), value: "3", onChange: "", placeholder: "1"},
      {id: 4, ref: useRef(), value: "4", onChange: "", placeholder: "1"},
      {id: 5, ref: useRef(), value: "5", onChange: "", placeholder: "1"},
      {id: 6, ref: useRef(), value: "6", onChange: "", placeholder: "1"},
      {id: 6, ref: useRef(), value: "6", onChange: "", placeholder: "1"},
      {id: 6, ref: useRef(), value: "6", onChange: "", placeholder: "1"},
  ])

  return (
    <div className="App">
      <Navbar />
      <FormBlock buttons = {buttons} inputs={inputs}/>
      <Footer/>
    </div>
  );
}

export default App;
// #f3f4f6 - цвет будущего контейнера
