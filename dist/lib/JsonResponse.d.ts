export declare class JsonResponse {
    data: any;
    message: string;
    error: any;
    ts: string;
    constructor();
    setMessage(message: string): JsonResponse;
    setError(error: Error): JsonResponse;
    setData(data: any): JsonResponse;
}
