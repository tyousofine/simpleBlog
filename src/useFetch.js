import { useEffect, useState } from 'react';

const useFetch = (url) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending ] = useState(true);
        const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
         fetch(url)
             .then(res => {
                 console.log(res)
                 if (!res.ok) {
                     throw Error("could not fetch data from the source")
                 }
                 return res.json()
             })
             .then(data => { 
                 setData(data)
                 setIsPending(false);
                 setError(null)
                 
             })
             .catch((e) => {
                 setIsPending(false)
                 setError(e.message)
                
             })
             
        }, 1000)
        // we are going to use an abort controller to stop use effect fetching when
        // screens switch. It appears that this is not needed in new versions of react?
        // return () => console.log("cleanup")

     },[url])
     return { data, isPending, error}
}


export default useFetch;