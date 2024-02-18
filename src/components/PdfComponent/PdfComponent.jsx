import React from 'react';
import './PdfComponent.css';

const PdfComponent = (propArray) => {
	return (
		<div className='pdfcomponent grid'>
 			<div className='company__info '>
			 	<p>{propArray[3]} - {propArray[4]}</p>
			</div>
			<div className='city__info '>
				<h4>{propArray[0]}</h4>
				<div id='year__info'>
				<p>{propArray[1]}</p>
				<p>{propArray[2]}</p>
				</div>
			</div>
 		</div>
	);
};


export default PdfComponent;