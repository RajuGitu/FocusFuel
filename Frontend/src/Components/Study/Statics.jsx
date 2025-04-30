const Statics = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Statistics</h3>
            <div className="space-y-4">
                {/* Total Focus Time */}
                <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Total Focus Time</span>
                    <span className="font-medium">3.5 hrs</span>
                </div>
                <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                    <div className="h-full bg-green-500 w-[70%] rounded-full"></div>
                </div>

                {/* Tasks Completed */}
                <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Tasks Completed</span>
                    <span className="font-medium">1/3</span>
                </div>
                <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                    <div className="h-full bg-orange-500 w-[33%] rounded-full"></div>
                </div>

                {/* Focus Score */}
                <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Focus Score</span>
                    <span className="font-medium">85/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                    <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Statics;
