import BasketCard from "../components/basketCard";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MyHeader from "../components/header";
import MyFooter from "../components/footer";

function Basket() {
const cardsData = 
    useSelector(state => state.cards);
const currentItems = cardsData.filter((item) => {return item.inBasket} );
const currentCost = currentItems.reduce((sum, item) => sum + item.price*item.countInBasket, 0);;

// const [page, setPage] = useState(1);
//   const itemsPerPage = 3; // Количество карточек на странице
//   const [filtredData, setfilteredData] = useState(cardsData);
// const [isFavFiltred, setIsFavFiltred] = useState(false);
 
// const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = filtredData.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(filtredData.length / itemsPerPage);
  
//   const handlePageChange = (event, value) => {
//     setPage(value);
//     // Прокрутка вверх при смене страницы
//     window.scrollTo({ top: 0, behavior: 'sooth' });
//   };m

const cards = [];
  for (let i = 0; i < currentItems.length; i++) {
    cards.push(

      <BasketCard key={currentItems[i].id}
        card={currentItems[i]}
        />

    );
  }

// const showFav = () => {
//     let data=cardsData.filter((item)=>{return item.isFav===true});
//     setfilteredData(data)
//     setIsFavFiltred(true)
//     };

// const showAll= () => {
//     setfilteredData(cardsData)
//     setIsFavFiltred(false)
//     };

// const search=(searchTerm) => {
//  let data=cardsData.filter(item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//  setfilteredData(data);
// };



// // принудительно обновляет что-то на странице
// useEffect(() => {
//     if (isFavFiltred){
//         setfilteredData(cardsData.filter(item => item.isFav));
//     } else{
//         setfilteredData(cardsData);
//     }
    
    
//   }, [cardsData]);
  

return (
  <>
  <MyHeader></MyHeader>
  <Box className="container_basket">
  <Box> 
    {cards}
  </Box>
  <div style={{flexGrow: 1}}></div>
  <Box className="currentCost"> 
    <div style={{ 
  display: 'flex', 
  alignItems: 'center' 
}}>
        <span style={{marginLeft: '5px'}}>ИТОГО</span>
        <div style={{flexGrow: 1}}></div>
        <span style={{marginRight: '5px'}}>{currentCost}</span>
    </div>
    <button style={{padding: '5px', height: "30px"}}>Перейти к оформлению</button>
  </Box></Box>
<MyFooter></MyFooter>
</>
  );
}

export default Basket;
