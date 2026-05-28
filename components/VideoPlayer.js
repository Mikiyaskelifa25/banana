"use client";

import { useRef, useState, useCallback, useEffect } from "react";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef(null);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }, []);

  const handleVolumeChange = useCallback((e) => {
    const v = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = v;
      setVolume(v);
      if (v === 0) {
        videoRef.current.muted = true;
        setMuted(true);
      } else if (muted) {
        videoRef.current.muted = false;
        setMuted(false);
      }
    }
  }, [muted]);

  const handleSeek = useCallback((e) => {
    const t = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = t;
      setCurrentTime(t);
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 3000);
  }, [playing]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onTimeUpdate = () => setCurrentTime(vid.currentTime);
    const onLoadedMetadata = () => setDuration(vid.duration);
    const onEnded = () => setPlaying(false);
    vid.addEventListener("timeupdate", onTimeUpdate);
    vid.addEventListener("loadedmetadata", onLoadedMetadata);
    vid.addEventListener("ended", onEnded);
    return () => {
      vid.removeEventListener("timeupdate", onTimeUpdate);
      vid.removeEventListener("loadedmetadata", onLoadedMetadata);
      vid.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative group rounded-[22px] overflow-hidden bg-black shadow-xl cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
      onMouseMove={handleMouseMove}
      onClick={togglePlay}
    >
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      {/* Pulsing Play Button Overlay when paused */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-all duration-350">
          <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 shadow-ochre/10 group-hover:shadow-ochre/30">
            <i className="fas fa-play text-2xl text-forest ml-1"></i>
          </div>
        </div>
      )}

      {/* Polished Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent px-6 pb-5 pt-20 transition-opacity duration-300 ${
          showControls ? "opacity-100 animate-[fadeIn_0.2s_ease-out]" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Custom Seek Bar */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 appearance-none bg-white/30 rounded-full cursor-pointer transition-all focus:outline-none hover:h-1.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ochre [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-ochre/50 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
        />
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Play/Pause Button */}
            <button 
              onClick={togglePlay} 
              className="text-white hover:text-ochre-light transition-colors text-lg"
              aria-label={playing ? "Pause" : "Play"}
            >
              <i className={`fas ${playing ? "fa-pause" : "fa-play"}`}></i>
            </button>
            
            {/* Volume Mute Button */}
            <button 
              onClick={toggleMute} 
              className="text-white hover:text-ochre-light transition-colors text-base max-sm:hidden"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              <i className={`fas ${muted || volume === 0 ? "fa-volume-mute" : volume < 0.5 ? "fa-volume-down" : "fa-volume-up"}`}></i>
            </button>
            
            {/* Volume Slider */}
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 sm:w-20 h-1 appearance-none bg-white/30 rounded-full cursor-pointer focus:outline-none max-sm:hidden [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
            
            {/* Time Stamp */}
            <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
              {formatTime(currentTime)} <span className="opacity-40">/</span> {formatTime(duration)}
            </span>
          </div>

          {/* Fullscreen Button */}
          <button 
            onClick={handleFullscreen} 
            className="text-white hover:text-ochre-light transition-colors text-base"
            aria-label="Toggle Fullscreen"
          >
            <i className="fas fa-expand"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

