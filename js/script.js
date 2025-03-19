$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const swiper = new Swiper('.main-visual-wrap', {
    speed: 1200,
    spaceBetween: 100,
    autoplay: true,
    loop: true,
    delay: 3000,
    effect: 'slide',
    navigation: {
      nextEl: '.visual-next',
      prevEl: '.visual-prev',
    },
  });

  const $window = $(window);
  const $body = $('body');
  const $header = $('#header');
  const $headerBg = $('.header-bg');
  const $headerDim = $('.header-dim');
  const $headerActive = $('.header-on-icon');
  const $gnb = $('.gnb-list');
  const $subMenu = $('.sub-menu');
  const $utilBox = $('.util-box');
  const $globalLang = $('.global-btn');
  const $langList = $('.lang-list');
  const $hamburger = $('.hamburger-btn');
  const $cursor = $('.cursor');
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  const speed = 0.9;

  $gnb.on('mouseenter', () => {
    $header.addClass('active');
    $headerBg.stop().slideDown();
    $headerDim.stop().fadeIn();
    $subMenu.stop().fadeIn();
    $headerActive.show();
  });

  $gnb.on('mouseleave', () => {
    $header.removeClass('active');
    $headerBg.stop().slideUp();
    $headerDim.stop().fadeOut();
    $subMenu.stop().fadeOut();
    $headerActive.hide();
  });

  $window.on('wheel', (e) => {
    // console.log(e.originalEvent.deltaY);
    if (e.originalEvent.deltaY < 0) {
      $header.removeClass('hidden');
      $header.addClass('up');
    } else {
      $header.addClass('hidden');
      $header.removeClass('up');
    }
  });
  // e: header

  // s: cursor

  $window.on('mousemove', (e) => {
    (x = e.pageX), (y = e.pageY);
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    gsap.to($cursor, {
      top: my,
      left: mx,
    });
    // console.log(x, y, mx, my);
  });

  // s: visaul
  const visual = $('.visual-wrap');
  const visualItem = $('.visual-item');
  const moveLeft = $('.move-left');
  const moveRight = $('.move-right');
  const visualTl = gsap.timeline({ duration: 1 });
  const moveLeft2 = $('.visual-bg .move-left');
  const moveRight2 = $('.visual-bg .move-right');
  const btnSlideLeft = $('.visual-prev');
  const btnSlideRight = $('.visual-next');
  const cursorInLeft = $('.circle-inside .inside-prev');
  const cursorInRight = $('.circle-inside .inside-next');

  visual.on('mouseenter', () => {
    $cursor.addClass('on');
  });

  visual.on('mouseleave', () => {
    $cursor.removeClass('on');
  });

  btnSlideLeft.on('mouseenter', () => {
    cursorInLeft.show();
    cursorInRight.hide();
  });

  btnSlideLeft.on('mouseleave', () => {
    cursorInLeft.hide();
  });

  btnSlideRight.on('mouseenter', () => {
    cursorInLeft.hide();
    cursorInRight.show();
  });

  btnSlideRight.on('mouseleave', () => {
    cursorInRight.hide();
  });

  visualTl.from(moveLeft, {
    x: 100,
    autoAlpha: 0,
  });

  visualTl.from(
    moveRight,
    {
      x: -100,
      autoAlpha: 0,
    },
    '<'
  );
  swiper.on('slideChange', () => {
    visualTl.to(moveLeft2, {
      x: -100,
      autoAlpha: 1,
      delay: 5,
    });

    visualTl.to(
      moveRight2,
      {
        x: 100,
        autoAlpha: 1,
        delay: 5,
      },
      '<'
    );
  });

  // e:visaul

  // s:global-reader
  const globalReader = $('.global-reader');
  const textArea = $('.global-reader .text-area');
  const grMainTite = $('.global-reader .main-title');
  const grSubTitle = $('.global-reader .sub-title');
  const grMainText = $('.global-reader .main-text');
  const infoCircle = $('.info-circle .info-link');
  const infoContent = $('.info-con');
  const infoItem = $('.info-list li');
  const grTl = gsap.timeline();
  const grTitle = new SplitType(grMainTite, { types: 'chars' });
  const grSubT = new SplitType(grSubTitle, { types: 'chars' });
  const grTxt = new SplitType(grMainText, { types: 'chars' });

  grTl.from('.global-reader .main-title .char', {
    opacity: 0.3,
    stagger: 0.1,
    duration: 0.3,
    scrollTrigger: {
      trigger: globalReader,
      start: 'top 70',
      // markers: true,
    },
  });

  grTl.from(
    '.global-reader .sub-title .char',
    {
      opacity: 0.3,
      stagger: 0.1,
      duration: 0.3,
    },
    '<'
  );

  grTl.from(
    '.global-reader .main-text .char',
    {
      opacity: 0.3,
      stagger: 0.05,
      duration: 0.3,
    },
    '<'
  );

  grTl.from(
    infoContent,
    {
      x: 400,
      autoAlpha: 0,
      duration: 0.36,
    },
    '-=0.4'
  );

  grTl.from(infoCircle, {
    y: -400,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.5,
  });

  grTl.from(
    infoItem,
    {
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.5,
    },
    '-=0.5'
  );

  // e:global-reader

  // s:prd
  const whatWeDo = $('.what-we-do');
  const wwdMainTitle = $('.what-we-do .main-title');
  const wwdSubTitle = $('.what-we-do .sub-title');
  const wwdMainText = $('.what-we-do .main-text');
  const wwdTl = gsap.timeline();
  const wwdTitle = new SplitType(wwdMainTitle, { types: 'chars' });
  const wwdSubT = new SplitType(wwdSubTitle, { types: 'chars' });
  const wwdTxt = new SplitType(wwdMainText, { types: 'chars' });
  const mainPrdImg = $('.main-prd-img');
  const prdImgWrap = $('.prd-img-wrap');
  const prdBgWrap = $('.prd-bg-wrap');
  const prdBg1 = $('.prd-bg1');
  const prdBg2 = $('.prd-bg2');
  const prdBg3 = $('.prd-bg3');
  const prdBg4 = $('.prd-bg4');
  const prdBgSet = $('.prd-bg-wrap .prd-bg');
  const prdImgBoxes = $('.prd-img-wrap .prd-img-box');
  const prdImgBox1 = $('.prd-img-box1');
  const prdImgBox2 = $('.prd-img-box2');
  const prdImgBox3 = $('.prd-img-box3');
  const prdImgBox4 = $('.prd-img-box4');
  const prdImgBg = $('.prd-img-box .img-box-bg');
  const prdImgBg1 = $('.img-box-bg1');
  const prdImgBg2 = $('.img-box-bg2');
  const prdImgBg3 = $('.img-box-bg3');
  const prdImgBg4 = $('.img-box-bg4');

  let boxY = -100;

  wwdTl.from('.what-we-do .main-title .char', {
    scrollTrigger: {
      trigger: whatWeDo,
      start: 'top 60%',
      // markers: true,
    },
    opacity: 0.3,
    stagger: 0.1,
    duration: 1,
  });

  wwdTl.from(
    '.what-we-do .sub-title .char',
    {
      opacity: 0.3,
      stagger: 0.1,
      duration: 1,
    },
    '<'
  );

  wwdTl.from(
    '.what-we-do .main-text .char',
    {
      opacity: 0.3,
      stagger: 0.1,
      duration: 1,
    },
    '<'
  );

  wwdTl.to(prdImgBox1, {
    scrollTrigger: {
      trigger: prdImgWrap,
      start: 'top 50%',
      scrub: 1,
    },
    y: 100,
  });

  wwdTl.from(
    prdImgBox2,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.to(
    prdImgBox3,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.from(
    prdImgBox4,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.from(
    prdBg1,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.from(
    prdBg2,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.from(
    prdBg3,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  wwdTl.from(
    prdBg4,
    {
      scrollTrigger: {
        trigger: prdImgWrap,
        start: 'top 50%',
        scrub: 1,
      },
      y: 100,
    },
    '<'
  );

  prdImgBoxes.on('mouseenter', function () {
    const imgBoxIdx = $(this).index();
    // prdImgBoxes.hide();
    prdBgSet.eq(imgBoxIdx).fadeIn();
    prdImgBg.hide();
  });

  prdImgWrap.on('mouseleave', function () {
    const imgBoxIdx = $(this).index();
    prdBgSet.hide();
    prdImgBg.show();
  });

  // e:what we do

  // s:global networks
  const globalNetworks = $('.global-networks');
  const mainPatnerLogo = $('.main-patner-logo');
  const gnTitle = $('.global-networks .main-title');
  const gnSubTitle = $('.global-networks .sub-title');
  const gnMainText = $('.global-networks .main-text');
  const gnTitles = new SplitType(gnTitle, { types: 'chars' });
  const gnSubT = new SplitType(gnSubTitle, { types: 'chars' });
  const gnTxt = new SplitType(gnMainText, { types: 'chars' });
  const gnTl = gsap.timeline();
  const flowLogo = $('.flow-logo');
  const flowItem = $('.flow-item');
  const flowItemR = $('.flow-logo .reverse');
  const flowListItem = $('.list-item');

  gnTl.from('.global-networks .main-title .char', {
    scrollTrigger: {
      trigger: gnTitle,
      start: 'top 40%',
      // markers: true,
    },
    opacity: 0,
    stagger: 0.05,
    duration: 0.3,
  });

  gnTl.from(
    '.global-networks .sub-title .char',
    {
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
    },
    '<'
  );

  gnTl.from(
    '.global-networks .main-text .char',
    {
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
    },
    '<'
  );

  // e:globla networks
  // s:esg
  const esg = $('.esg');
  const esgBg = $('.esg-bg');
  const esgTl = gsap.timeline();
  const esgTitle = $('.esg .text-area');
  const esgCircles = $('.esg-inner .circle');
  const esgCircle = $('.esg-inner .circle li');
  const esgCircle2 = $('.esg-inner .circle li:nth-child(2)');
  const esgText = $('.esg-inner .circle li p');

  esgTl.from(esg, {
    scrollTrigger: {
      trigger: esg,
      start: 'top 100%',
      end: '-=300%',
      scrub: 1,
    },
  });

  esgTl.from(esgBg, {
    scrollTrigger: {
      trigger: esg,
      start: 'top 30%',
      end: '-=300',
      scrub: 1,
    },
    clipPath: 'inset(0 0 0 100%)',
  });

  esgTl.from(
    esgTitle,
    {
      scrollTrigger: {
        trigger: esg,
        start: 'top 0%',
        end: '+=100% 0',
        scrub: 0.7,
        pin: true,
      },
      x: 1920,
    },
    '<'
  );

  esgTl.from(esgCircles, {
    scrollTrigger: {
      trigger: esg,
      start: 'top 0%',
      end: '+=100% 0',
      scrub: 0.7,
    },
    x: 1920,
  });

  esgTl.to(esgCircle2, {
    scrollTrigger: {
      trigger: esgCircles,
      start: 'bottom -20%',
      end: '+=150',
      scrub: 1.5,
    },
    x: 0,
    autoAlpha: 1,
  });

  esgTl.from(esgText, {
    scrollTrigger: {
      trigger: esgCircles,
      start: 'bottom -20%',
      end: '+=150',
      scrub: 1,
    },
    autoAlpha: 0,
    delay: 1,
  });

  //e: esg

  //s:recruit

  const recruit = $('.recruit');
  const recruitBg = $('.recruit-bg');
  const recruitTl = gsap.timeline();
  const recruitTitle = $('.recruit .text-area');
  const recruitCir = $('.recruit .circle');
  const recruitCir1 = $('.recruit .circle li:nth-child(1)');
  const recruitCir2 = $('.recruit .circle li:nth-child(2)');
  const recruitCir3 = $('.recruit .circle li:nth-child(3)');
  const recruitText = $('.recruit-inner .circle li p');

  recruitTl.from(recruit, {
    scrollTrigger: {
      trigger: recruit,
      start: 'top 0%',
      end: 'bottom+=50% 0%',
      // markers: true,
      scrub: 1,
      pin: true,
    },
  });

  recruitTl.from(recruitBg, {
    scrollTrigger: {
      trigger: recruit,
      start: 'top 90%',
      end: '-=300',
      scrub: 1,
    },
  });

  recruitTl.from(recruitTitle, {
    scrollTrigger: {
      trigger: recruit,
      start: 'top 0%',
      end: 'bottom, 0%',
      scrub: 1,
    },
    x: -1900,
  });

  recruitTl.from(
    recruitCir,
    {
      scrollTrigger: {
        trigger: recruit,
        start: 'top 0%',
        end: 'bottom, 0%',
        scrub: 1,
      },
      x: 1920,
    },
    '<'
  );

  recruitTl.to(
    recruitCir1,
    {
      scrollTrigger: {
        trigger: recruitCir,
        start: 'bottom 0%',
        end: '+=150',
        scrub: 2,
      },
      x: -200,
      ease: 'elastic.out(1, 0.3)',
      delay: 5,
    },
    '<'
  );

  recruitTl.to(
    recruitCir3,
    {
      scrollTrigger: {
        trigger: recruitCir,
        start: 'bottom 0%',
        end: '+=150',
        scrub: 2,
      },
      x: 200,
      ease: 'elastic.out(1, 0.3)',
    },
    '<'
  );

  recruitTl.from(recruitText, {
    scrollTrigger: {
      trigger: recruitCir,
      start: 'bottom 0%',
      end: '+=150',
      scrub: 0.5,
    },
    autoAlpha: 0,
  });

  // e:recruit

  // s:footer

  const familySite = $('.family-site');
  const btnFamily = $('.family-btn');
  const siteList = $('.site-list');
  const siteItem = $('.site-list li');

  familySite.on('click', function () {
    btnFamily.addClass('on');
    siteItem.stop().slideDown();
  });

  familySite.on('mouseleave', function () {
    btnFamily.removeClass('on');
    siteItem.stop().slideUp();
  });
});
