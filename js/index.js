$(function () {

    //header
    Splitting();

    $(".bar").on("click", function () {
        $("header #modalBox").addClass("on");
    });
    $("#close").on("click", function () {
        $("header #modalBox").removeClass("on");
    });


    //visual
    $("#visual .wrap").addClass("on");

    //con01

    const content = "예전부터 손으로 사부작사부작 무언가를 만들어 주변사람들에게 선물하는 것을 좋아했습니다. \n\n 저로인해 누군가가 행복함을 느낀다라는 것이 저 자신에게도 행복함과 뿌듯함으로 다가왔습니다. \n\n 웹디자인 또한 화면 속에서 디자인을 직접만들고 사람들에게 만족감을 줄 수 있다라는 점이 비슷하다고 느껴져 자연스럽게 웹디자인에 관심을 갖게 되었습니다. ";
    const text = document.querySelector(".text_box span");
    let i = 0;
    let start = false;
    let stop;


    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i >= content.length) {
            clearInterval(stop);
        }
    }
    // stop = setInterval(typing, 100)


    //con02

    gsap.timeline({
        scrollTrigger: {
            trigger: "#con02 .inner",
            start: "0% 5%",
            end: "0% 10%",
            scrub: 2,
            // markers: true,
        }
    })
        .fromTo(
            "#con02 .inner", { "clip-path": "inset(60% 60% 60% 60% round 20%)" }, { "clip-path": "inset(0% 0% 0% 0% round 0%)", ease: "none", duration: 10 }
        )



    //con03
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $("#con03 .swiper-slide > div").on("click", function () {
        let i = $(this).closest(".swiper-slide").index();

        $("#modal_content #imge img").removeClass("active");
        $("#modal_content #imge img").eq(i).addClass("active");

        $("#modal_box").addClass("on");
    });

    $("#modal_box #close").on("click", function () {
        $("#modal_box").removeClass("on");
    });

    //con04

    let total = $("#con04 .inner .wrap li:nth-child(2) > ul").length;
    console.log(total);

    let j = 0;
    start01();

    function start01() {
        stop01 = setInterval(function () {
            if (j == total - 1) {
                j = 0;
            } else {
                j++;
            }
            fade();
        }, 6000);
    }

    $("#con04 .next").on("click", function () {
        clearInterval(stop01);
        if (j == total - 1) {
            j = 0;
        } else {
            j++;
        }
        fade();
        start01();
    });

    $("#con04 .prev").on("click", function () {
        clearInterval(stop01);
        if (j == total - 1) {
            j = 0;
        } else {
            j--;
        }
        fade();
        start01();
    });

    start01();


    function fade() {
        $("#con04 .inner .wrap li:nth-child(2) > ul").fadeOut();
        $("#con04 .inner .wrap li:nth-child(2) > ul").eq(j).fadeIn();
    }

    $("#con04 .museum .pro").on("click", function () {
        $("#con04 .modalBox").addClass("on");
    });
    $("#con04 .xmark").on("click", function () {
        $("#con04 .modalBox").removeClass("on");
    });

    $("#con04 .mayplace .pro").on("click", function () {
        $("#con04 #modalBox").addClass("on");
    });
    $("#con04 #xmark").on("click", function () {
        $("#con04 #modalBox").removeClass("on");
    });


    //con05
    gsap.utils.toArray("section").forEach((section, i) => {
        console.log(i);
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                pin: true,
                // pinSpacing: false,
                pinSpacing: i === 2 ? true : false,
                // markers: true,
            }
        })
    });

    $("#con05 .pro").on("click", function () {
        $("#con05 #modalBox").addClass("on");
    });
    $("#con05 #xmark").on("click", function () {
        $("#con05 #modalBox").removeClass("on");
    });


    //scroll
    let visual = $("#visual").offset().top;
    let con01 = $("#con01").offset().top;
    let con02 = $("#con02").offset().top;
    let con03 = $("#con03").offset().top;
    let con04 = $("#con04").offset().top;
    let con05 = $("#con05").offset().top;
    let con06 = $("#con06").offset().top;

    console.log(visual, con01, con02, con03, con04, con05, con06);

    $(window).on("scroll", function () {
        let sc = $(this).scrollTop();
        console.log(sc);

        // 헤더 
        if (sc >= 50) {
            $("header").addClass("in");
        } else {
            $("header").removeClass("in");
        }

        // con01 
        if (sc >= visual && sc < con01 && !start) {
            $("#con01 .inner .left").addClass("on");
            $("#con01 .inner .right").addClass("on");
            start = true;
            stop = setInterval(typing, 80);

        }

        //con03
        if (sc >= con02 && sc < con03) {
            $("#con03 .inner ul").addClass("on");
        }

        //con04
        if (sc >= con03 && sc < con04) {
            $("#con04 .inner ul").addClass("on");
        }


        // con06
        if (sc >= con06) {
            $("#con06 .wrap").addClass("on");
        } else {
            $("#con06 .wrap").removeClass("on");
        }
    });

})