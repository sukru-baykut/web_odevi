import React from "react";
import { Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* <h2>{props.ad}</h2>
      <h2>{props.soyad}</h2>
      <h2>{props.tc}</h2>
      <h2>{props.hastane}</h2>
      <h2>{props.klinik}</h2> */
const Randevu = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://www.izsu.gov.tr/Content/images/randevu-1.jpg" />
      <Card.Body>
        <Card.Title>Randevu Bilgileriniz</Card.Title>
        <Card.Text>
        İsim Soyisim  : {props.ad} {props.soyad}    <br></br>
        Kimlik Numarası : {props.tc} <br></br>
        Hastane : {props.hastane} <br></br>
        Klinik : {props.klinik}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Randevu;
