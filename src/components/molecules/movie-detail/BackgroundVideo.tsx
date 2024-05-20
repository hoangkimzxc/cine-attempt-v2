import { MovieVideo } from "@store/movieDetailStore";
import ReactPlayer from "react-player";

interface BackgroundVideoListProps {
  backgroundVideos: MovieVideo[];
}

function BackgroundVideo({ backgroundVideos }: BackgroundVideoListProps) {
  if (!backgroundVideos || backgroundVideos.length === 0) {
    return null; // Return null if no videos are available
  }

  const videoKey =
    backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)].key;

  console.log(videoKey);
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoKey}`}
      playing
      muted
      loop={true}
      width="100%"
      height="100%"
      style={{ position: "fixed", zIndex: "-1", top: 0, left: 0 }}
    />
  );
}

export default BackgroundVideo;
