import '../tailwind.css'
import { useEffect } from 'react'
// import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration : 1000
    });
  }, [])
  return <Component {...pageProps} />
}