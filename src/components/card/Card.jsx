/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css'

const Card = ({SelectedActor,remaining,totalCost}) => {
    //console.log(SelectedActor);
    return (
        <div>
            <h4>SelectedActor: {SelectedActor.length}</h4>
            <h5>Total Remaining:{remaining}</h5>
            <h5>Total Total Cost:{totalCost}</h5>
            {
                SelectedActor.map(actor =>(
                   <div className='calculate-container'  key={actor.id}>
                  <img className='calculate-img' src={actor.image} alt="" />
                    <div>
                    <p>{actor.name}</p>
                    <p>{actor.role}</p>
                    </div>

                   </div>
                ))
            }
        </div>
    );
};

export default Card;