var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "source/cat.png");
        document.title = '૮₍ ˃ ⤙ ˂ ₎ა回来嘛~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "source/cat.png");
        document.title = '₍ᐢ..ᐢ₎♡撒浪嘿' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
