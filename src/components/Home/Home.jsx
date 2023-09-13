/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from '../card/Card';

const Home = () => {
    const [allActors, setAllActors] = useState([])
    const [SelectedActor, setSelectedActor] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    const handelSeated = (actor) => {
        const isExits = SelectedActor.find((item) => item.id == actor.id)
        //console.log(isExits);

        let count = actor.salary;

        if (isExits) {
            alert('All Ready Exit')
        } else {

            SelectedActor.forEach(item => {
                count = count + item.salary
            })
            //console.log(count);

            const totalRemaining = 20000 - count
            if (count > 20000) {
                alert('You dont have enough money')
            } else {
                setTotalCost(count)
                setRemaining(totalRemaining)

                const newActor = [...SelectedActor, actor]
                //console.log(newActor);
                setSelectedActor(newActor)
            }

        }

    }

    //console.log(allActors);
    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={actor.image} alt="" />
                                </div>

                                <h2>{actor.name}</h2>
                                <p><small>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati, quos.</small></p>

                                <div className="info">
                                    <p>Salary:{actor.salary}M</p>
                                    <p>{actor.role}</p>
                                </div>

                                <button onClick={() => handelSeated(actor)} className='btn'>Selected</button>

                            </div>
                        ))
                    }
                </div>

                <div className="cart">
                    <Card
                        SelectedActor={SelectedActor}
                        remaining={remaining}
                        totalCost={totalCost}
                    >

                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Home;