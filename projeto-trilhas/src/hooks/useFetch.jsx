import { useEffect, useState } from "react"



function useFetch(url){

    const [dados, setDados] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
setIsLoading(true);
fetch(url)
.then((response) => response.json())
.then((data) => {
    setDados(data);
    setIsLoading(false); });

},[url]);

return [dados, isLoading];
}

export default useFetch

