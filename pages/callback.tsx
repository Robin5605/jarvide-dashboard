import { useRouter } from "next/router";
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from "react";
import Link from "next/link";
import { RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v9';
import { NextPage } from "next";

function toLocalStorage(data: RESTPostOAuth2AccessTokenResult): void {
    localStorage.setItem("token_data", JSON.stringify(data));
}

function fromLocalStorage(): RESTPostOAuth2AccessTokenResult | null {
    const data = localStorage.getItem("token_data");
    if(!data) return null;
    return JSON.parse(data); 
}

const Callback: NextPage = () => {
    const router = useRouter();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if(!router.isReady) return;
        const code = router.query.code;
        if(typeof code !== 'string') return;

        console.log(code);

        axios.get('/api/code', {
            params: {code}
        }).then(res => {
            toLocalStorage(res.data as RESTPostOAuth2AccessTokenResult);
            console.log(res.data);
            router.push('/guilds');
        }).catch((error: AxiosError) => {
            setError(true);
            console.log(error);
        });

    }, [router]);

    if(error) return <p>Something went wrong. Please try again.</p>;

    return null;
    
}

export default Callback;