import { useEffect, useRef } from 'react';

// Placeholder audio URLs - replace with your actual hosted files
const AUDIO_TRACKS = {
    day: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3', // Birds/nature
    night: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3', // Room tone/ambient
};

export default function AudioController({ enabled, isNight }) {
    const audioRef = useRef(null);
    const currentTrackRef = useRef(null);

    useEffect(() => {
        if (!enabled) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            return;
        }

        const trackKey = isNight ? 'night' : 'day';

        // Only reload if track changed
        if (currentTrackRef.current === trackKey && audioRef.current) {
            audioRef.current.play().catch(() => { });
            return;
        }

        // Clean up previous audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
        }

        // Create new audio element
        const audio = new Audio(AUDIO_TRACKS[trackKey]);
        audio.loop = true;
        audio.volume = 0.3; // Subtle ambient level

        audio.play().catch((err) => {
            console.log('Audio autoplay blocked:', err);
        });

        audioRef.current = audio;
        currentTrackRef.current = trackKey;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [enabled, isNight]);

    return null; // This component has no UI
}