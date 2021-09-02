import { get } from "@/utils/http";
import data from '@/mock/data'

interface Detail {
    url: string;
}

interface Response {
    code: number,
    data: Array<Detail>
}

//请求lottie动画资源
export function loadAnimationData(callback: (res: any) => void) {
    return get(`./lottie/${data.lottie_name}.json`, (json) => {
        if (callback) {
            callback(json);
        }
    });
}

//请求music163音乐地址
export function loadBGM(callback:(res:string)=>void) {
    return get(
        `https://autumnfish.cn/song/url?id=${data.music163_id}`,
        (json:Response) => {
            if (json.code == 200 && callback) {
                callback(json.data[0].url);
            }
        }
    );
}