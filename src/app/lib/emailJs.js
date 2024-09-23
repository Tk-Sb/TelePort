'use client'
// pages/_app.js
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

function MyApp({ Component, pageProps }) {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID; 
    useEffect(() => {
    emailjs.init(userId)
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
