import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    const isMouted = useRef(true);

    useEffect(() => {
        return () => {
            isMouted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            loading: true,
            erro: null,
            data: null,
        });

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMouted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data,
                        });
                    } else {
                        console.log("Setstate no gravado")
                    }
                }, 1000);
            });
    }, [url]);

    return state;
};