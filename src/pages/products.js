import MyCard from "../components/card";
import MyHeader from "../components/header";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MyFooter from "../components/footer";


function Products() {
const cardsData = 
    useSelector(state => state.cards);

const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Количество карточек на странице
  const [filtredData, setfilteredData] = useState(cardsData);
const [isFavFiltred, setIsFavFiltred] = useState(false);
 
const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtredData.length / itemsPerPage);
  
  const handlePageChange = (event, value) => {
    setPage(value);
    // Прокрутка вверх при смене страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const cards = [];
  for (let i = 0; i < currentItems.length; i++) {
    cards.push(

      <MyCard key={currentItems[i].id}
        card={currentItems[i]}
        id={currentItems[i].id}
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

const search=(searchTerm) => {
 let data=cardsData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
 setfilteredData(data);
};



// принудительно обновляет что-то на странице
useEffect(() => {
    if (isFavFiltred){
        setfilteredData(cardsData.filter(item => item.isFav));
    } else{
        setfilteredData(cardsData);
    }
    
    
  }, [cardsData]);
  

return (
  <>
  <MyHeader></MyHeader>
  <Box>
    <span className="Category">Наушники</span>
    <div className="card-list">{cards}</div>
  <Pagination count={totalPages} page={page} onChange={handlePageChange}/>
  </Box>
  <MyFooter></MyFooter>

</>
  );
}

export default Products;
