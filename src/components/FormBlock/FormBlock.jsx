// FormBlock.js
import React from "react";
import styles from "./FormBlock.module.css";
import InputList from "../InputList/InputList";
import MyButton from "../UI/MyButton/MyButton";
import DynamicInputs from "../DynamicInputs/DynamicInputs";
import InputFile from "../UI/InputFile/InputFile";
const FormBlock = ({
  buttons,
  inputs,
  add1,
  add2,
  fields1,
  fields2,
  del1,
  del2,
  ch1,
  ch2,
  setInputs,
  fileChange,
  Image,
  setImage
}) => {
  return (
    <div className={styles.formblock}>
      <InputList inputs={inputs} setInputs={setInputs} />
      <div className={styles.buttons}>
        {buttons.map((button) => {
          if (button.dop !== "F") {
            return (
              <div key={button.value}>
                <h2 className={styles.zagol}>{button.dop}</h2>
                {button.dop === "Experience" && (
                  <DynamicInputs
                    inputFields={fields1}
                    onInputChange={ch1}
                    onDeleteGroup={del1}
                  />
                )}
                {button.dop === "Education" && (
                  <DynamicInputs
                    inputFields={fields2}
                    onInputChange={ch2}
                    onDeleteGroup={del2}
                  />
                )}
                {button.id === 1 && (
                  <MyButton
                    onClick={() => add1(5)}
                    value={button.value}
                    variant={button.variant}
                    className={styles.button}
                  />
                )}

                {button.id === 2 && (
                  <MyButton
                    onClick={() => add2(5)}
                    value={button.value}
                    variant={button.variant}
                    className={styles.button}
                  />
                )}
              </div>
            );
          } else {
            return (
              <MyButton
                key={button.value}
                value={button.value}
                variant={button.variant}
                onClick={button.onClick}
              />
            );
          }
        })}
        <h4 className={styles.h4}>Выберите фото:</h4>
        <div className={styles.flex_file}>
          <InputFile onChange={fileChange} image={Image} setImage={setImage}/>
        </div>
        
      </div>
    </div>
  );
};

export default FormBlock;

{
  /* <MyButton value="Add" variant="dark" />
        		<MyButton value="Add" variant="dark" />
        		<MyButton value="Reset" variant="danger" />
        		<MyButton value="Generate PDF" variant="success" /> */
}
