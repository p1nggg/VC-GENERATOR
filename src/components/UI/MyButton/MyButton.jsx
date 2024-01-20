import React from 'react';
import styles from './MyButton.module.css';
import { Button } from 'react-bootstrap';

const MyButton = ({variant, value}) => {
	return (
		<div className={styles.mybutton}>
 			<Button variant={variant} size="lg">{value}</Button>
 		</div>
	);
};

export default MyButton;