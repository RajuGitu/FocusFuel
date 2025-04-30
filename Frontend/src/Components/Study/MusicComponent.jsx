import { Music } from "lucide-react";

const MusicComponent = ({ title }) => {
  return (
        <div className="rounded-lg p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3 bg-blue-100/20">
          <Music className="h-4 w-4 text-blue-600" />
          <span className="text-sm text-gray-800">{title}</span>
        </div>
  );
};

export default MusicComponent;
