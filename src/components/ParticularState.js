import React from 'react';
import { useParams } from "react-router-dom";

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <>
        <div className='pt-20 pb-4'>
                {destination.filter((destination) => destination.state === state)
                .map((destination) => (
                    <div className='text-center' key={ destination.id }>
                        <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-32 flex-shrink-0" />
                    </div>
                ))}
        </div>
    </>
  )
}

export default ParticularState;