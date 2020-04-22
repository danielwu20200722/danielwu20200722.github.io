var bannerText1 = document.querySelector('.js-bannerText1');
bannerText1.innerHTML = bannerText1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var bannerText2 = document.querySelector('.js-bannerText2');
bannerText2.innerHTML = bannerText2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var bannerText3 = document.querySelector('.js-bannerText3');
bannerText3.innerHTML = bannerText3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline().add({
    targets: '.js-bannerText1 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1500,
    delay: (el, i) => 150 * (i + 1)
});
anime.timeline().add({
    targets: '.js-bannerText2 .letter',
    translateX: [80, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 1000 + 100 * i,
});
anime.timeline().add({
    targets: '.js-bannerText3 .letter',
    translateX: [80, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 1500 + 100 * i,
});
anime.timeline().add({
    targets: '.js-bannerText4 p',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 2000 + 500 * i
});





(function () {
    $(function () {

        /*  Globals
        -------------------------------------------------- */
        var PROPERTIES = ['translateX', 'translateY', 'opacity', 'rotate', 'scale'],
            $window = $(window),
            $body = $('body'),
            wrappers = [],
            currentWrapper = null,
            scrollTimeoutID = 0,
            bodyHeight = 0,
            windowHeight = 0,
            windowWidth = 0,
            prevKeyframesDurations = 0,
            scrollTop = 0,
            relativeScrollTop = 0,
            currentKeyframe = 0,
            btnTop = -($(window).innerWidth() / 24),
            keyframes = [{
                'wrapper': '.js-contentBanner',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-bannerText1',
                    'translateY': -140,
                    'opacity': 0
                }, {
                    'selector': '.js-bannerText2',
                    'translateY': -110,
                    'opacity': 0
                }, {
                    'selector': '.js-bannerText3',
                    'translateY': -110,
                    'opacity': 0
                }, {
                    'selector': '.js-bannerText4',
                    'opacity': [1, 0]
                }]
            }, {
                'wrapper': '.js-contentBanner',
                'duration': '30%',
                'animations': []
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterImage',
                    'translateY': '-65%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterText1',
                    'translateY': '-65%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterText2',
                    'translateY': '-30%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-scooterText3',
                    'translateY': '-28%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-scooterText4',
                    'translateY': '-26%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '30%',
                'animations': []
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterText2',
                    'translateY': ['-30%', '-40%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText3',
                    'translateY': ['-28%', '-38%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText4',
                    'translateY': ['-26%', '-36%'],
                    'opacity': [1, 0]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterText5',
                    'translateY': '-30%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-scooterText6',
                    'translateY': '-28%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-scooterText7',
                    'translateY': '-26%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '30%',
                'animations': [{
                    'selector': '.js-contentBtn',
                    'translateY': btnTop,
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '30%',
                'animations': []
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-scooterImage',
                    'translateY': ['-65%', '-70%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText1',
                    'translateY': ['-65%', '-70%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText5',
                    'translateY': ['-30%', '-40%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText6',
                    'translateY': ['-28%', '-38%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-scooterText7',
                    'translateY': ['-26%', '-36%'],
                    'opacity': [1, 0]
                }]
            }, {
                'wrapper': '.js-contentScooter',
                'duration': '30%',
                'animations': []
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-contentBtn',
                    'translateY': [btnTop, btnTop],
                }, {
                    'selector': '.js-companyImage',
                    'translateY': '-65%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-contentBtn',
                    'translateY': [btnTop, btnTop],
                }, {
                    'selector': '.js-companyText1',
                    'translateY': '-65%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-companyText2',
                    'translateY': '-30%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-companyText3',
                    'translateY': '-28%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-companyText4',
                    'translateY': '-26%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '30%',
                'animations': []
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-companyText2',
                    'translateY': ['-30%', '-40%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-companyText3',
                    'translateY': ['-28%', '-38%'],
                    'opacity': [1, 0]
                }, {
                    'selector': '.js-companyText4',
                    'translateY': ['-26%', '-36%'],
                    'opacity': [1, 0]
                }]
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': [{
                    'selector': '.js-companyText5',
                    'translateY': '-30%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-companyText6',
                    'translateY': '-28%',
                    'opacity': [0, 1]
                }, {
                    'selector': '.js-companyText7',
                    'translateY': '-26%',
                    'opacity': [0, 1]
                }]
            }, {
                'wrapper': '.js-contentCompany',
                'duration': '100%',
                'animations': []
            }]

        /*  Construction
        -------------------------------------------------- */
        init = function () {
            scrollIntervalID = setInterval(updatePage, 10);
            setupValues();
            $window.resize(throwError)
            if (isTouchDevice) {
                $window.resize(throwError)
            }
        }

        setupValues = function () {
            scrollTop = $window.scrollTop();
            windowHeight = $window.height();
            windowWidth = $window.width();
            convertAllPropsToPx();
            buildPage();
        }

        buildPage = function () {
            var i, j, k;
            for (i = 0; i < keyframes.length; i++) { // loop keyframes
                bodyHeight += keyframes[i].duration;
                if ($.inArray(keyframes[i].wrapper, wrappers) == -1) {
                    wrappers.push(keyframes[i].wrapper);
                }
                for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
                    Object.keys(keyframes[i].animations[j]).forEach(function (key) { // loop properties
                        value = keyframes[i].animations[j][key];
                        if (key !== 'selector' && value instanceof Array === false) {
                            var valueSet = [];
                            valueSet.push(getDefaultPropertyValue(key), value);
                            value = valueSet;
                        }
                        keyframes[i].animations[j][key] = value;
                    });
                }
            }
            $body.height(bodyHeight);
            $window.scroll(0);
            currentWrapper = wrappers[0];
            $(currentWrapper).show();
        }

        convertAllPropsToPx = function () {
            var i, j, k;
            for (i = 0; i < keyframes.length; i++) { // loop keyframes
                keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
                for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
                    Object.keys(keyframes[i].animations[j]).forEach(function (key) { // loop properties
                        value = keyframes[i].animations[j][key];
                        if (key !== 'selector') {
                            if (value instanceof Array) { // if its an array
                                for (k = 0; k < value.length; k++) { // if value in array is %
                                    if (typeof value[k] === "string") {
                                        if (key === 'translateY') {
                                            value[k] = convertPercentToPx(value[k], 'y');
                                        } else {
                                            value[k] = convertPercentToPx(value[k], 'x');
                                        }
                                    }
                                }
                            } else {
                                if (typeof value === "string") { // if single value is a %
                                    if (key === 'translateY') {
                                        value = convertPercentToPx(value, 'y');
                                    } else {
                                        value = convertPercentToPx(value, 'x');
                                    }
                                }
                            }
                            keyframes[i].animations[j][key] = value;
                        }
                    });
                }
            }
        }

        getDefaultPropertyValue = function (property) {
            switch (property) {
                case 'translateX':
                    return 0;
                case 'translateY':
                    return 0;
                case 'scale':
                    return 1;
                case 'rotate':
                    return 0;
                case 'opacity':
                    return 1;
                default:
                    return null;
            }
        }

        /*  Animation/Scrolling
        -------------------------------------------------- */
        updatePage = function () {
            window.requestAnimationFrame(function () {
                setScrollTops();
                if (scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
                    animateElements();
                    setKeyframe();
                }
            });
        }

        setScrollTops = function () {
            scrollTop = $window.scrollTop();
            relativeScrollTop = scrollTop - prevKeyframesDurations;
        }

        animateElements = function () {
            var animation, translateY, translateX, scale, rotate, opacity;
            for (var i = 0; i < keyframes[currentKeyframe].animations.length; i++) {
                animation = keyframes[currentKeyframe].animations[i];
                translateY = calcPropValue(animation, 'translateY');
                translateX = calcPropValue(animation, 'translateX');
                scale = calcPropValue(animation, 'scale');
                rotate = calcPropValue(animation, 'rotate');
                opacity = calcPropValue(animation, 'opacity');

                $(animation.selector).css({
                    'transform': 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ') rotate(' + rotate + 'deg)',
                    'opacity': opacity
                })
            }
        }

        calcPropValue = function (animation, property) {
            var value = animation[property];
            if (value) {
                value = easeInOutQuad(relativeScrollTop, value[0], (value[1] - value[0]), keyframes[currentKeyframe].duration);
            } else {
                value = getDefaultPropertyValue(property);
            }
            // value = +value.toFixed(2) 
            // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
            return value;
        }

        easeInOutQuad = function (t, b, c, d) {
            //sinusoadial in and out
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        };

        setKeyframe = function () {
            if (scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
                prevKeyframesDurations += keyframes[currentKeyframe].duration;
                currentKeyframe++;
                showCurrentWrappers();
            } else if (scrollTop < prevKeyframesDurations) {
                currentKeyframe--;
                prevKeyframesDurations -= keyframes[currentKeyframe].duration;
                showCurrentWrappers();
            }
        }

        showCurrentWrappers = function () {
            var i;
            if (keyframes[currentKeyframe].wrapper != currentWrapper) {
                $(currentWrapper).hide();
                $(keyframes[currentKeyframe].wrapper).show();
                currentWrapper = keyframes[currentKeyframe].wrapper;
            }
        }

        /*  Helpers
        -------------------------------------------------- */

        convertPercentToPx = function (value, axis) {
            if (typeof value === "string" && value.match(/%/g)) {
                if (axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
                if (axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
            }
            return value;
        }

        throwError = function () {
            $body.addClass('page-error')
        }

        isTouchDevice = function () {
            return 'ontouchstart' in window // works on most browsers 
                ||
                'onmsgesturechange' in window; // works on ie10
        }

        init();
    })
}).call(this);

$(document).ready(function () {
    $('[data-bg="car"]').css('z-index', '0');
    $(window).on('scroll', function () {
        $('.js-contentScroll').each(function () {
            var display = $(this).css('display');
            if (display == 'block') {
                type = $(this).attr('data-type');
                switch (type) {
                    case 'car':
                        $('.js-contentBg').css('z-index', '-1');
                        $('[data-bg="car"]').css('z-index', '0');
                        break;
                    case 'gogoro':
                        $('.js-contentBg').css('z-index', '-1');
                        $('[data-bg="gogoro"]').css('z-index', '0');
                        break;
                    case 'company':
                        $('.js-contentBg').css('z-index', '-1');
                        $('[data-bg="company"]').css('z-index', '0');
                        break;
                }
            }
        })
    })
    $('.js-contentInnerClose').on('click', function () {
        $('#content__check').prop('checked', false);
    });
    var WhatSystem = navigator.userAgent;
    if (WhatSystem.match(/android/i)) {
        alert('android')
    } else if (WhatSystem.match(/(iphone|ipad|ipod);?/i)) {
        $('.content__info>div').css('top', '90%');
    }
});