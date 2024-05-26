'use client'
import React, { useEffect, useState } from 'react';

const Soon = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prevAngle) => (prevAngle + 1) % 360);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className='w-full h-[100vh] flex items-center justify-center text-center px-10 lg:px-20'
            style={{
                backgroundImage: `conic-gradient(from ${angle}deg, #111, #000)`,
            }}
        >
            <h1 className='text-6xl leading-[80px] text-center heroColor2 shadow-solid'>
                Coming Soon
            </h1>
        </div>
    );
};

export default Soon;