import { useState } from "react";
import useSound from "use-sound";

export function usePlay({ audioURL }) {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playBoop, { pause }] = useSound(audioURL, {
    volume,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      playBoop();
    }
    setIsPlaying(!isPlaying);
  };

  return { isPlaying, togglePlay, setVolume };
}
