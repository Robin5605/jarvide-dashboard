import { NextApiRequest, NextApiResponse } from "next";
import { Routes, RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v9';
import { 
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI
} from "../../config";
import axios, { AxiosError } from "axios";
import qs from 'qs';

async function exchangeCode(code: string): Promise<RESTPostOAuth2AccessTokenResult | null> {

    try {
        const res = await axios.post("https://discord.com/api/v9/oauth2/token", qs.stringify({
            client_id: OAUTH_CLIENT_ID,
            client_secret: OAUTH_CLIENT_SECRET,
            redirect_uri: OAUTH_REDIRECT_URI,
            code,
            grant_type: "authorization_code",
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        return res.data;
    } catch(error) {
        console.log(error);
        return null;
    }

}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { code } = req.query;
    console.log(code);
    if(typeof code === 'string') {
        const token = await exchangeCode(code);
        if(token) {
            console.log(token);
            res.status(200).json(token);
        } else {
            res.status(400).json({
                'message': 'Missing or invalid code'
            });
        }
    } else {
        res.status(400).json({
            'message': 'Missing or invalid code'
        });
    }
}

export default handler;