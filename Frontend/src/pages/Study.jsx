import Grid from "../Components/Study/Grid";

const Study = () => {
    return (
        <>
            <div className="bg-[#F9F8FB]">
                <div className="ml-[64px] mr-[64px] pt-[24px] pb-[24px] pr-[32px] pl-[32px]">
                    <div className="mb-8 flex flex-col gap-2 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-bold font-display">Study <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                            Session
                        </span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-xl">Use our Pomodoro timer to maximize your productivity and enter a flow state.</p>
                    </div>
                    <div className="flex flex-row gap-10 box-border">
                        {/* Left part */}
                        <div className="w-[70%] box-border">
                            <Grid />
                        </div>
                        {/* Right part */}
                        <div className="w-[30%] box-border">
                            alaolndlk
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Study;