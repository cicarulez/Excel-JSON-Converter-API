export default interface GenericResponse<T> {
    data: T;
    message?: string;
}
