import { useState, useEffect, useRef } from "react";
import { useTimerCart } from "../../context/TimerCartContext";

const Timer = () => {
    const { timer, breakTimer } = useTimerCart();
    const [mode, setMode] = useState("focus"); // 'focus' or 'break'
    const [timeLeft, setTimeLeft] = useState(25 * 60); // Default to 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // Ensure timer and breakTimer are valid numbers
    const focusTime = (Number(timer) || 25) * 60; // Default to 25 minutes
    const breakTime = (Number(breakTimer) || 5) * 60; // Default to 5 minutes
    useEffect(() => {
        if (timer) {
            const seconds = Number(timer) * 60; // Ensure timer is a valid number
            setMode("focus");
            setTimeLeft(seconds);
            setIsRunning(true);
        }
    }, [timer]);

    useEffect(() => {
        setTimeLeft(mode === "focus" ? focusTime : breakTime);
    }, [mode, focusTime, breakTime]);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const percentage =
        ((mode === "focus" ? focusTime : breakTime) - timeLeft) /
        (mode === "focus" ? focusTime : breakTime);

    return (
        <div className="mt-6 flex flex-col items-center rounded-xl bg-white p-6 shadow-md">
            {/* Mode Switch Buttons */}
            <div className="flex justify-between w-full mb-4 bg-gray-100 rounded-xl p-1">
                <button
                    onClick={() => setMode("focus")}
                    className={`w-1/2 text-center rounded-xl py-2 font-medium transition-all ${mode === "focus"
                        ? "bg-purple-600 text-white"
                        : "text-black"
                        }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => setMode("break")}
                    className={`w-1/2 text-center rounded-xl py-2 font-medium transition-all ${mode === "break"
                        ? "bg-purple-600 text-white"
                        : "text-black"
                        }`}
                >
                    Break
                </button>
            </div>

            {/* Circle Timer */}
            <div className="relative w-48 h-48 rounded-full border-8 border-purple-400 flex items-center justify-center mb-6">
                <div className="text-center">
                    <div className="text-3xl font-bold">{formatTime(timeLeft)}</div>
                    <div className="text-sm text-gray-600">
                        {mode === "focus" ? "Focus Time" : "Break Time"}
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => setIsRunning((prev) => !prev)}
                    className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"
                >
                    {isRunning ? "⏸" : "▶"}
                </button>
                <button
                    onClick={() => {
                        setIsRunning(false);
                        setTimeLeft(mode === "focus" ? focusTime : breakTime);
                    }}
                    className="bg-white text-black w-10 h-10 rounded-full border flex items-center justify-center"
                >
                    ↻
                </button>
                <button className="bg-white text-black w-10 h-10 rounded-full border flex items-center justify-center">
                    🔊
                </button>
            </div>

            {/* Timeline */}
            <div className="w-full h-2 rounded-full bg-blue-300">
                <div
                    className="h-2 bg-blue-500 rounded-full transition-all"
                    style={{ width: `${percentage * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Timer;
