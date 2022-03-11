import axios from 'axios';
import { APIUser, Routes } from 'discord-api-types/v9';
import { DISCORD_API_BASE_URL } from '../config';

async function getUser(token: string): Promise<APIUser> {
    const res = await axios.get(DISCORD_API_BASE_URL + Routes.user(), {
        headers: { "Authorization": "Bearer " + token },
        validateStatus: status => true,
    });

    return res.data;
}

export default getUser;