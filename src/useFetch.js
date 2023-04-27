import { useState, useEffect } from "react";

// custom hook must start from "use" otherwise it won't work 
const useFetch = (url) => {
    
    const [blogsURL, setBlogsURL] = useState(null);
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(url)
            .then((res) => {
                // first check if res is not empty
                if (!res.ok) {
                    throw Error("Unable to fetch resource from server");
                } else {
                    return res.json();
                }
            }).then((data) => {
                setBlogsURL(data);
                isLoading(false);
                setError(null);     //need to reset the error message if it occurs later
            }).catch(err => {
                setError(err.message);
                isLoading(false);
            })
    }, [url])

    return { blogsURL, loading, error };
}

export default useFetch; 