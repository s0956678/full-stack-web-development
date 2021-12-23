import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push({
        createdAt: new Date(),
        text: request.body.get("text"),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }

}