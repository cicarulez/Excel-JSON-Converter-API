export default function formatLoadAverage(loadAvg: number[]): string {
    if (loadAvg.length !== 3) {
        throw new Error('Input array must contain exactly 3 elements');
    }

    const [oneMinute, fiveMinutes, fifteenMinutes] = loadAvg;
    return `Load averages: 1 minute - ${oneMinute.toFixed(2)}, 5 minutes - ${fiveMinutes.toFixed(2)}, 15 minutes - ${fifteenMinutes.toFixed(2)}`;
}
