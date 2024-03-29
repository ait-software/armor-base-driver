export class ProtocolError extends ES6Error {
    constructor(msg: any, jsonwpCode: any, w3cStatus: any, error: any);
    jsonwpCode: any;
    error: any;
    w3cStatus: any;
    _stacktrace: any;
    set stacktrace(value: any);
    get stacktrace(): any;
}
export class NoSuchDriverError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class NoSuchElementError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class NoSuchFrameError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class UnknownCommandError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class StaleElementReferenceError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class ElementNotVisibleError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class InvalidElementStateError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class UnknownError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    constructor(errorOrMessage: any);
}
export class UnknownMethodError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class UnsupportedOperationError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class ElementIsNotSelectableError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class ElementClickInterceptedError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class ElementNotInteractableError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class InsecureCertificateError extends ProtocolError {
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class JavaScriptError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class XPathLookupError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class TimeoutError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class NoSuchWindowError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class InvalidArgumentError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class InvalidCookieDomainError extends ProtocolError {
    static code(): number;
    static error(): string;
    static w3cStatus(): HTTPStatusCodes;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class NoSuchCookieError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class UnableToSetCookieError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class UnexpectedAlertOpenError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class NoAlertOpenError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class NoSuchAlertError extends NoAlertOpenError {
}
export class ScriptTimeoutError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class InvalidElementCoordinatesError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class InvalidCoordinatesError extends InvalidElementCoordinatesError {
}
export class IMENotAvailableError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [message] error message
     */
    constructor(message?: string | undefined);
}
export class IMEEngineActivationFailedError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class InvalidSelectorError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class SessionNotCreatedError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    constructor(details: any);
}
export class MoveTargetOutOfBoundsError extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class NoSuchContextError extends ProtocolError {
    static code(): number;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class InvalidContextError extends ProtocolError {
    static code(): number;
    /**
     *
     * @param {string} [message]
     */
    constructor(message?: string | undefined);
}
export class NotYetImplementedError extends UnknownMethodError {
}
export class NotImplementedError extends UnknownMethodError {
}
export class UnableToCaptureScreen extends ProtocolError {
    static code(): number;
    static w3cStatus(): HTTPStatusCodes;
    static error(): string;
    /**
     * @param {string} [err] error message
     */
    constructor(err?: string | undefined);
}
export class BadParametersError extends ES6Error {
    static error(): string;
    constructor(requiredParams: any, actualParams: any, errMessage: any);
    w3cStatus: HTTPStatusCodes;
}
/**
 * ProxyRequestError is a custom error and will be thrown up on unsuccessful proxy request and
 * will contain information about the proxy failure.
 * In case of ProxyRequestError should fetch the actual error by calling `getActualError()`
 * for proxy failure to generate the client response.
 */
export class ProxyRequestError extends ES6Error {
    constructor(err: any, responseError: any, httpStatus: any);
    w3cStatus: any;
    w3c: any;
    jsonwp: any;
    getActualError(): ProtocolError;
}
export type HttpResultBody = string | {
    value: HttpResultBodyValue;
    status?: number;
};
export type HttpResultBodyValue = {
    message?: string | undefined;
    error?: string | Error | undefined;
    stacktrace?: string | undefined;
};
export type MJSONWPError = {
    status: number;
    value: string | object;
    message: string;
};
import ES6Error from 'es6-error';
import { StatusCodes as HTTPStatusCodes } from 'http-status-codes';
export namespace errors {
    export { NotYetImplementedError };
    export { NotImplementedError };
    export { BadParametersError };
    export { InvalidArgumentError };
    export { NoSuchDriverError };
    export { NoSuchElementError };
    export { UnknownCommandError };
    export { StaleElementReferenceError };
    export { ElementNotVisibleError };
    export { InvalidElementStateError };
    export { UnknownError };
    export { ElementIsNotSelectableError };
    export { ElementClickInterceptedError };
    export { ElementNotInteractableError };
    export { InsecureCertificateError };
    export { JavaScriptError };
    export { XPathLookupError };
    export { TimeoutError };
    export { NoSuchWindowError };
    export { NoSuchCookieError };
    export { InvalidCookieDomainError };
    export { InvalidCoordinatesError };
    export { UnableToSetCookieError };
    export { UnexpectedAlertOpenError };
    export { NoAlertOpenError };
    export { ScriptTimeoutError };
    export { InvalidElementCoordinatesError };
    export { IMENotAvailableError };
    export { IMEEngineActivationFailedError };
    export { InvalidSelectorError };
    export { SessionNotCreatedError };
    export { MoveTargetOutOfBoundsError };
    export { NoSuchAlertError };
    export { NoSuchContextError };
    export { InvalidContextError };
    export { NoSuchFrameError };
    export { UnableToCaptureScreen };
    export { UnknownMethodError };
    export { UnsupportedOperationError };
    export { ProxyRequestError };
}
/**
 * Type guard to check if an Error is of a specific type
 * @template {Error} T
 * @param {any} err
 * @param {import('armor-types').Class<T>} type
 * @returns {err is T}
 */
export function isErrorType<T extends Error>(err: any, type: import("armor-types").Class<T, object, any[]>): err is T;
export function isUnknownError(err: any): boolean;
/**
 * Retrieve an error derived from MJSONWP status
 * @param {number} code JSONWP status code
 * @param {string|Object} value The error message, or an object with a `message` property
 * @return {ProtocolError} The error that is associated with provided JSONWP status code
 */
export function errorFromMJSONWPStatusCode(code: number, value?: string | any): ProtocolError;
/**
 * Retrieve an error derived from W3C JSON Code
 * @param {string} code W3C error string (see https://www.w3.org/TR/webdriver/#handling-errors `JSON Error Code` column)
 * @param {string} message the error message
 * @param {?string} stacktrace an optional error stacktrace
 * @return {ProtocolError}  The error that is associated with the W3C error string
 */
export function errorFromW3CJsonCode(code: string, message: string, stacktrace?: string | null): ProtocolError;
/**
 * Convert an Armor error to proper W3C HTTP response
 * @param {ProtocolError|MJSONWPError} err The error that needs to be translated
 */
export function getResponseForW3CError(err: ProtocolError | MJSONWPError): any[];
/**
 * Convert an Armor error to a proper JSONWP response
 * @param {ProtocolError} err The error to be converted
 */
export function getResponseForJsonwpError(err: ProtocolError): (HTTPStatusCodes.BAD_REQUEST | HTTPStatusCodes.NOT_FOUND | HTTPStatusCodes.INTERNAL_SERVER_ERROR | HTTPStatusCodes.NOT_IMPLEMENTED | HttpResultBody)[];
//# sourceMappingURL=errors.d.ts.map