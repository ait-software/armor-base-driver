"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_WS_PATHNAME_PREFIX = exports.promoteArmorOptionsForObject = exports.promoteArmorOptions = exports.validateCaps = exports.isStandardCap = exports.processCapabilities = exports.STANDARD_CAPS = exports.PREFIXED_ARMOR_OPTS_CAP = exports.statusCodes = exports.getSummaryByCode = exports.JWProxy = exports.normalizeBasePath = exports.server = exports.STATIC_DIR = exports.W3C_ELEMENT_KEY = exports.PROTOCOLS = exports.DEFAULT_BASE_PATH = exports.errorFromCode = exports.BaseDriver = exports.DeviceSettings = exports.DriverCore = void 0;
const bluebird_1 = __importDefault(require("bluebird"));
bluebird_1.default.config({
    cancellation: true,
});
// BaseDriver exports
// eslint-disable-next-line
const driver_1 = require("./basedriver/driver");
Object.defineProperty(exports, "BaseDriver", { enumerable: true, get: function () { return driver_1.BaseDriver; } });
// eslint-disable-next-line
var core_1 = require("./basedriver/core");
Object.defineProperty(exports, "DriverCore", { enumerable: true, get: function () { return core_1.DriverCore; } });
var device_settings_1 = require("./basedriver/device-settings");
Object.defineProperty(exports, "DeviceSettings", { enumerable: true, get: function () { return device_settings_1.DeviceSettings; } });
exports.default = driver_1.BaseDriver;
// MJSONWP exports
__exportStar(require("./protocol"), exports);
var protocol_1 = require("./protocol");
Object.defineProperty(exports, "errorFromCode", { enumerable: true, get: function () { return protocol_1.errorFromMJSONWPStatusCode; } });
// eslint-disable-next-line
var constants_1 = require("./constants");
Object.defineProperty(exports, "DEFAULT_BASE_PATH", { enumerable: true, get: function () { return constants_1.DEFAULT_BASE_PATH; } });
Object.defineProperty(exports, "PROTOCOLS", { enumerable: true, get: function () { return constants_1.PROTOCOLS; } });
Object.defineProperty(exports, "W3C_ELEMENT_KEY", { enumerable: true, get: function () { return constants_1.W3C_ELEMENT_KEY; } });
// Express exports
var static_1 = require("./express/static");
Object.defineProperty(exports, "STATIC_DIR", { enumerable: true, get: function () { return static_1.STATIC_DIR; } });
var server_1 = require("./express/server");
Object.defineProperty(exports, "server", { enumerable: true, get: function () { return server_1.server; } });
Object.defineProperty(exports, "normalizeBasePath", { enumerable: true, get: function () { return server_1.normalizeBasePath; } });
// jsonwp-proxy exports
var proxy_1 = require("./jsonwp-proxy/proxy");
Object.defineProperty(exports, "JWProxy", { enumerable: true, get: function () { return proxy_1.JWProxy; } });
// jsonwp-status exports
var status_1 = require("./jsonwp-status/status");
Object.defineProperty(exports, "getSummaryByCode", { enumerable: true, get: function () { return status_1.getSummaryByCode; } });
Object.defineProperty(exports, "statusCodes", { enumerable: true, get: function () { return status_1.codes; } });
// W3C capabilities parser
var capabilities_1 = require("./basedriver/capabilities");
Object.defineProperty(exports, "PREFIXED_ARMOR_OPTS_CAP", { enumerable: true, get: function () { return capabilities_1.PREFIXED_ARMOR_OPTS_CAP; } });
Object.defineProperty(exports, "STANDARD_CAPS", { enumerable: true, get: function () { return capabilities_1.STANDARD_CAPS; } });
Object.defineProperty(exports, "processCapabilities", { enumerable: true, get: function () { return capabilities_1.processCapabilities; } });
Object.defineProperty(exports, "isStandardCap", { enumerable: true, get: function () { return capabilities_1.isStandardCap; } });
Object.defineProperty(exports, "validateCaps", { enumerable: true, get: function () { return capabilities_1.validateCaps; } });
Object.defineProperty(exports, "promoteArmorOptions", { enumerable: true, get: function () { return capabilities_1.promoteArmorOptions; } });
Object.defineProperty(exports, "promoteArmorOptionsForObject", { enumerable: true, get: function () { return capabilities_1.promoteArmorOptionsForObject; } });
// Web socket helpers
var websocket_1 = require("./express/websocket");
Object.defineProperty(exports, "DEFAULT_WS_PATHNAME_PREFIX", { enumerable: true, get: function () { return websocket_1.DEFAULT_WS_PATHNAME_PREFIX; } });
/**
 * @typedef {import('./express/server').ServerOpts} ServerOpts
 */
//# sourceMappingURL=index.js.map