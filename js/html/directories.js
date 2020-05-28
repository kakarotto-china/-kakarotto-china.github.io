let app = new Vue({
    el: "#app",
    data: {
        contentList: []
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

window.onload = function () {
    //usage:
    readTextFile("../resources/json/contentList.json", function (text) {
        let contentList = JSON.parse(text);
        console.log(contentList);
        app.contentList = contentList;
    });
}

let readTextFile = function (file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}