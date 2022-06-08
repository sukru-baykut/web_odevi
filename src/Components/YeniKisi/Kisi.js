import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Kisi.css";
const Kisi = (props) => {
  const [enteredAd, setAd] = useState("");
  const [enteredSoyad, setSoyad] = useState("");
  const [enteredTc, setTc] = useState("");
  const [enteredHastane, setHastane] = useState("");
  const [enteredKlinik, setKlinik] = useState("");

  const adHandler = (event) => {
    setAd(event.target.value);
  };
  const soyadHandler = (event) => {
    setSoyad(event.target.value);
  };
  const tcHandler = (event) => {
    setTc(event.target.value);
  };
  const hastaneHandler = (event) => {
    setHastane(event.target.value);
  };
  const klinikHandler = (event) => {
    setKlinik(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = {
      ad: enteredAd,
      soyad: enteredSoyad,
      tc: enteredTc,
      hastane: enteredHastane,
      klinik: enteredKlinik,
    };
    props.onSaveInputs(inputs);
    setAd("");
    setSoyad("");
    setTc("");
    setHastane("Hastane Seçiniz");
    setKlinik("Klinik");
  };

  return (
    <div className="divv">
      <Form onSubmit={submitHandler} className="genel_form">
        <Form.Group className="mb-3 grup">
          <Form.Label>Ad</Form.Label>
          <br></br>
          <Form.Control
            className="input"
            type="text"
            placeholder="Adınızı Girin"
            onChange={adHandler}
            value={enteredAd}
          />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>Soyad</Form.Label>
          <br></br>
          <Form.Control
            className="input"
            type="text"
            placeholder="Soyadınızı Girin"
            onChange={soyadHandler}
            value={enteredSoyad}
          />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>TC</Form.Label>
          <br></br>
          <Form.Control
            className="input"
            type="text"
            placeholder="TC girin"
            onChange={tcHandler}
            value={enteredTc}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Hastane</Form.Label>
          <br></br>
          <Form.Select
            value={enteredHastane}
            onChange={hastaneHandler}
            className="input"
          >
            <option>Hastane Seçiniz</option>
            <option value="İZMİR ATATÜRK EĞİTİM VE ARAŞTIRMA HASTANESİ">
              İZMİR ATATÜRK EĞİTİM VE ARAŞTIRMA HASTANESİ
            </option>
            <option value="EDİRNE SULTAN MURAT DEVLET HASTANESİ">
              EDİRNE SULTAN MURAT DEVLET HASTANESİ
            </option>
            <option value="ÖZEL EKOL HASTANESİ">ÖZEL EKOL HASTANESİ</option>
          </Form.Select>
          <br></br>
          <Form.Label>Klinik</Form.Label>
          <br></br>
          <Form.Select
            value={enteredKlinik}
            onChange={klinikHandler}
            className="input"
          >
            <option>Klinik Seçiniz</option>
            <option value="Kulak Burun Boğaz">Kulak Burun Boğaz</option>
            <option value="Kalp">Kalp</option>
            <option value="Dahiliye">Dahiliye</option>
          </Form.Select>
          <br></br>
        </Form.Group>
        <br></br>

        <Button variant="primary" type="submit">
          kaydet
        </Button>
      </Form>

      <br></br>
    </div>
  );
};
export default Kisi;
