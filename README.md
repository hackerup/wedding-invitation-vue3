# wedding-invitation-vue3

>> **PWA**需要在`index.html`引用同级目录下的`registerSW.js`
``` js
//vite.config.ts
//如果index.html不在一级目录
manifest: {
    start_url: "/xx/index.html",
    scope: "/xx/",
}
```

## 安装
```
yarn
yarn dev
```


## 参考
- [wedding-invitation-for-programmers](https://github.com/leadream/wedding-invitation-for-programmers)