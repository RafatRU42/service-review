import React, { useEffect, useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';
import UseTitle from '../UseTitle';
import './Services.css'

const Services = () => {
    UseTitle('Service')
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/allservices')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className='homeServices'>
           {
            services.map(ser=><ShowServices service={ser}></ShowServices>)
           }
        </div>
    );
};

export default Services;