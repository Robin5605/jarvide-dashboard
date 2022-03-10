import { RESTPostOAuth2AccessTokenResult } from "discord-api-types/v9";
import Link from "next/link";
import { OAUTH_URL } from "../../config";

// Ported straight from /guilds
function getAccessToken(): string | null {
    const tokenData = localStorage.getItem("token_data")
    if(!tokenData) return null;
    const parsed = JSON.parse(tokenData) as RESTPostOAuth2AccessTokenResult;

    return parsed.access_token;
}

const TextSection = () => {
    return (
        <div className="flex flex-col text-center font-mono text-white space-y-2">
            {/* The H tag numbers don't do anything, it's only to help us devs understand the layout easier*/}
            <h2 className="text-4xl tracking-tighter">SIMPLE AND EASY</h2>
            <h1 className="text-6xl font-bold tracking-widest">JARVIDE</h1>
            <h4 className="text-md font-sans tracking-wide text-gray-300">Jarvide is the Discord bot that will change your life.</h4>
        </div>
    );
}

const ButtonSection = () => {

    let token;
    if(typeof window !== 'undefined') {
        token = getAccessToken();
    }

    return (
        <div className="flex flex-row justify-between">
            <div className="bg-lush-700 border-2 border-lush-700 hover:shadow-md text-white hover:bg-lush-600 p-3 rounded-sm duration-200 cursor-pointer">
                <Link href={token ? "/guilds" : OAUTH_URL}>GET STARTED NOW</Link>
            </div>

            <div className=" border-2 border-gray-300 text-gray-300 rounded-sm px-6 py-3 hover:shadow-md hover:border-white hover:text-white duration-200 cursor-pointer">
                <a href="#">LEARN MORE</a>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <div className="flex justify-center p-24 h-3/4  bg-slate-700 ">
            <div className="flex flex-col space-y-24">
                <TextSection/>
                <ButtonSection/>
            </div>
        </div>  
    );
}

export default Header;