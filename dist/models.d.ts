export declare type Result = {
    name: string;
    url: string;
};
export interface ResponseApi<T> {
    count: number;
    next: string;
    previous: any | null;
    result: Array<T>;
}
