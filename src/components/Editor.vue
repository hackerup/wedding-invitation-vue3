<template>
  <div class="wedding-editor" ref="editor">
    <!--代码编辑区-->
    <pre><code v-html="highlightedCode"></code> </pre>
    <!--模拟编译-->
    <executions
      :canExecute="editorData.canExecute"
      @onUpdating="scrollToBottom"
      @onFinish="editorData.canOpen = true"
      @music_ready="musicReady"
      @lottie_ready="lottieReady"
    />
    <!--展示邀请函-->
    <invitation :canOpen="editorData.canOpen" @music_status="musicStatus" ref="invit" />
  </div>
</template>

<script lang="ts" setup>
import Prism from "prismjs";
import { drawBackground } from "utils/background/drawBackground";
import { excuteFireworks } from "utils/firework/firework";

import Executions from "./Executions.vue";
import Invitation from "./Invitation.vue";

import {
  ref,
  watch,
  computed,
  onUpdated,
  onMounted,
  reactive,
} from "vue";
import progressivelyTyping from "./editor/progressivelyTyping";
import { Howl } from "howler";
import playAudio from "./editor/playAudio";

interface DataType {
  currentCode: string;
  isCursorVisible: number;
  canExecute: boolean;
  canOpen: boolean;
  animationData: unknown
}

const editor = ref();
const invit = ref();

const editorData = reactive<DataType>({
  currentCode: "",
  isCursorVisible: 1,
  canExecute: false,
  canOpen: false,
  animationData: null
});

const highlightedCode = computed(() => {
  // @ts-ignore
  const code = Prism.highlight(editorData.currentCode, Prism.languages.javascript);
  const codeWithCursor = `${code}<span style="opacity:${editorData.isCursorVisible};" >▍</span>`;
  return codeWithCursor;
});

const scrollToBottom = () => {
  let elem = editor.value;
  if (elem) {
    elem.scrollTop = 100000;
  }
}

onUpdated(scrollToBottom);

//打字
progressivelyTyping(editorData);

watch(() => editorData.canOpen, (val) => {
  if (val) {
    invit.value.play(editorData.animationData)
  }
})
let audioBuffer_bgm: Howl;
const musicReady = (src: string) => {
  audioBuffer_bgm = new Howl({
    src,
    loop: true,
  });
  playAudio(audioBuffer_bgm, true);
}

const musicStatus = (status: boolean) => {
  playAudio(audioBuffer_bgm, status);
}

const lottieReady = (source: any) => {
  editorData.animationData = source;
}

onMounted(() => {
  //绘制背景
  let context = drawBackground();
  //放烟花
  excuteFireworks(context);
});

</script>

<style lang="less">
.wedding-editor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 1rem;
  padding-top: 1.5rem;
  pre {
    margin: 0;
    white-space: pre-wrap;
    padding-top: 10rem;
    code {
      margin: 0;
      color: #bbb;
      line-height: 1.2;
      font-family: "Roboto Mono", "Menlo", "Monaco", Courier, monospace;
      font-weight: 500;
    }
  }
}
</style>