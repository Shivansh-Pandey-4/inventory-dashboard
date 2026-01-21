export interface State{
     success ?: boolean;
     msg ?: string;
     error ?: {
        email ?: string;
        fullName ?: string;
        password ?: string;
     } | string;
     submitNo : number;
}

export interface SigninState{
     success ?: boolean;
     msg ?: string;
     error ?: {
        email ?: string;
        password ?: string;
     } | string;
     submitNo : number;
}