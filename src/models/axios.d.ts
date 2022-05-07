import {AxiosResponse, AxiosRequestConfig} from "axios";
declare module 'axios' {
    export interface AxiosRequestConfig extends AxiosRequestConfig {
        noAuth?: boolean;
        noLoading?: boolean;
    }
    export interface AxiosResponse extends AxiosResponse {
        message?:string
    }
}