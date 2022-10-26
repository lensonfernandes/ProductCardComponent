import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';
import React from "react"
import { ReactDOM } from 'react-dom';
import { useEffect } from 'react';

function App() {

  const [loadedProductList, setLoadedProductList] = React.useState([])

  useEffect(() => {
   
      fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
      .then(res => res.json())
      .then(data => {
      //  console.log(data)
         const loadedProductList = [];
         for(const key in data) {
           loadedProductList.push({
              key: key,
              id: data[key].id,
              newPrice: data[key].newPrice,
             oldPrice: data[key].oldPrice,
             productImage: data[key].productImage,
             productName:data[key].productName,
          })
        }
        // console.log(loadedProductList)
         setLoadedProductList(loadedProductList)
      })
    
    
  }, [])

  return (
    <div className="App">
      <Heading />
      <div className='cards-container'>
        {
          loadedProductList && loadedProductList.map((item, index)=>{
            return (
              <React.Fragment key={item.key}>
              <Card details={item}/>
              {/* {console.log(item)} */}

              </React.Fragment>
             
            )
          })
       
        }
      </div>
    
     
    </div>
  );
}

export default App;
