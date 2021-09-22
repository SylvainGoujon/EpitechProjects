export interface User {
    id?: number,
    username: string,
    email: string,
    is_admin: boolean
}

export interface PartialUser {
    id?: number,
    username?: string,
    email?: string,
    is_admin?: boolean,
    password?: string,
    conf_password?: string
}