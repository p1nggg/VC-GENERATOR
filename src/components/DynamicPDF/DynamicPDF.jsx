import React, { useMemo } from "react";
import styles from "./DynamicPDF.module.css";
import Image from "../../images/foto2.png";
import PdfComponent from "../PdfComponent/PdfComponent";

const DynamicPDF = ({ reff, inputs, inputs1, inputs2, Image }) => {
  const result1 = useMemo(() => {
    const groupedInputs = {};
    inputs1.forEach((input) => {
      const key = input.delkey;
      if (!groupedInputs[key]) {
        groupedInputs[key] = [];
      }
      groupedInputs[key].push(input);
    });
    return Object.values(groupedInputs);
  }, [inputs1]);

  const result2 = useMemo(() => {
    const groupedInputs = {};
    inputs2.forEach((input) => {
      const key = input.delkey;
      if (!groupedInputs[key]) {
        groupedInputs[key] = [];
      }
      groupedInputs[key].push(input);
    });
    return Object.values(groupedInputs);
  }, [inputs2]);

  return (
    <div className={styles.dynamicpdf} ref={reff}>
      <div className={styles.pdfHeader}>
        <h1>
          {inputs[0].value} {inputs[1].value}
        </h1>
        <h2>{inputs[2].value}</h2>
      </div>
      <div className={styles.pdfMain}>
        <div className={styles.pdfDescs}>
          <div className={styles.pdfDesc}>
            <h2>Description</h2>
            <hr />
            <p>{inputs[7].value}</p>
          </div>
          <div className={styles.pdfExp}>
            <h2>Experience</h2>
            <hr />
            {result1.map((obj) => {
              let commonProps = [];
              obj.forEach((input) => {
                commonProps.push(input.value);
              });
              return (
                <PdfComponent
                  key={obj[0].delkey} 
                  {...commonProps}
                />
              );
            })}
          </div>
          <div className={styles.pdfEduc}>
            <h2>Education</h2>
            <hr />
			{result2.map((obj) => {
              let commonProps1 = [];
              obj.forEach((input) => {
                commonProps1.push(input.value);
              });
              return (
                <PdfComponent
                  key={obj[0].delkey} 
                  {...commonProps1}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.pdfInform}>
          <img src={Image} alt="user_avatar" />
          <h3>Personal Details</h3>
          <hr />
          <h5>Address</h5>
          <p>{inputs[4].value}</p>
          <h5>Phone Number</h5>
          <p>{inputs[5].value}</p>
          <h5>Email</h5>
          <p>{inputs[6].value}</p>
          <h5>Age</h5>
          <p>{inputs[3].value}</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPDF;