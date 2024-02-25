import { Navbar } from "../components/UI/Navbar";
import "../styles/App.css";
import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBlock from "../components/FormBlock/FormBlock";
import Footer from "../components/UI/Footer/Footer";
import DynamicPDF from "../components/DynamicPDF/DynamicPDF";
import { useReactToPrint } from "react-to-print";
import useDynamicInputs from "../hooks/useDynamicInputs";



function Main() {
  const {
    inputFields: inputFields1,
    addInputs: addInputs1,
    deleteGroup: deleteGroup1,
    handleInputChange: handleInputChange1,
  } = useDynamicInputs("Exp");
  const [links, setLinks] = useState([
    { href: "/main", value: "Главная" },
    { href: "/info", value: "Информация" },
    { href: "/about", value: "Об Авторе" },
  ]);

  const items = [
    { href: "/vcgen", value: "Генератор" },
    { href: "/land", value: "Главная" },
    { href: "/info", value: "Информация" },
  ];
  const [Image, setImage] = useState('')
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const {
    inputFields: inputFields2,
    addInputs: addInputs2,
    deleteGroup: deleteGroup2,
    handleInputChange: handleInputChange2,
  } = useDynamicInputs("Educ");

  const contentRef = useRef();
  const [buttons, setButtons] = useState([
    { id: 1, variant: "dark", value: "Add Ex", dop: "Experience" },
    { id: 2, variant: "dark", value: "Add Ed", dop: "Education" },
    { id: 3, variant: "danger", value: "Reset", dop: "F" },
    { id: 4, variant: "success", value: "Generate PDF", dop: "F" },
  ]);
  const [inputs, setInputs] = useState([
    { id: 1, value: "Name", placeholder: "First Name" },
    { id: 2, value: "", placeholder: "Last Name" },
    { id: 3, value: "Title", placeholder: "Title" },
    { id: 4, value: "", placeholder: "Age" },
    { id: 5, value: "", placeholder: "Address" },
    { id: 6, value: "", placeholder: "Phone Number" },
    { id: 7, value: "", placeholder: "Email" },
    { id: 8, value: "", placeholder: "Description" },
  ]);
  const handleInputsChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };
  const seeRef = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Resume",
  });
  const reset = () => {
    window.location.reload();
  };
  useEffect(() => {
    setButtons([
      { id: 1, variant: "dark", value: "Add Ex", dop: "Experience" },
      { id: 2, variant: "dark", value: "Add Ed", dop: "Education" },
      { id: 3, variant: "danger", value: "Reset", dop: "F", onClick: reset },
      {
        id: 4,
        variant: "success",
        value: "Generate PDF",
        dop: "F",
        onClick: seeRef,
      },
    ]);
  }, []);

  return (
    <div className="App">
      <Navbar header="Меню" items={items} />
      <FormBlock
        setInputs={handleInputsChange}
        buttons={buttons}
        inputs={inputs}
        fields1={inputFields1}
        fields2={inputFields2}
        add1={addInputs1}
        add2={addInputs2}
        del1={deleteGroup1}
        del2={deleteGroup2}
        ch1={handleInputChange1}
        ch2={handleInputChange2}
        fileChange = {handleFileChange}
        Image = {Image}
        setImage = {setImage}
      />
      <DynamicPDF
        reff={contentRef}
        inputs1={inputFields1}
        inputs2={inputFields2}
        inputs={inputs}
        Image = {Image}
      />
      <Footer />
    </div>
  );
}

export default Main;
