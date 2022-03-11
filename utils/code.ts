import { Routes, RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v9';
import { 
    DISCORD_API_BASE_URL,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI
} from "../config";
import axios from "axios";
import qs from 'qs';

const exchangeCode = async (code: string) => {
    const res = await axios.post(DISCORD_API_BASE_URL + Routes.oauth2TokenExchange(), qs.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        redirect_uri: OAUTH_REDIRECT_URI,
        code,
        grant_type: "authorization_code",
    }), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        validateStatus: status => true,
    });

    if(res.status == 200) return res.data as RESTPostOAuth2AccessTokenResult;
    else return null;
}

export default exchangeCode;