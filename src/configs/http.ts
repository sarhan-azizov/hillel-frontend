import { CachePolicies } from "use-http";

export const HTTP_HOST = 'http://localhost:3000'
export const HTTP_OPTIONS = {
    cachePolicy: CachePolicies.NO_CACHE,
    interceptors: {
        request: async (req: any) => {
            req.options.credentials = 'include';

            return req.options;
        }
    }
};

export type HTTP_RESPONSE = {
    loading: boolean;
    data?:any;
    error: object | null;
}

export const HTTP_INITIAL_STATE: HTTP_RESPONSE = {
    loading: false,
    error: null,
}