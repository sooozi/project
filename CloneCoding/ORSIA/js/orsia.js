jQuery(function ($) {
    /* ======================================================================
    *
    * Powered by MUSIGN  
    * Version 1.0
    * js/musign.js 
    * reference: https://www.orsia.co.kr/
    * 
    ====================================================================== */
    /* ======================================================================
    *
    *  RUN 
    * 
    ====================================================================== */

    // GSAP3 Target object not found 방지
    gsap.config({
        nullTargetWarn: false,
    });

    //모바일화면 터치 시 hover에 적용한 효과가 나타남
    document.addEventListener("touchstart", function() {}, true);


    //초기화 할 변수를 함수에 넣고 함수 호출
    //1. 가독성 측면 2. 전역 객체를 보호
    init(true);


    /* ======================================================================
    *
    *  INIT 
    * 
    ====================================================================== */

    function init(loadonce) {

        // Every load    
        if (typeof loadonce !== 'undefined' && loadonce === true) {
        }

        // !!!! functions !!!! 
        smooth_scroll();
        typo_move();
        slick_slide();
        scroll_txt_change();
        best_slider();
        heritage_slider();
        scroll_enlarge();


        // only MAIN
        if ($('body').hasClass('home')) {

        }

        // only (sub page 네임별로 생성 하단 예시)   
        // only ABOUT US
        if ($('body').hasClass('about')) {

        }

        // First load
        if (typeof loadonce !== 'undefined' && loadonce === true) {
            // >=2nd load
        } else {
            initOnload();
        }

        $(window).trigger('resize');

    }



    /* ======================================================================
     *
     *  ON LOAD
     * 
     ====================================================================== */


    // INITIALIZE LOAD
    function initOnload() {

    }

    $(window).on('load', function () {
        //페이지 로드 시 헤더노출 초기설정
        $('header').removeClass('on');
        header_hide();
    });



    /* ======================================================================
     *
     *  ON RESIZE
     * 
     ====================================================================== */


    // INITIALIZE RESIZE
    function init_resize() {

        // setTimeout to fix IOS animation on rotate issue
        setTimeout(function () {

            //

        }, 400);

    }

    // Init resize on reisize
    $(window).on('resize', init_resize);



    /* ======================================================================
    *
    *  Default Functions
    * 
    ====================================================================== */

    
    function smooth_scroll() {
        /** *MAIN - smooth scroll* **/
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollTrigger.normalizeScroll(true);

        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    }

    function header_hide () {
        var lastScroll = 0;
    
        $(window).scroll(function () {
            let wp = $(window).innerWidth();
            if(wp > 820){
                var ws = $(this).scrollTop();
                if(ws > lastScroll){ // 스크롤 아래방향시
                    $('header').addClass('on');
                }else{ // 스크롤 위방향시
                    $('header').removeClass('on');
                }
                lastScroll = ws;
            }
        });
    }

    function typo_move() {
        /** *MAIN - sec01 type move* **/
        setTimeout(function () {
            $('.typo').addClass('on');
        }, 100);
        //1초 뒤 addclass

        ScrollTrigger.matchMedia({
            //matchMedia : 원하는 크기에 따라 적용 여부 설정 가능
            "(min-width: 800px)": function() {
            }, 
            "(max-width: 799px)": function() {
            }, 
            "all" : function () {
                //all은 미디어쿼리 상관 없이 모두 실행

                var typofi = '.body_wrap .sec01 .typo .big_txt';
                var typotxt = '.body_wrap .sec01 .typo .small_txt';
                var typoline = '.body_wrap .sec01 .typo .line';
                var typosince = '.body_wrap .sec01 .typo .since_txt';

                //효과 전 세팅
                gsap.set($(typofi).eq(0), { opacity: 0, xPercent: -50 });  //transform : translateX (-50 %)
                gsap.set($(typofi).eq(1), { opacity: 0, xPercent: 50 });
                gsap.set($(typofi).eq(2), { opacity: 0, xPercent: -50 });
                gsap.set($(typofi).eq(3), { opacity: 0, xPercent: -50 });
                gsap.set($(typofi).eq(4), { opacity: 0, xPercent: -50 });

                gsap.set($(typotxt).eq(0), { opacity: 0, xPercent: 50 });
                gsap.set($(typotxt).eq(1), { opacity: 0, xPercent: -50 });
                gsap.set($(typotxt).eq(2), { opacity: 0, xPercent: 50 });

                gsap.set($(typosince), { opacity: 0, xPercent: 50 });
                gsap.set($(typoline).eq(0), { width: 0 });

                gsap.set($(typoline).eq(1), { width: 0 });
                gsap.set($(typoline).eq(2), { width: 0 });

                var vismotion = gsap.timeline({
                    repeat: 1,
                    repeatDelay: 2,  //트윈 반복 시 지연 시간을 초 단위로 설정
                    yoyo: true,  //트윈을 앞뒤로 반복하여 실행
                });
                
                vismotion
                    .to($(typoline).eq(0), { width: "100%", duration: 2, ease: "power1.inOut" })
                    .to($(typoline).eq(1), { width: "100%", duration: 2, ease: "power1.inOut" },"-=80%")
                    .to($(typoline).eq(2), { width: "100%", duration: 2, ease: "power1.inOut" },"-=80%")
                    //이전 효과가 20%정도 적용되었을 때 다음 효과 시작

                    .to($(typofi).eq(0), { opacity: 0.8, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typofi).eq(1), { opacity: 0.8, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typofi).eq(2), { opacity: 0.8, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typofi).eq(3), { opacity: 0.8, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typofi).eq(4), { opacity: 0.8, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    
                    .to($(typotxt).eq(0), { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typotxt).eq(1), { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")
                    .to($(typotxt).eq(2), { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" },"-=80%")

                    .to($(typosince), { opacity: 1, xPercent: 0, ease: "power1.inOut" },"-=80%");

            }
        });
    }

    function slick_slide() {
        /** *MAIN - sec02 slide* **/
        $('.slide_box').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots : true, 		
        });

        gsap.to('.body_wrap .sec02', {
            ease: "none",
            scrollTrigger: {
                trigger: ".body_wrap .sec02",
                start: "top top",
                end: "bottom+=100% bottom",
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        // motion
        ScrollTrigger.matchMedia({
            "(min-width: 821px)" : function () {
                var se02tit = '.body_wrap .sec02 .sec_tit';
                var se02sw = '.body_wrap .sec02 .slide_wrap';

                gsap.set(se02tit, { opacity: 0, yPercent: 100 });
                gsap.set(se02sw, { opacity: 0, yPercent: 10 });

                var se02motion = gsap.timeline();
                se02motion
                    .to(se02tit, { opacity: 1, yPercent: 0 })
                    .to(se02sw, { opacity: 1, yPercent: 0 });
                
                se02motion.pause();

                ScrollTrigger.create({
                    trigger: '.body_wrap .sec02',
                    start: 'top center',
                    // markers:true,
                    onEnter: function () {
                        se02motion.play();
                    },
                    onLeaveBack: function () {
                        se02motion.reverse();
                    }
                });
            }
        });
    }

    function scroll_txt_change() {
        /** *MAIN - sec03 bg txt change* **/
        ScrollTrigger.matchMedia({
            "(min-width: 821px)" : function () {
    
                $('.body_wrap .sec03 .art_wrap .txt_wrap').removeAttr("style");
                $('.body_wrap .sec03 .art_wrap .txt_wrap .sub_txt').removeAttr("style");
    
                var se03bg = '.body_wrap .sec03 .art_wrap .bg';
                gsap.set($(se03bg).eq(0), {scale: 1.2});
                gsap.set($(se03bg).eq(1), {opacity: 0, scale: 1.2});
    
                gsap.to($(se03bg).eq(0),{ // se03_1 bg scaling
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".body_wrap .sec03 .art_wrap.art01",
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    scale: 1,
                });
    
                ScrollTrigger.create({ // se03_2 bg changing
                    trigger: ".body_wrap .sec03 .art_wrap.art02",
                    start: "top+=30% bottom",
                    end: "bottom bottom",
                    // markers: true,
                    onEnter: function () {
                        gsap.to($(se03bg).eq(1), { opacity: 1, duration: .4 });
                    },
                    onLeaveBack: function () {
                        gsap.to($(se03bg).eq(1), { opacity: 0, duration: .4 })
                    },
                });
    
                gsap.to($(se03bg).eq(1),{ // se03_2 bg scaling
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".body_wrap .sec03 .art_wrap.art02",
                        start: "top bottom",
                        end: "bottom+=50% bottom",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    scale: 1,
                });
    
    
                // text scrolltrigger
                var twrap = '.body_wrap .sec03 .art_wrap .txt_wrap';
                var stxt = '.body_wrap .sec03 .art_wrap .txt_wrap .sub_txt';
    
                gsap.set($(twrap).eq(0), { opacity: 0, yPercent: 30 });
                gsap.set($(twrap).eq(1), { opacity: 0, yPercent: 30 });
                gsap.set($(stxt).eq(0), { opacity: 0, yPercent: 30 });
                gsap.set($(stxt).eq(1), { opacity: 0, yPercent: 30 });
    
                var se03_1 = gsap.timeline();
                se03_1
                    .to($(twrap).eq(0), { opacity: 1, yPercent: 0, duration: .8 })
                    .to($(stxt).eq(0), { opacity: 1, yPercent: 0, duration: .8 }, '-=80%');
                
                se03_1.pause();
    
                ScrollTrigger.create({
                    trigger: '.body_wrap .sec03 .art_wrap.art01',
                    start: "top top",
                    onEnter: function () {
                        se03_1.play();
                    },
                    onLeaveBack: function () {
                        se03_1.reverse();
                    }
                });
    
                var se03_2 = gsap.timeline();
                se03_2
                    .to($(twrap).eq(1), { opacity: 1, yPercent: 0, duration: .8 })
                    .to($(stxt).eq(1), { opacity: 1, yPercent: 0, duration: .8 }, '-=80%');
                
                se03_2.pause();
    
                ScrollTrigger.create({
                    trigger: '.body_wrap .sec03 .art_wrap.art02',
                    start: "top top",
                    onEnter: function () {
                        se03_2.play();
                    },
                    onLeaveBack: function () {
                        se03_2.reverse();
                    }
                });
            },
            "(max-width: 820px)" : function () {
                $('._m .se03 .sep .txtWrap').removeAttr("style");
                $('._m .se03 .sep .txtWrap .s_txt').removeAttr("style");
    
                var twrap = '._m .se03 .sep .txtWrap';
                var stxt = '._m .se03 .sep .txtWrap .s_txt';
    
                gsap.set($(twrap).eq(0), { opacity: 0, xPercent: -20 });
                gsap.set($(twrap).eq(1), { opacity: 0, xPercent: 20 });
                gsap.set($(stxt).eq(0), { opacity: 0, xPercent: -20 });
                gsap.set($(stxt).eq(1), { opacity: 0, xPercent: 20 });
    
                var se031motion = gsap.timeline();
                se031motion
                    .to($(twrap).eq(0), { opacity: 1, xPercent: 0, duration: .8 })
                    .to($(stxt).eq(0), { opacity: 1, xPercent: 0, duration: .8 }, '-=80%');
                
                se031motion.pause();
    
                ScrollTrigger.create({
                    trigger: '._m .se03 .sep._1',
                    start: 'top center',
                    onEnter: function () {
                        se031motion.play();
                    },
                    onLeaveBack: function () {
                        se031motion.reverse();
                    },
                });
    
                var se032motion = gsap.timeline();
                se032motion
                    .to($(twrap).eq(1), { opacity: 1, xPercent: 0, duration: .8 })
                    .to($(stxt).eq(1), { opacity: 1, xPercent: 0, duration: .8 }, '-=80%');
                
                se032motion.pause();
    
                ScrollTrigger.create({
                    trigger: '._m .se03 .sep._2',
                    start: 'top center',
                    onEnter: function () {
                        se032motion.play();
                    },
                    onLeaveBack: function () {
                        se032motion.reverse();
                    },
                });
    
                
            }
        });
    }

    function best_slider() {
        /** *MAIN - sec04 slide* **/
        $('.best_slide_list').slick({
            autoplay : true,
            autoplaySpeed: 1800,	
            arrows: false,
            infinite: true,
            dots : true, 	
            dotsClass: 'dots_custom',
            fade:true,
            customPaging : function(slider, index) { 
                var num = index + 1;
                var tit = ['O','R','S','I','A'];
                return '<span class="dot">'+ tit[index] +'</span>';
            }
        });
    
        //페이지네이션
        $('.best_page li').on('click', function () {
            $(this).addClass('on').siblings().removeClass('on');
    
            let idx = $(this).index();
            bestSwiper.slideTo(idx, 800, false);
        });
    
    
        ScrollTrigger.matchMedia({
            "(min-width: 821px)" : function () {
                $('.sec04 .left_wrap .bg .cover').removeAttr('style');
                $('.sec04 .left_wrap .bg').removeAttr('style');
                $('.sec04 .left_wrap .tit').removeAttr('style');
    
                // 섹션 pin
                gsap.to('.sec04', {
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".sec04",
                        start: "top top",
                        end: "bottom+=100% bottom",
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        // markers: true,
                    }
                });
    
                // se04_1 모션
                let bestcover = '.sec04 .left_wrap .bg .cover';
                let bestmodel = '.sec04 .left_wrap .bg';
                let bestTi = '.sec04 .left_wrap .tit';
    
                gsap.set(bestmodel, { scale: 1.05 });
                gsap.set(bestcover, { width: "100%" });
                gsap.set(bestTi, { opacity: 0, xPercent: -20 });
    
                let bestItems = gsap.timeline();
                bestItems
                    .to(bestcover, { width: "0%", duration: .6, ease: "power1.inOut" })
                    .to(bestTi, { opacity: 1, xPercent: 0, duration: .8, ease: "power1.inOut" }, '-=50%')
                    .to(bestmodel, { scale: 1, duration: .8, ease: "power1.inOut" }, '-=50%');
                
                bestItems.pause();
    
                ScrollTrigger.create({
                    trigger: '.sec04',
                    start: 'top top',
                    onEnter: function () {
                        bestItems.play();
                    },
                    onLeaveBack: function () {
                        bestItems.reverse();
                    },
                });
            }
        });
    }

    function heritage_slider() {
        /** *MAIN - sec05 right_rolling* **/
        
        ScrollTrigger.matchMedia({
        
            "(min-width:821px)" : function(){
        
                gsap.to('.sec05 .right_wrap .scroll_cont_wrap',{

                    x : function(){
                        var listWidth = $('.sec05 .right_wrap').outerWidth();
                        var width = $('.sec05 .right_wrap .scroll_cont_wrap').width();
                        return -(width-(listWidth-175*2));
                    },
                    ease : "none",
                    scrollTrigger : {
                        trigger : ".sec05",
                        start : "top top",
                        end : "150%",
                        pin : true,
                        scrub : 1,
                        invalidateOnRefresh : true
                    }
                });
        
            }
        })
    }

    function scroll_enlarge() {
        /** *MAIN - sec06 scroll_enlarge* **/
        ScrollTrigger.matchMedia({

            "(min-width:821px)" : function(){
                var bS02Timeline = gsap.timeline({
                    scrollTrigger : {
                        trigger : ".sec06",
                        start : "top top",
                        pin : true,
                        end : "150%",
                        scrub : 1,
                        invalidateOnRefresh : true
                    },
                    defaults : {
                        ease: "power2.out"
                    }
                });
                bS02Timeline
                    .set(".sec06 .txtImg .bg",{
                        width: "640",
                        height: "323"
                    })
                    .set('.sec06 .txtImg .left_txt',{
                        x : "-20.833vw"
                    })
                    .set('.sec06 .txtImg .right_txt',{
                        x: "20.833vw"
                    })
                    .to('.sec06 .txtImg .bg',{
                        width : "100vw",
                        height : "100vh",
                    },"my")

                    .to('.sec06 .txtImg .left_txt',{
                        x : 0
                    },"my")
                    .to('.sec06 .txtImg .right_txt',{
                        x: 0
                    },"my")
            }        
        });
    }



}); // End jQuery
