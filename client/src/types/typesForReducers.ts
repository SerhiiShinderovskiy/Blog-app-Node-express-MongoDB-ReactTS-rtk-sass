import { ReactNode } from "react";

export interface Post {
    _id: number | string;
    title: string;
    body: string;
    createdAt: string | ReactNode;
    updatedAt: string | ReactNode;
}

export interface PostsState {
    posts: Post[]
}