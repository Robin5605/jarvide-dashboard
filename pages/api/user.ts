import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { APIUser } from 'discord-api-types/v9';

async function getUser(token: string): Promise<APIUser> {
    const res = await axios({
        baseURL: 'https://discord.com/api/v8',
        url: '/users/@me',
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    return res.data;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.query;
    if(req.method === 'GET') {
        if(typeof token === 'string') {
            const user = await getUser(token);
            res.status(200).json(user);
        } else {
            res.status(400).json({
                'message': 'Missing or invalid token'
            });
        }
    } else {
        res.status(405).json({
            'message': 'Only GET methods are allowed.'
        });
    }
}

export default handler;