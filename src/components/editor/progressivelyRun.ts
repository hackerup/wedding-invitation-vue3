interface Execution { time: string; duration?: string; visible: boolean; }

export default function (execution: Execution, customDuration?: number) {
    return new Promise((resolve) => {
        let now = new Date(),
            duration = customDuration ? customDuration : Math.random() * 50 + 250,
            showCode = () => {
                execution.time = now.toLocaleTimeString();
                execution.duration =
                    execution.duration !== undefined
                        ? duration.toFixed(2)
                        : undefined;
                execution.visible = true;
                resolve({});
            };
        setTimeout(showCode, duration);
    });
}

