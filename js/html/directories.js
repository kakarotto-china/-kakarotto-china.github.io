let app = new Vue({
    el: "#app",
    data: {
        list: [{
                name: "Joy Controller",
                url: "./game/controller.html",
                desc: "游戏手柄控制器调试"
            },
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
            {
                name: "Github",
                url: "http://github.com",
                desc: "开源代码托管平台"
            },
            {
                name: "码云",
                url: "http://gitee.com",
                desc: "国内开源代码托管平台"
            },
            {
                name: "B站",
                url: "http://bilibili.com",
                desc: "哔哩哔哩视频弹幕网站"
            },
            {
                name: "斗鱼",
                url: "http://douyu.com",
                desc: "斗鱼直播平台"
            },
            {
                name: "虎牙",
                url: "http://huya.com.com",
                desc: "虎牙直播平台"
            },
            {
                name: "永恒de草薙",
                url: "https://live.ixigua.com/room/6831486448986753800/",
                desc: "西瓜视频 永恒[三国]直播"
            },
        ]
    },
    methods: {
        goto(url){
            window.location.href = url
        }
    },
    created(){},
    mounted(){},
    updated(){}
})