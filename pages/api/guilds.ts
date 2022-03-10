import type { NextApiRequest, NextApiResponse } from "next";
import { BOT_TOKEN, DISCORD_API_BASE_URL } from '../../config';

import { 
    Routes,
    RESTGetAPICurrentUserGuildsResult as CurrentUserGuilds,
    
} from 'discord-api-types/v9';
import { REST } from '@discordjs/rest';
import axios from "axios";

type TokenType = "Bot" | "Bearer";

const rest = new REST({version: '9'});

// Get all guilds for a given token & type
async function getCurrentGuilds(token: string, type: TokenType): Promise<CurrentUserGuilds> {

    const res = await axios.get(DISCORD_API_BASE_URL + Routes.userGuilds(), {
        headers: {
            'Authorization': `${type} ${token}`
        }
    });

    return res.data;
}

// All guilds where both and bot and user are in, and the user has the manage server permission.
async function getGuilds(botToken: string, userToken: string): Promise<CurrentUserGuilds> {

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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.query;
    if (req.method === 'GET') {
        if(typeof token === 'string') {
            const guilds = await getGuilds(BOT_TOKEN, token);
            res.status(200).json(guilds);
        } else {
            res.status(400).json({
                'message': 'Missing or invalid token.'
            }); 
        }
    } else {
        res.status(405).json({
            'message': 'Only GET methods are allowed.'
        });
    }


} 

export default handler;