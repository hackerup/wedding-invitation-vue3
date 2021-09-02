const groom = "李雷";
const bride = "韩梅梅";

let date = "2005年12月16日";
let dateEx = "(农历十一月十六)";
let address = "天涯八卦";

const lottie_name = "partyyy"; //lottie动画名称
const music163_id = "1493994313";//网易云音乐id，徐誉滕《天使的翅膀 Angel's Wing》

let preCode = "";

let code = `const { 👦,👧 } = 🌏;
👦.name = "${groom}";
👧.name = "${bride}";

const wedding = new Wedding(👦,👧);
wedding.setDate("${date}");
wedding.setLocation("${address}");
wedding.generateInvitation();
`
//code = "";
export default {
  groom,
  bride,
  date,
  dateEx,
  address,
  lottie_name,
  music163_id,
  preCode,
  code,
  executions: [{
    name: '制作中...',
    time: '',
    visible: false,
    duration:undefined
  }]
}