import React, { useState, useEffect } from 'react';
import './loading.scss';

const Loading = () => {
    const [timeout, setTimeout] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeout(false)}, 5000);
        return  () => clearTimeout(timer);
    },[])

    return (
        <section className="loading" style={timeout ? { left: '0' } : { left: '150%' }}>
            <h1 className="loading__load">Loading</h1>
        </section>
    );
};

export default Loading;