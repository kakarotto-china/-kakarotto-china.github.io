let app = new Vue({
    el: "#app",
    data: {
        password: "",
        message: "验证",
    },
    methods: {
        login() {
            encrypt = md5Encrypt(this.password, this.password.length);
            console.log(encrypt)
            if (ciphertext !== encrypt) {
                this.message = "验证失败"
                return
            }
            // 写入到cookie
            setCookie("login", encrypt)
            window.location.href = protocolPage
        },
    },
    filters: {},
    created() {

    },
    mounted() {

    },
})


let ciphertext = "21d3ee46c0a3642e81fda4869c4ae360"
let protocolPage = "/kakarotto-china.github.io/html/directories.html"

window.onload = function () {
    login = getCookie("login")
    if (login === ciphertext) {
        window.location.href = protocolPage
    }
}

// md5加密
let md5Encrypt = function (word, times = 1) {
    if (times <= 0) {
        return
    }
    let retStr = word
    for (let i = 0; i < times; i++) {
        retStr = CryptoJS.MD5(retStr).toString()
    }
    return retStr
}

// 写cookies
let setCookie = function (name, value, days = 30) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// 读取cookies
let getCookie = function (name) {
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

// 删除cookies
let delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}