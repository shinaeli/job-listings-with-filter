import { useState, useEffect } from "react"


export const useFetchData = (url, options) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    async function getData () {
        try {
            const response = await fetch(url, options);
            if(!response.ok) {
                throw new Error(`Error encountered: ${response.status} and ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
        return () => console.log('fetch executed!');
    }, []);
    
    return {data, isLoading, errorMessage};
}