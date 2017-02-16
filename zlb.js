log = function (e) {
    console.log(e)
}

liveBlock = function () {
    removeDOM(".SidebarListNav--noFollowLink")
}

adblockBanner = function () {
    removeDOM(".AdblockBanner")
}

removeDOM = function (classes) {
    c = document.querySelector(classes)
    c ? c.remove() : ""
}

replaceName = function () {
    n = document.querySelector(".zu-top-nav-userinfo > span")
    // replace name to xxx
    n ? n.innerHTML = "xxx" : ""
}

window.onload = function() {
    liveBlock()
    log("zhihu live blocked.")
    replaceName()
    log("name changed.")
    adblockBanner()
    log("AdblockBanner removed.")
}
