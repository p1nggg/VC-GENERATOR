"use client";
import React from 'react';
import styles from './MyInputB.module.css';
import {InputGroup, Form } from 'react-bootstrap';

const MyInputB = ({props, ref, placeholder}) => {
	return (
		<div className={styles.myinputb}>
 			<InputGroup size="df" className="mb-3">
        	<Form.Control
          		aria-describedby="inputGroup-sizing-sm"
          		ref = {ref}
				placeholder={placeholder} 
				{...props}
        	/>
      		</InputGroup>
 		</div>
	);
};


export default MyInputB;