import React from 'react';

const Cards = ({meals}) => {
    return (
        <div>
            <li className='card'>
                <h2>{meals.strMeal}</h2>
                <h4>{meals.strArea}</h4>
                <img src={meals.strMealThumb} alt="Recette"></img>
                <p>{meals.strInstructions}</p>
            </li>
        </div>
    );
};

export default Cards;