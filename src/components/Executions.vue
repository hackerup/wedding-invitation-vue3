
<template>
  <div class="executions">
    <!--执行命令-->
    <p
      class="code"
      v-for="(execution, index) in executions"
      :key="index"
      v-show="execution.visible"
    >
      <span class="addon">~</span>
      [
      <span class="time">{{ execution.time }}</span>]
      <span class="task">{{ execution.name }}</span>
      <span class="duration" v-if="execution.duration !== undefined">{{ execution.duration }} ms</span>
    </p>
    <!--进度条-->
    <p class="code" v-show="isProcessed">
      <span class="addon">~</span>
      {{ progressBarText }}
      <span class="percentage">{{ percentage }}%</span>
    </p>
    <!--执行命令-->
    <p class="code" v-show="endExecution.visible">
      <span class="addon">~</span>
      [
      <span class="time">{{ endExecution.time }}</span>]
      <span class="task">{{ endExecution.name }}</span>
      <a href="#" @click="emit('onFinish')">查看</a>
    </p>
  </div>
</template>


<script lang="ts" setup>
import { computed, ref, watchEffect, reactive } from "vue";
import DATA from "@/mock/data";
import progressivelyRun from "./editor/progressivelyRun";
import { loadAnimationData, loadBGM } from "./editor/loadSource";

const executions = DATA.executions;
const progressBarText = ref("--------------------------");
const endExecution = reactive({
  name: "制作完成",
  time: "",
  visible: false,
  duration: undefined,
});

const emit = defineEmits(["onFinish", "onUpdating", "music_ready", "lottie_ready"]);

const isProcessed = ref(false);

const percentage = computed(() => {

  const hashL = progressBarText.value.split("").filter((c) => c === "#").length;
  const l = progressBarText.value.length;

  return Math.floor((hashL * 100) / l);
});

const runExecutions = async () => {
  for (const execution of executions) {
    await progressivelyRun(execution);
  }
  // 执行完命令，开始显示进度条
  await successProcessing(Math.floor(Math.random() * 50 + 20));
  try {
    //加载lottie动画
    await loadAnimationData((json) => {
      emit("lottie_ready", json)
    });
    //动画资源加载完成
    await successProcessing(Math.random() * 20 + 75, 2);
    //加载背景音乐
    await loadBGM((src) => {
      emit("music_ready", src);
    });
  } catch (error) {
    console.log(error);
  }

  //BGM资源加载完成
  await successProcessing(100, 2);
  // 执行最后一条命令
  await progressivelyRun(endExecution);

  setTimeout(() => {
    emit("onFinish");
  }, 800);
}

const props = defineProps({
  canExecute: Boolean
})

watchEffect(() => {
  if (props.canExecute === true) {
    runExecutions();
  }
})

const successProcessing = (random: number, mode = 3) => {
  return new Promise((resolve) => {
    let progressing: number,
      progressingCount = 0;
    isProcessed.value = true;
    let step = () => {
      let percent = percentage.value;
      if (progressingCount % mode === 0) {
        progressBarText.value = progressBarText.value.replace("-", "#");
      }
      progressingCount++;
      if (percent < random) {
        progressing = requestAnimationFrame(step);
      } else {
        resolve({});
        cancelAnimationFrame(progressing);
        if (random == 100) {
          progressBarText.value = progressBarText.value.replace(/-/g, "#");
        }
      }
    };
    progressing = requestAnimationFrame(step);
  });
}
</script>

<style lang="less">
.executions {
  .addon {
    color: #68fcfb;
  }
  .time {
    color: #666;
  }
  .task {
    color: #009ab2;
  }
  .duration {
    margin-left: 1rem;
    color: #bf36b7;
  }
  .code {
    margin: 0;
    color: rgb(112, 112, 112);
    line-height: 1.2;
    font-family: "Roboto Mono", "Menlo", "Monaco", Courier, monospace;
    font-weight: 500;
  }
}
</style>