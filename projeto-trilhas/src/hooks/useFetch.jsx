import { useState } from "react"



function useFetch(url){

    const [dados, setDados] = useState(null);

fetch(url)
.then((response)=>response.json())
.then((data) => setDados(data ))
.catch()


return dados;
}

export default useFetch

// const [data, setData] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//     setIsLoading(true);
//     fetch(url)
//         .then((res) => res.json())
//         .then((value) => {
//             setData(value);
//             setIsLoading(false);
//         });
// }, [url]);

// return [data, isLoading];