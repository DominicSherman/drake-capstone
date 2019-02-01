import {INSTAGRAM_CLIENT_ID} from '../config';
import {getRedirectUri} from '../services/redirect-service';

export const INSTAGRAM_AUTH = `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${getRedirectUri()}&response_type=token`;