"use client";
import React from 'react';
import './InputFile.css';
import {InputGroup, Form } from 'react-bootstrap';

const InputFile = ({onChange, image, setImage}) => {
	return (
		<div className='inputfile'>
 			<InputGroup size="df" className="mb-3">
        	<Form.Control className='custom'
          		aria-describedby="inputGroup-sizing-sm"
				type='file'
				placeholder='Выберите фото'
				onChange = {onChange}
        	/>
      		</InputGroup>
 		</div>
	);
};

InputFile.propTypes = {};

export default InputFile;