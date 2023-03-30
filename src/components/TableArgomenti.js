import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import ClienteService from "../../src/service/ClienteService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

const TableArgomenti = () => {
  const [argomentiDate, setArgomentiDate] = useState([]);

  const [text, setText] = useState("");

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    ClienteService.getTexto().then((res) => {
      let data = JSON.parse(res.data.data);
      

      setArgomentiDate(data);

      console.log(data);
      setArgomentiDate(data);
      //console.log(argomentiDate);
    });
  }, []);

  
  return (
    <>
      <div>TableArgomenti</div>
      <table className="table">
        <thead>
          <tr>
            <th>IdIndiceRicerca</th>
            <th>IdListinoBase</th>
            <th>IdPrev</th>
            <th>InEvidenza</th>
            <th>NomeListino</th>
            <th>PercCoupon</th>
            <th>Prezzo1</th>
            <th>Prezzo1Riv</th>
            <th>Prezzo2</th>
            <th>Prezzo2Riv</th>
            <th>Prezzo3</th>
            

          </tr>
        </thead>
        <tbody>
          {argomentiDate.map((e) => {
            return (
              <tr key={e.IdIndiceRicerca}>
                <td>{e.IdIndiceRicerca}</td>
                <td>{e.IdListinoBase}</td>
                <td>{e.IdPrev}</td>
                <td>{e.InEvidenza}</td>
                <td>{e.NomeListino}</td>
                <td>{e.PercCoupon}</td>
                <td>{e.Prezzo1}</td>
                <td>{e.Prezzo1Riv}</td>
                <td>{e.Prezzo2}</td>
                <td>{e.Prezzo2Riv}</td>
                <td>{e.Prezzo3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>



      
      
    </>
  );
};

export default TableArgomenti;
