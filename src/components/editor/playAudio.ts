import { Howl } from "howler";

export default function playAudio(audioBuffer: Howl, pause?: boolean): void {
    if (!audioBuffer) return;
    if (pause) {
        audioBuffer.pause();
        return;
    }
    audioBuffer.play();
}