var options = {
    controls: false,
    autoplay: false,
    fluid: true,
    responsive: true,
};

$(document).ready(function () {

    // Accordion
    $(function () {
        $("#accordion").accordion({
            heightStyle: "content"
        });
    });

    // Dark/light switch
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            $('img.switchtheme').addClass('filter-white');
            $('img.switchthemeblue').addClass('filter-blue');
            $('img.moon').addClass('opacity');
            $('img.sun').removeClass('opacity');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            $('img.switchtheme').removeClass('filter-white');
            $('img.switchthemeblue').removeClass('filter-blue');
            $('img.sun').addClass('opacity');
            $('img.moon').removeClass('opacity');
        }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Horizontal slider
    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    });


    var modal = $(".modal");
    // Video buttons
    $('#playbutton').click(function () {
        if ($('#my-video1 .vjs-tech').get(0).paused) {
            $('#my-video1 .vjs-tech').get(0).play();
            $('#playbutton').hide();
            $('#pausebutton').show();
        }
    });
    $('#pausebutton').click(function () {
        if ($('#my-video1 .vjs-tech').get(0).played) {
            $('#my-video1 .vjs-tech').get(0).pause();
            $('#pausebutton').hide();
            $('#playbutton').show();
        }
    });
    $('#forwardbutton').click(function () {
        $('#my-video1 .vjs-tech').get(0).currentTime += 10;
    });
    $('#rewindbutton').click(function () {
        $('#my-video1 .vjs-tech').get(0).currentTime -= 10;
    });
    videojs('my-video1').ready(function () {
        var player = this;

        player.on('ended', function () {
            modal.fadeIn(100);
            $('#pausebutton').hide();
            $('#playbutton').show();
        });
    });
    $('.modalbutton').click(function () {
        modal.fadeOut(100);
    });

    // Video2
    $('#playbutton2').click(function () {
        if ($('#my-video2 .vjs-tech').get(0).paused) {
            $('#my-video2 .vjs-tech').get(0).play();
            $('#playbutton2').hide();
            $('#pausebutton2').show();
        }
    });
    $('#pausebutton2').click(function () {
        if ($('#my-video2 .vjs-tech').get(0).played) {
            $('#my-video2 .vjs-tech').get(0).pause();
            $('#pausebutton2').hide();
            $('#playbutton2').show();
        }
    });
    $('#forwardbutton2').click(function () {
        $('#my-video2 .vjs-tech').get(0).currentTime += 10;
    });
    $('#rewindbutton2').click(function () {
        $('#my-video2 .vjs-tech').get(0).currentTime -= 10;
    });
    videojs('my-video2').ready(function () {
        var player = this;

        player.on('ended', function () {
            modal.fadeIn(100);
            $('#pausebutton2').hide();
            $('#playbutton2').show();
        });
    });
    $('.modalbutton').click(function () {
        modal.fadeOut(100);
    });


    // Video3
    $('#playbutton3').click(function () {
        if ($('#my-video3 .vjs-tech').get(0).paused) {
            $('#my-video3 .vjs-tech').get(0).play();
            $('#playbutton3').hide();
            $('#pausebutton3').show();
        }
    });
    $('#pausebutton3').click(function () {
        if ($('#my-video3 .vjs-tech').get(0).played) {
            $('#my-video3 .vjs-tech').get(0).pause();
            $('#pausebutton3').hide();
            $('#playbutton3').show();
        }
    });
    $('#forwardbutton3').click(function () {
        $('#my-video3 .vjs-tech').get(0).currentTime += 10;
    });
    $('#rewindbutton3').click(function () {
        $('#my-video3 .vjs-tech').get(0).currentTime -= 10;
    });
    videojs('my-video3').ready(function () {
        var player = this;

        player.on('ended', function () {
            modal.fadeIn(100);
            $('#pausebutton3').hide();
            $('#playbutton3').show();
        });
    });
    $('.modalbutton').click(function () {
        modal.fadeOut(100);
    });

    // Video4
    $('#playbutton4').click(function () {
        if ($('#my-video4 .vjs-tech').get(0).paused) {
            $('#my-video4 .vjs-tech').get(0).play();
            $('#playbutton4').hide();
            $('#pausebutton4').show();
        }
    });
    $('#pausebutton4').click(function () {
        if ($('#my-video4 .vjs-tech').get(0).played) {
            $('#my-video4 .vjs-tech').get(0).pause();
            $('#pausebutton4').hide();
            $('#playbutton4').show();
        }
    });
    $('#forwardbutton4').click(function () {
        $('#my-video4 .vjs-tech').get(0).currentTime += 10;
    });
    $('#rewindbutton4').click(function () {
        $('#my-video4 .vjs-tech').get(0).currentTime -= 10;
    });
    videojs('my-video4').ready(function () {
        var player = this;

        player.on('ended', function () {
            modal.fadeIn(100);
            $('#pausebutton4').hide();
            $('#playbutton4').show();
        });
    });
    $('.modalbutton').click(function () {
        modal.fadeOut(100);
    });

    // Video5
    $('#playbutton5').click(function () {
        if ($('#my-video5 .vjs-tech').get(0).paused) {
            $('#my-video5 .vjs-tech').get(0).play();
            $('#playbutton5').hide();
            $('#pausebutton5').show();
        }
    });
    $('#pausebutton5').click(function () {
        if ($('#my-video5 .vjs-tech').get(0).played) {
            $('#my-video5 .vjs-tech').get(0).pause();
            $('#pausebutton5').hide();
            $('#playbutton5').show();
        }
    });
    $('#forwardbutton5').click(function () {
        $('#my-video5 .vjs-tech').get(0).currentTime += 10;
    });
    $('#rewindbutton5').click(function () {
        $('#my-video5 .vjs-tech').get(0).currentTime -= 10;
    });
    videojs('my-video5').ready(function () {
        var player = this;

        player.on('ended', function () {
            modal.fadeIn(100);
            $('#pausebutton5').hide();
            $('#playbutton5').show();
        });
    });
    $('.modalbutton').click(function () {
        modal.fadeOut(100);
    });
});
