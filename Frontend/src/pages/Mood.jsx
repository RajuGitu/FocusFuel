import MoodInsights from "../Components/Dashboard/MoodInsights";

const Mood = () => {
  return (
    <>
      <div className="bg-[#F9F8FB]">
        <div className="ml-[64px] mr-[64px] pt-[24px] pb-[24px] pr-[32px] pl-[32px]">
          <h1 className="font-extrabold text-3xl mb-6 ">Mood Tracker</h1>
          <div className="grid grid-cols-1  lg:grid-cols-3">
            <MoodInsights />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mood;
