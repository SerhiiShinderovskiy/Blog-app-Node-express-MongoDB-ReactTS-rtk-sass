import { ReactNode } from "react";

export interface IPost {
    _id: number | string;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}

export interface PropsPostItem {
    post: IPost;
}

export interface IPostList {
    _id?: number | string;
    title: string;
    body?: string;
    createdAt: string | ReactNode;
    updatedAt: string | ReactNode;
}

export interface PostListProps {
    posts: IPostList[];
}