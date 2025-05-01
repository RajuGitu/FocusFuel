const RightPart = () => {
    return (
        <div className="rounded-lg bg-card shadow-sm w-[30%] h-[600px] flex flex-col">
            <div className="col-span-3 md:col-span-1 p-6 h-full">
                <h2 className="text-xl font-semibold mb-4">How Can I Help You?</h2>
                <ol className="list-decimal pl-5 text-black space-y-2">
                    <li>
                        <p><span className="font-semibold">Study strategies</span> - Get personalized advice on how to study more effectively.</p>
                    </li>
                    <li>
                        <p><span className="font-semibold">Schedule planning</span> - Help organize your study sessions and breaks.</p>
                    </li>
                    <li>
                        <p><span className="font-semibold">Topic explanations</span> - Ask for explanations on difficult concepts.</p>
                    </li>
                    <li>
                        <p><span className="font-semibold">Wellness tips</span> - Get suggestions for maintaining mental and physical health.</p>
                    </li>
                    <li>
                        <p><span className="font-semibold">Motivation</span> - Receive encouragement when you're feeling stuck.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default RightPart;
