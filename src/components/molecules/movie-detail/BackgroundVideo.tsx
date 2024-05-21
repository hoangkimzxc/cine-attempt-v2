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

  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`;

  return (
    <>
      <ReactPlayer
        url={videoUrl}
        playing
        muted
        loop={true}
        width="100%"
        height="100%"
        style={{ position: "fixed", zIndex: "-1", top: 0, left: 0 }}
      />
    </>
  );
}

export default BackgroundVideo;
