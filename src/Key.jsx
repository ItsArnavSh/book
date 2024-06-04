import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Key({ number}) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Count up only once when it comes into view
        threshold: 0 // Adjust as needed for when the component should start counting
    });

    return (
        <div ref={ref} >
            {inView && <CountUp end={number} />}
        </div>
    );
}

export default function Kiy() {
    return (
        <div className='bg-black text-white andika-regular p-40 justify-center flex items-center text-center'>
            <div className='flex flex-col md:flex-row'>
                <div  className = "gradient-text text-4xl andika-bold p-5 flex flex-col items-center">
                
                <div className='flex flex-row text'><Key number={30000}/>+</div>
                <p className='text-white'>Satisfied Customers</p>
                </div>


                <div  className = "gradient-text text-4xl andika-bold p-5 flex flex-col items-center">
                <div className='flex flex-row'><Key number={500000}/>+</div>
                <p className='text-white'>Summaries Generated</p>
                </div>


                <div  className = "gradient-text text-4xl andika-bold p-5 flex flex-col items-center">
                <div className='flex flex-row'><Key number={800000}/>+</div>
                <p className='text-white'>Hours Saved</p>
                </div>
                
            </div>
            
        </div>
    );
}
