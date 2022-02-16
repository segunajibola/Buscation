import React from 'react';
import { useParams } from "react-router-dom";
// import useFetch from "../useFetch";

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <>
        <div className='pt-20 pb-4'>
            <h1>Hello World</h1>
                {destination.filter((destination) => destination.state === state)
                .map((destination) => (
                    <div className='text-center' key={ destination.id }>
                        <h1>{destination.state} </h1>
                    </div>
                ))}
            <h1>Hello World</h1>
        </div>
    </>
  )
}

export default ParticularState;