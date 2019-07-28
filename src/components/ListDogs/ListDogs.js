import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import url from "../../constants/Urlapi/Apiurl";
import CardsDogs from "../CardsDogs/CardsDogs";
import classs from "./style.module.css";
import Paginations from "../Paginations/Paginations";

const ListDogs = () => {
  const [lisImg, setLisImg] = useState([]);
  const [idImagen, setIdImagen] = useState();
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    setLisImg([]);
    fetch(url.urlImg)
      .then(json => json.json())
      .then(json => {
        setLisImg(json.message);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLisImg([]);
        setLoading(false);
      });
  }
  const btnClick = () => { 
    setIdImagen(idImagen)
    getData();
  };
  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return <Spin size="large" tip="loading..." className={classs.spiner} />;
  }
  return (
    <div className={classs.containerCards}>
      <CardsDogs img={lisImg} />
      <Paginations idImg={lisImg} onClick={(e) => btnClick(e.target.value)} />
    </div>
  )
}
export default ListDogs;
