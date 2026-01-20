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