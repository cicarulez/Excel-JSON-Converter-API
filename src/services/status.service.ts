import os from "os";
import ServerInfo from "../interfaces/status/server-info.interface";
import formatUptime from "../helpers/uptime-formatter";
import getCPUInfo from "../helpers/cpu-info-formatter";
import formatLoadAverage from "../helpers/load-average-formatter";

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const uptime = os.uptime();
const hostname = os.hostname();
const type = os.type();
const platform = os.platform();
const architecture = os.arch();
const release = os.release();
const loadAverage = os.loadavg();
const cpus = os.cpus();

const serverInfo: ServerInfo = {
    totalMemory: `${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    freeMemory: `${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    uptime: formatUptime(uptime),
    type,
    architecture,
    platform,
    release,
    hostname,
    loadAverage: platform !== "win32" ? formatLoadAverage(loadAverage) : 'Not available on Windows platform',
    cpus: getCPUInfo(cpus)
};

export default serverInfo;
