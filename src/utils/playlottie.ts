import lottie from 'lottie-web';

export function playExplosion(anchor:HTMLElement, animationData:Object, callback:(event:MouseEvent)=>void) {
  if (!lottie || !animationData) return;

  const explosionAnimeEle = anchor.appendChild(document.createElement("div"));
  let width = anchor.scrollWidth;
  let height = anchor.scrollHeight;

  explosionAnimeEle.setAttribute("style", `position:absolute;top:0;left:0;z-index:1000;width:${width}px;height:${height}px`)

  explosionAnimeEle.addEventListener("click", (evt) => {
    if (callback) {
      //传回点击事件
      callback(evt)
    }
  })

  const explosionPlayer = lottie.loadAnimation({
    container: explosionAnimeEle,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData
  });

  explosionPlayer.setSpeed(0.8);

  // 播放完成后，销毁爆炸相关的动画和元素
  explosionPlayer.addEventListener("complete", () => {
    explosionPlayer.destroy();
    explosionAnimeEle.parentNode!.removeChild(explosionAnimeEle);
  });
}