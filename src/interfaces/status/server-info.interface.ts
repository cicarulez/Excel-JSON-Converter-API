/**
 * @example
 * {
 *   "totalMemory": "31.94 GB",
 *   "freeMemory": "17.24 GB",
 *   "uptime": "Less than a second",
 *   "type": "Windows_NT",
 *   "architecture": "x64",
 *   "platform": "win32",
 *   "release": "10.0.19045",
 *   "hostname": "DESKTOP",
 *   "loadAverage": "Not available on Windows platform!",
 *   "cpus": "8 x CPU Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz"
 * }
 */
export default interface ServerInfo {
    totalMemory: string;
    freeMemory: string;
    uptime: string;
    hostname: string;
    type: string;
    architecture: string;
    platform: string;
    release: string;
    loadAverage: string;
    cpus: string;
}
