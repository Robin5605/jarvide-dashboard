import { BOT_TOKEN, DISCORD_API_BASE_URL } from '../config';
import { 
    Routes,
    RESTGetAPICurrentUserGuildsResult as CurrentUserGuilds,
    
} from 'discord-api-types/v9';
import axios from "axios";
import { TokenType } from "./types";

// Get all guilds for a given token & type
async function getCurrentGuilds(token: string, type: TokenType): Promise<CurrentUserGuilds> {

    const res = await axios.get(DISCORD_API_BASE_URL + Routes.userGuilds(), {
        headers: {
            'Authorization': `${type} ${token}`,
        },
        validateStatus: status => true,
    });

    return res.data;
}

// All guilds where both and bot and user are in, and the user has the manage server permission.
async function getValidGuilds(botToken: string, userToken: string) {

    const userGuilds = await getCurrentGuilds(userToken, 'Bearer');
    const botGuilds = await getCurrentGuilds(botToken, 'Bot');
    
    const botGuildIDs = botGuilds.map(guild => guild.id);
    let guilds: CurrentUserGuilds = []

    for(const userGuild of userGuilds) {
        if(botGuildIDs.includes(userGuild.id))
            if(parseInt(userGuild.permissions) >= 32) // manage server permission
                guilds.push(userGuild);
    }

    return guilds;

}

const getGuilds = async (token: string) => {
    const guilds = await getValidGuilds(BOT_TOKEN, token);
    return guilds;
} 

export default getGuilds;