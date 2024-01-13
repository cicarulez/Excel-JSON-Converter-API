import os from "os";
import CpuInfo from "../interfaces/status/cpu-info.interface";

export default function getCPUInfo(cpuData: os.CpuInfo[]): string {
    const cpuModelMap: Record<string, number> = {};

    cpuData.forEach((cpu) => {
        const model = cpu.model;
        if (!cpuModelMap[model]) {
            cpuModelMap[model] = 0;
        }
        cpuModelMap[model]++;
    });

    const cpuInfo: CpuInfo[] = [];
    for (const model in cpuModelMap) {
        if (cpuModelMap.hasOwnProperty(model)) {
            const count = cpuModelMap[model];
            const cpuString = count > 1 ? `${count} x CPU ${model}` : `CPU ${model}`;
            cpuInfo.push({ model: cpuString, count });
        }
    }

    const cpuModels = cpuInfo.map((value) => value.model);
    return cpuModels.join('; ');
}
