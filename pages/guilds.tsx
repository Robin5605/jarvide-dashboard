import axios from "axios";
import { 
    RESTPostOAuth2AccessTokenResult, 
    RESTGetAPICurrentUserGuildsResult, 
    RESTAPIPartialCurrentUserGuild 
} from "discord-api-types/v9";
import { GetServerSidePropsContext as Context } from "next";
import { APIUser } from "discord-api-types/v9";

import Image from "next/image";
import Codeblock from "../components/widgets/Codeblock";

import exchangeCode from "../utils/code";
import getGuilds from "../utils/guilds";
import getUser from "../utils/user";
import Link from "next/link";

interface GuildsPageProps {
    guilds?: RESTGetAPICurrentUserGuildsResult,
    user?: APIUser,
}

interface IGuildsPropType {
    guilds: RESTGetAPICurrentUserGuildsResult
}

interface IGuildPropType {
    guild: RESTAPIPartialCurrentUserGuild
}

interface IProfilePropType {
    user: APIUser
}

export async function getServerSideProps(ctx: Context) {

    const { code } = ctx.query;
    if(typeof code !== 'string') return { props: { } }; // Non string code in querystring

    const response = await exchangeCode(code);
    if(!response) return { props: { } }; // String code, but invalid code

    const guilds = await getGuilds(response.access_token);
    const user = await getUser(response.access_token);
    return {
        props: {
            guilds,
            user,
        }
    }
    
}

const Guild = ({ guild }: IGuildPropType) => {
    const iconURL = guild.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`
    : "https://cdn.discordapp.com/embed/avatars/1.png";
    return (
        <div className="flex flex-col items-center w-max space-y-2 col-span-1">
            <div>
                <Link href={`/dashboard/${ guild.id }`} passHref>
                    <Image className="rounded-3xl hover:rounded-md filter hover:brightness-150 duration-200 cursor-pointer" src={iconURL} alt="Guild icon" width={200} height={200}/>
                </Link>
            </div>

            <div className="text-gray-300 w-max text-center">
                <p>{guild.name}</p>
            </div>

        </div>
    );
}

const LogoutButton = () => {
    return (
        <Link href='/' passHref>
            <div className="p-3 bg-rose-600 hover:bg-rose-500 duration-200 rounded-md cursor-pointer text-gray-900">
                <p>Logout</p>
            </div>
        </Link>
    );
}

const Profile = ({ user }: IProfilePropType) => {
    const iconURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;
    return (
        <div className="flex bg-dark-850 rounded-lg p-8">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row space-x-6">
                    <Image className="rounded-lg" src={iconURL} alt="Profile picture" width={108} height={108}/>
                    <div className="flex flex-col">
                        <p className="text-gray-200 text-3xl">{user.username}</p>
                        <p className="text-gray-400 text-2xl">{'#' + user.discriminator}</p>
                        <p className="text-gray-400 text-2xl font-mono">{'ID: ' + user.id}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <LogoutButton/>
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


const GuildsPage = ({ guilds, user }: GuildsPageProps) => {
    if(guilds && user) {
        return (
            <div className="flex items-center justify-center bg-dark-900 min-h-screen">
                <div className="flex flex-col space-y-4 w-3/4">
                    <Profile user={user}/>
                    <Guilds guilds={guilds}/>
                </div>
        </div>
        );
    } else {
        return <p>Something went wrong. Please try again.</p>;
    }
}


export default GuildsPage;