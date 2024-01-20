import React, { useRef, useState } from 'react';
import styles from './InputList.module.css';
import MyInputB from '../UI/MyInputB/MyInputB';

const InputList = ({inputs}) => {
	
	return (
		<div className={styles.inputlist}>
			<h2>Personal Information</h2>
			{inputs.map((input) =>
				<MyInputB
				ref = {input.ref}
				value={input.title}
				// onChange={e => setInputs(e.tatget.value)}
				placeholder={input.placeholder}
				
				/>



			)
		}
 			
 		</div>
	);
};


export default InputList;