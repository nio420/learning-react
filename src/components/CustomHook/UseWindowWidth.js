import {useState, useEffect} from 'react'

 const useWindowWidth = (screnSize) => {
    const [ smallScren, setSmallScren ] = useState(false);

    
    useEffect (() => {
        const checkScrenSize = () =>{
            setSmallScren(window.innerWidth < screnSize);
        }
        checkScrenSize();
        window.addEventListener('resize', checkScrenSize);
        return () => window.removeEventListener('resize', checkScrenSize);
    }, [screnSize])

    return smallScren;
}

export default useWindowWidth;