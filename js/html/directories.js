let app = new Vue({
    el: "#app",
    data: {
        contentList: [
            {
                category: "搜索",
                content: [
                    {
                        name: "Baidu",
                        url: "http://baidu.com",
                        desc: "百度"
                    },
                    {
                        name: "Google",
                        url: "http://google.com",
                        desc: "谷歌"
                    },
                ]
            },
            {
                category: "影音直播",
                content: [
                    {
                        name: "B站",
                        url: "http://bilibili.com",
                        desc: "哔哩哔哩 视频弹幕网站"
                    },
                    {
                        name: "斗鱼",
                        url: "http://douyu.com",
                        desc: "斗鱼 直播平台"
                    },
                    {
                        name: "虎牙",
                        url: "http://huya.com",
                        desc: "虎牙 直播平台"
                    },
                    {
                        name: "永恒de草薙",
                        url: "https://live.ixigua.com/room/6831486448986753800/",
                        desc: "西瓜视频 永恒[三国]直播"
                    },
                ]
            },
            {
                category: "开发者",
                content: [
                    {
                        name: "Github",
                        url: "http://github.com",
                        desc: "开源 代码托管平台"
                    },
                    {
                        name: "码云",
                        url: "http://gitee.com",
                        desc: "国内开源 代码托管平台"
                    },
                ]
            },
            {
                category: "自定义",
                content: [
                    {
                        name: "Joy Controller",
                        url: "./game/controller.html",
                        desc: "游戏手柄控制器 调试"
                    },
                ]
            },
        ],
    },
    methods: {
        goto(url) {
            window.open(url)
        }
    },
    created() {
    },
    mounted() {
    },
    updated() {
    }
})