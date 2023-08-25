export type User = {
    id: number;
    name: string;
    email: string;
    isActive?:boolean;
    type?: string;
}

export type UserType = {
    key: number;
    value: string;
}