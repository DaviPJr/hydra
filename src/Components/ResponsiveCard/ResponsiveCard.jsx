import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import CardMobile from '../CardMobile/CardMobile';

export const ResponsiveCard = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }, []);

  return (

    isMobile ? <CardMobile /> : <Card />

  )
}

export default ResponsiveCard;