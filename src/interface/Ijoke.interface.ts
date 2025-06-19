export type IJoke = {
    joke: string;
    status?: number;
}

export type IRated ={

    joke: string;
    rating: 1|2|3;
    date: string;
}