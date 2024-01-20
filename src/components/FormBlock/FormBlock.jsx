import React from 'react';
import styles from './FormBlock.module.css';
import InputList from '../InputList/InputList';
import MyButton from '../UI/MyButton/MyButton';


const FormBlock = ({buttons, inputs}) => {
	return (
		<div className={styles.formblock}>
 			<InputList inputs = {inputs}/>
      		<div className={styles.buttons} >
			  {buttons.map((button) => {
          		if (button.dop !== "F") {
            	return (
              	<div key={button.value}>
                	<h2 className={styles.zagol}>{button.dop}</h2>
                	<MyButton value={button.value} variant={button.variant} className={styles.button} />
              </div>
            );
          } 
		  else {
            return (
              <MyButton key={button.value} value={button.value} variant={button.variant}/>
            );
          }
        })}
      		</div>

 		</div>
	);
};


export default FormBlock;



{/* <MyButton value="Add" variant="dark" />
        		<MyButton value="Add" variant="dark" />
        		<MyButton value="Reset" variant="danger" />
        		<MyButton value="Generate PDF" variant="success" /> */}