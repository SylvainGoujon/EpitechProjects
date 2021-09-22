export default interface ApiResponse<T> {
    success: boolean,
    message: string | null,
    body: T
}