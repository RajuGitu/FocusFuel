import MusicComponent from "./MusicComponent";

const musicList = [
  { id: 1, title: "Lo-Fi Chill Beats" },
  { id: 2, title: "Focus Vibes" },
  { id: 3, title: "Relaxing Piano" },
  { id: 4, title: "Upbeat Energy" },
  { id: 5, title: "Deep Work" }
];

const Musics = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md animate-fade-in w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4">Focus Music</h3>
      <div className="space-y-3 overflow-y-auto max-h-70">
        {musicList.map((music) => (
          <MusicComponent key={music.id} title={music.title} />
        ))}
      </div>
    </div>
  );
};

export default Musics;
