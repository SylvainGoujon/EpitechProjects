export default interface IResponse<T> {

    success: boolean,
    message: string | null,
    body: T
}