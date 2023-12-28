export default function formatUptime(uptimeInSeconds: number): string {
    const secondsInMinute: number = 60;
    const secondsInHour: number = secondsInMinute * 60;
    const secondsInDay: number = secondsInHour * 24;
    const secondsInMonth: number = secondsInDay * 30;
    const secondsInYear: number = secondsInDay * 365;

    let remainingTime: number = uptimeInSeconds;

    const years: number = Math.floor(remainingTime / secondsInYear);
    remainingTime %= secondsInYear;

    const months: number = Math.floor(remainingTime / secondsInMonth);
    remainingTime %= secondsInMonth;

    const days: number = Math.floor(remainingTime / secondsInDay);
    remainingTime %= secondsInDay;

    const hours: number = Math.floor(remainingTime / secondsInHour);
    remainingTime %= secondsInHour;

    const minutes: number = Math.floor(remainingTime / secondsInMinute);
    const seconds: number = remainingTime % secondsInMinute;

    let uptimeString = '';

    if (years > 0) {
        uptimeString += years === 1 ? `${years} year ` : `${years} years `;
    }
    if (months > 0) {
        uptimeString += months === 1 ? `${months} month ` : `${months} months `;
    }
    if (days > 0) {
        uptimeString += days === 1 ? `${days} day ` : `${days} days `;
    }
    if (hours > 0) {
        uptimeString += hours === 1 ? `${hours} hour ` : `${hours} hours `;
    }
    if (minutes > 0) {
        uptimeString += minutes === 1 ? `${minutes} minute ` : `${minutes} minutes `;
    }
    if (seconds > 0) {
        uptimeString += seconds === 1 ? `${seconds} second ` : `${seconds} seconds `;
    }

    // Check if no units were added
    if (uptimeString === '') {
        uptimeString = 'Less than a second';
    } else {
        uptimeString = uptimeString.trim();
    }

    return uptimeString;
}

