/**
 * Created by 李小白 on 2017/4/10.
 */
    // 给li定义高度，配合css使li独立滚动
var $window = $(window);
var initialWindowHeight = null;

$window.resize(function () {
    sliderHeight();
});

sliderHeight();
function sliderHeight() {
    var wHeight = $(window).height();
    var sliderHeight = wHeight;

    $(".swipe li").height(sliderHeight);//设置li高度
}

for (n = 1; n < 7; n++) {
    var page = 'pagenavi' + n;
    var mslide = 'slider' + n;
    var mtitle = 'emtitle' + n;
    arrdiv = 'arrdiv' + n;
    var as = $("#" + page + "").find("a");

    var tt = new TouchSlider({
        id: mslide,
        'auto': '0',
        fx: 'ease-out',
        direction: 'left',
        speed: 1000,
        timeout: 5000,
        'mouseWheel': false,
        'after': function (newIndex, newSlide) {
            if (newIndex > 0 && newIndex <= 3) {
                var bgTranslate = $(newSlide).children().children();
                var textTranslate = $(newSlide).children().children().children('p');
                console.log(textTranslate);
                bgTranslate.css({
                    transform: 'translate(0, 0)',
                    transition: '3s linear'
                });
                textTranslate.css({
                    transform: 'translate(65%, 0)',
                    opacity: '1',
                    transition: '3s linear'
                });
            }
        }

    });
    tt.page = page;
    tt.p = 0;

    //console.dir(tt); console.dir(tt.__proto__);

    for (var i = 0; i < as.length; i++) {
        (function () {
            var j = i;
            as[j].tt = tt;
            as[j].onclick = function () {
                this.tt.slide(j);
                return false;
            }
        })();
    }
}

