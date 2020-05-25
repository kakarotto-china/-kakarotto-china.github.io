let app = new Vue({
    el: "#app",
    data: {
        password: "",
        message: ""
    },
    methods: {
        login(){
            encrypt = md5Encrypt(this.password, 10);
            console.log(encrypt)
            if("734d5807701d8d462419b8edc04729c4" !== encrypt){
                this.message = "验证失败"
                return
            }
            window.location.href = "/kakarotto-china.github.io/html/directories.html"
        },
    },
    filters: {},
    created() {

    },
    mounted() {

    },
})

let md5Encrypt = function (word, times) {
    if(times<=0){
        return
    }
    let retStr = word
    for(let i=0; i<times; i++){
        retStr = CryptoJS.MD5(retStr).toString()
    }
    return retStr
}