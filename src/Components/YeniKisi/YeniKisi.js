import React from 'react';
import Kisi from './Kisi';
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./YeniKisi.css"
const YeniKisi = (props) => {

    const saveInputsHandler = (enteredInputs) => {
        const inputs = {
          ...enteredInputs,
        };
        props.onAddRandevu(inputs);
      };



    return (

        <div className='divvv'>
           <Kisi onSaveInputs={saveInputsHandler}></Kisi> 

        </div>
    );

}
export default YeniKisi;