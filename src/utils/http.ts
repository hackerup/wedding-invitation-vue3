export function get(url: string, callback: (res: any) => void) {
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => res.json()).then((json) => {
            resolve({});
            callback && callback(json);
        }).catch((err) => {
            reject(err);
        })
    }
    )
}