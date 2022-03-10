import axios from "axios";
import { 
    APIUser, 
    RESTPostOAuth2AccessTokenResult,
    RESTGetAPICurrentUserGuildsResult as CurrentUserGuilds, 
    RESTAPIPartialCurrentUserGuild
} from "discord-api-types/v9";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { OAUTH_URL } from "../config";
import Codeblock from "../components/widgets/Codeblock"
import { BOT_TOKEN } from "../config";

interface IGuildsPropType {
    guilds: CurrentUserGuilds
}

interface IGuildPropType {
    guild: RESTAPIPartialCurrentUserGuild
}

interface IProfilePropType {
    user: APIUser
}

function getAccessToken(): string | null {
    const tokenData = localStorage.getItem("token_data")
    if(!tokenData) return null;
    const parsed = JSON.parse(tokenData) as RESTPostOAuth2AccessTokenResult;

    return parsed.access_token;
}

async function getGuilds(token: string): Promise<CurrentUserGuilds> {
    const res = await axios.get('/api/guilds', {
        params: {token}
    });

    return res.data;
}

async function getUser(token: string): Promise<APIUser> {
    const res = await axios.get('/api/user', {
        params: {token}
    });

    return res.data;
}

const DashboardButton = () => {
    return (
        <button className="w-32 h-8 bg-lush-700 rounded-md hover:bg-lush-800 text-gray-200 duration-200">
            Dashboard
        </button>
    );
}

const Guild = ({ guild }: IGuildPropType) => {
    const iconURL = guild.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`
    : "https://cdn.discordapp.com/embed/avatars/1.png";
    return (
        <div className="flex flex-col items-center w-max space-y-2 col-span-1">
            <div>
                <Image className="rounded-3xl hover:rounded-md duration-200 cursor-pointer" src={iconURL} alt="Guild icon" width={200} height={200}/>
            </div>

            <div className="text-gray-300 w-max text-center">
                <p>{guild.name}</p>
            </div>

        </div>
    );
}

const Profile = ({ user }: IProfilePropType) => {
    const iconURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;
    return (
        <div className="flex bg-dark-850 rounded-lg p-8">
            <div className="flex flex-row space-x-6">
                <Image className="rounded-lg" src={iconURL} alt="Profile picture" width={108} height={108}/>
                <div className="flex flex-col">
                    <p className="text-gray-200 text-3xl">{user.username}</p>
                    <p className="text-gray-400 text-2xl">{'#' + user.discriminator}</p>
                    <p className="text-gray-400 text-2xl font-mono">{'ID: ' + user.id}</p>
                </div>
            </div>
        </div>
    );
}

const Guilds = ({ guilds }: IGuildsPropType) => {
    return (
        <div className="flex flex-col p-8 bg-dark-850 space-y-8 rounded-lg shadow-md">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl text-gray-300">Guilds ({guilds.length})</h1>
                    <h1 className="text-lg text-gray-400">Only guilds in which you have <Codeblock text="manage_server"/> permissions and ones in which the bot is in are shown</h1>
                </div>

                <div className="grid grid-cols-5">
                    {guilds.map(guild => <Guild guild={guild} key={guild.id}/>)}
                </div>
        </div>
    );
}

const GuildsPage = () => {
    const [guildData, setGuildData] = useState<CurrentUserGuilds>();
    const [userData, setUserData] = useState<APIUser>();

    const router = useRouter();
    useEffect(() => {
        const token = getAccessToken();
        if(!token) {
            router.push(OAUTH_URL);
            return;
        }
        console.log("TOKEN: " + token);

        getGuilds(token)
            .then(guilds => {
                setGuildData(guilds);
            })
            .catch(err => {
                console.log(err);
            });

        getUser(token)
            .then(user => {
                setUserData(user);
            })
            .catch(err => {
                console.log(err);
            });
    }, [router]);

    if(!guildData || !userData) return null; // Still loading

    return (
        <div className="flex items-center justify-center bg-dark-900 min-h-screen">
            <div className="flex flex-col space-y-4 w-3/4">
                <Profile user={userData}/>
                <Guilds guilds={guildData}/>
            </div>
        </div>
        
    );

}

export default GuildsPage;