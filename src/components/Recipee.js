import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from './Cards';

const Recipee = () => {

    const [data,setData] = useState([]);

    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=> setData(res.data))
    })


    return (
        <div>
            
        </div>
    );
};

export default Recipee;