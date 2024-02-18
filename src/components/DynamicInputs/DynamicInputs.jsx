// DynamicInputs.jsx
import React from 'react';
import MyInputB from '../UI/MyInputB/MyInputB';
import MyButton from '../UI/MyButton/MyButton';
import styles from "./DynamicInputs.module.css"

const DynamicInputs = ({ inputFields, onInputChange, onDeleteGroup }) => {
  return (
    <div>
      {inputFields &&
        inputFields.length > 0 &&
        inputFields.map((input, index) => (
          <div key={input.id} className={styles.button}>
            <MyInputB
              value={input.value}
              onChange={(e) => onInputChange(input.id, e.target.value)}
              placeholder={input.placeholder}
            />
            
            {index % 5 === 4 && ( // Добавляем delete после каждого 6-го input (индекс делится на 5 без остатка)
              <MyButton onClick={() => onDeleteGroup(Math.floor(input.id/5))} value="Delete" variant="dark"/> 
            )}
          </div>
        ))}
    </div>
  );
};

export default DynamicInputs;