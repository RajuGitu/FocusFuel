import LeftPart from "../Components/AiAssistant/LeftPart";
import RightPart from "../Components/AiAssistant/RightPart";

const AiAssistant = () => {
    return (
        <>
            <div className="bg-[#F9F8FB]">
                <div className="ml-[64px] mr-[64px] pt-[24px] pb-[24px] pr-[32px] pl-[32px]">
                    <div className="flex flex-col gap-2 animate-fade-in mb-8 ">
                        <h1 className='md:text-4xl font-extrabold'>AiAssistant</h1>
                    </div>
                    <div className="flex gap-6 box-border">
                        {/* Left Part */}
                        <LeftPart />
                        {/* Right Part */}
                        <RightPart />
                    </div>
                </div>
            </div >
        </>
    )
}

export default AiAssistant;
