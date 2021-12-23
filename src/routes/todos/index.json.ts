import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api"



export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        uid: `${Date.now()}`, //TODO: replace with the UID from the database
        createdAt: new Date(),
        text: request.body.get("text"),
        done: false
    });
}