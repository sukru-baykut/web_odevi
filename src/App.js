import "./App.css";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import YeniKisi from "./Components/YeniKisi/YeniKisi";
import Randevular from "./Components/Randevu/Randevular";
import "./App.css";

const baslangic_array =[
  { 
  ad:'Ali',
  soyad:'Duru',
  tc:'12332112322',
  hastane:"Edirne Sultan Murat Devlet Hastanesi",
  klinik:"göz",
  },
  {
    ad:'aliye',
    soyad:'duru',
    tc:'32112323222',
    hastane:"Özel Ekol Hastanesi",
    klinik:'kbb',
  },
];

const App = () => {

  const[randevular,setRandevular]=useState(baslangic_array);

  const addRandevuHandler =(randevu)=> {
    setRandevular((prevRandevular)=>{
      return [randevu,...prevRandevular];
    });
  };



  return (
    <div style={{background:"#FFB6C1"}}>

      <YeniKisi onAddRandevu ={addRandevuHandler}></YeniKisi>
      <Randevular style={{background:"#FFB6C1"}} items={randevular}></Randevular>
        
    </div>
  );
};

export default App;
