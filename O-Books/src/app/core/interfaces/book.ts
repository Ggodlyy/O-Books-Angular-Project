import { IBase } from "./base";

export interface IBook extends IBase {
    title: string;
    author: string;
    genre: string;
    img: string;
    description: string;
    price: number;
    owner: string;
}