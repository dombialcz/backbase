export interface RegisterUser {
    user: {
        username: string;
        email: string;
        password: string;
    }
}

export interface RestResponse {
    responseCode: number;
    responseMessage: 'Success' | 'Failure';
}

export interface RegisterUserResponse {
    user?: {
        username: string,
        email: string,
        token: string
    }
    errors?: {
        username?: string,
        email?: string,
        password?: string
    }
}



export type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK';
