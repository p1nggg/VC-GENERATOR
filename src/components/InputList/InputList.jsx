import React, { useRef, useState } from 'react';
import styles from './InputList.module.css';
import MyInputB from '../UI/MyInputB/MyInputB';

const InputList = ({inputs, setInputs}) => {
	return (
		<div className={styles.inputlist}>
			<h2>Personal Information</h2>
			{inputs.map((input, index) =>
				<MyInputB
				ref = {input.ref}
				value={input.value}
				onChange={(e) => {setInputs(input.id, e.target.value)
				console.log(inputs)}}
				placeholder={input.placeholder}
				key = {index}
				/>
				


			)
		}
 			
 		</div>
	);
};


export default InputList;