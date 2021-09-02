import data from "@/mock/data";
import { Howl } from "howler";
import { onMounted } from "vue";
import playAudio from "./playAudio";
import audioSource from '@/assets/k.mp3?url'

interface DataType {
    isCursorVisible: number;
    currentCode: string;
    canExecute: boolean;
}

// 代码输入
export default function progressivelyTyping(editorData: DataType) {

    const source_code = data.code;
    const source_preCode = data.preCode;
    let audioBuffer_k: Howl;

    onMounted(() => {
        audioBuffer_k = new Howl({
            src: [audioSource], //打包时资源会嵌入到js中
            loop: false,
        });
        document.addEventListener(
            "WeixinJSBridgeReady",
            function () {
                playAudio(audioBuffer_k);
            },
            false
        );

        new Promise((resolve) => {
            let count = 0,
                typingCount = 0,
                start = 0,
                typing = 0;
            // 写代码每一帧的函数
            let step = (timestamp: number) => {
                if (start === 0) start = timestamp;
                const elapsed = timestamp - start;
                // 大约每 24 帧光标闪动一次
                if (count % 24 === 0) {
                    editorData.isCursorVisible = editorData.isCursorVisible === 0 ? 1 : 0;
                }
                count++;
                if (elapsed < 50) {
                    typing = requestAnimationFrame(step);
                    return;
                }
                if (
                    source_code[typingCount - 1] == "\n" &&
                    source_code[typingCount - 2] !== "\n"
                ) {
                    if (elapsed < 1000) {
                        typing = requestAnimationFrame(step);
                        return;
                    }
                }
                let randomNumber = Math.round(Math.random() * 6);
                // 模拟打字的随机速度
                if (randomNumber % 4 === 0) {
                    start = timestamp;
                    editorData.currentCode =
                        source_preCode + source_code.substring(0, typingCount);

                    typingCount++;
                    playAudio(audioBuffer_k);
                }

                if (typingCount <= source_code.length) {

                    typing = requestAnimationFrame(step);

                } else {

                    resolve({});
                    editorData.canExecute = true;
                    editorData.isCursorVisible = 0;
                    cancelAnimationFrame(typing);

                }
            };

            typing = requestAnimationFrame(step);
        })

    })


}