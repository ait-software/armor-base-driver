/**
 * Maximum size (in bytes) of a given driver's settings object (which is internal to {@linkcode DriverSettings}).
 */
export const MAX_SETTINGS_SIZE: number;
/**
 * @template {StringRecord} T
 * @implements {IDeviceSettings<T>}
 */
export class DeviceSettings<T extends StringRecord> implements IDeviceSettings<T> {
    /**
     * Creates a _shallow copy_ of the `defaultSettings` parameter!
     * @param {T} [defaultSettings]
     * @param {import('armor-types').SettingsUpdateListener<T>} [onSettingsUpdate]
     */
    constructor(defaultSettings?: T | undefined, onSettingsUpdate?: import("armor-types").SettingsUpdateListener<T> | undefined);
    /**
     * @protected
     * @type {T}
     */
    protected _settings: T;
    /**
     * @protected
     * @type {import('armor-types').SettingsUpdateListener<T>}
     */
    protected _onSettingsUpdate: import('armor-types').SettingsUpdateListener<T>;
    /**
     * calls updateSettings from implementing driver every time a setting is changed.
     * @param {T} newSettings
     */
    update(newSettings: T): Promise<void>;
    getSettings(): T;
}
export default DeviceSettings;
export type StringRecord = import('armor-types').StringRecord;
export type IDeviceSettings<T extends StringRecord = StringRecord> = import('armor-types').IDeviceSettings<T>;
//# sourceMappingURL=device-settings.d.ts.map