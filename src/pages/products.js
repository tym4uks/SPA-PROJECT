import MyCard from "../components/card";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';


function Products() {
const cardsData = 
    useSelector(state => state.cards);

const [filtredData, setfilteredData] = useState(cardsData);
const [isFavFiltred, setIsFavFiltred] = useState(false);

const cards = [];
  for (let i = 0; i < filtredData.length; i++) {
    cards.push(

      <MyCard key={filtredData[i].id}
        title={filtredData[i].title}
        content={filtredData[i].content}
        isFav={filtredData[i].isFav}
        id={filtredData[i].id}
        />

    );
  }

const showFav = () => {
    let data=cardsData.filter((item)=>{return item.isFav===true});
    setfilteredData(data)
    setIsFavFiltred(true)
    };

const showAll= () => {
    setfilteredData(cardsData)
    setIsFavFiltred(false)
    };

useEffect(() => {
    if (isFavFiltred){
        setfilteredData(cardsData.filter(item => item.isFav));
    } else{
        setfilteredData(cardsData);
    }
    
    
  }, [cardsData]);
  

return (
  <>
  <Box> <Button onClick={() => showAll()}>Показать всё</Button> 
        <Button onClick={() => showFav()}>Показать Избранное</Button></Box>

  <Box><div className="card-list">{cards}</div></Box></>

  );
}

export default Products;
