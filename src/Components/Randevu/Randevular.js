import React from 'react';
import Randevu from './Randevu';
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Randevular.css"
const Randevular =(props)=>{

    return (

        <div className='liste'>
            {props.items.map((randevu)=>(
                <Randevu
                    ad={randevu.ad}
                    soyad={randevu.soyad}
                    tc={randevu.tc}
                    hastane={randevu.hastane}
                    klinik={randevu.klinik}
                    />
            ))}
        </div>
    );



}
export default Randevular;