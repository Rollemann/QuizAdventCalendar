import { useEffect, useState } from 'react'

export default function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setData(data);
            }
            )
            .catch(error => setError(error));

        return () => {
            setLoading(false);
            setError(null);
            setData(null);
        }
    }, [url])

    return {data, loading, error};
}
