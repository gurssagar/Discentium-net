import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase('https://dist.techwe.me');



    const response = await resolve(event);

    return response;
};