import { useState } from 'react';

const useDynamicInputs = (type) => {
  const [inputFields, setInputFields] = useState([]);
  const addInputs = (count = 5) => {
    const newInputs = Array.from({ length: count }, (_, index) => {
      let placeholder;
      if (type === "Exp"){
        switch (index) {
          case 0:
            placeholder = 'Position';
            break;
          case 1:
            placeholder = 'Company';
            break;
          case 2:
            placeholder = 'City';
            break;
          case 3:
            placeholder = 'From (year)';
            break;
          case 4:
            placeholder = 'To (year)';
            break;
          default:
            placeholder = '';
        }
      }
      else{
        switch (index) {
          case 0:
            placeholder = 'University name';
            break;
          case 1:
            placeholder = 'City';
            break;
          case 2:
            placeholder = 'Subject';
            break;
          case 3:
            placeholder = 'From (year)';
            break;
          case 4:
            placeholder = 'To (year)';
            break;
          default:
            placeholder = '';
        }
      }
      console.log(index+inputFields.length)
      return {
        id: index+inputFields.length,
        value: '',
        placeholder,
        delkey: Math.floor((index+inputFields.length)/5)
      };
      
    });

    setInputFields((prevInputFields) => [...prevInputFields, ...newInputs]);
  };

  const deleteGroup = (delkey) => {
    setInputFields((prevInputFields) => 
      prevInputFields.filter((field) => field.delkey !== delkey)
    );
  };

  const handleInputChange = (id, value) => {
    setInputFields((prevInputFields) =>
      prevInputFields.map((input) =>
        input.id === id ? { ...input, value } : input
      )
    );
  };

  return {
    inputFields,
    addInputs,
    deleteGroup,
    handleInputChange,
  };
};

export default useDynamicInputs;