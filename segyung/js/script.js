$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const swiper = new Swiper('.main-visual-wrap', {
    speed: 1200,
    spaceBetween: 100,
    autoplay: true,
    loop: true,
    delay: 3000,
    effect: 'slide',
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
    } else {
      $header.addClass('hidden');
    }
  });
  // e: header

  // s: visaul
  const visual = $('.visual');
  const visualItem = $('.visual-item');
  const moveLeft = $('.move-left');
  const moveRight = $('.move-right');
  const visualTl = gsap.timeline({ duration: 1 });
  const moveLeft2 = $('.visual-bg .move-left');
  const moveRight2 = $('.visual-bg .move-right');

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
    });

    visualTl.to(
      moveRight2,
      {
        x: 100,
        autoAlpha: 1,
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
    stagger: 0.05,
    duration: 0.3,
    scrollTrigger: {
      trigger: globalReader,
      start: 'top 50',
      markers: true,
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
      duration: 0.5,
    },
    '-=0.4'
  );

  grTl.from(infoCircle, {
    y: -400,
    autoAlpha: 0,
    duration: 1,
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
  const wwdMainTite = $('.what-we-do .main-title');
  const wwdSubTitle = $('.what-we-do .sub-title');
  const wwdMainText = $('.what-we-do .main-text');
  const wwdTl = gsap.timeline();
  const wwdTitle = new SplitType(wwdMainTite, { types: 'chars' });
  const wwdSubT = new SplitType(wwdSubTitle, { types: 'chars' });
  const wwdTxt = new SplitType(wwdMainText, { types: 'chars' });
  const mainPrdImg = $('.main-prd-img');
  const prdImgWrap = $('.prd-img-wrap');
  const prdImgBox1 = $('.prd-img-box1');
  const prdImgBox2 = $('.prd-img-box2');
  const prdImgBox3 = $('.prd-img-box3');
  const prdImgBox4 = $('.prd-img-box4');
  // console.log(prdImgBox1);

  wwdTl.from('.what-we-do .main-title .char', {
    scrollTrigger: {
      trigger: whatWeDo,
      start: 'top 50%',
      // markers: true,
    },
    opacity: 0.3,
    stagger: 0.05,
    duration: 0.3,
  });

  wwdTl.from(
    '.what-we-do .sub-title .char',
    {
      opacity: 0.3,
      stagger: 0.1,
      duration: 0.3,
    },
    '<'
  );

  wwdTl.from(
    '.what-we-do .main-text .char',
    {
      opacity: 0.3,
      stagger: 0.05,
      duration: 0.3,
    },
    '<'
  );

  gsap.to(prdImgBox1, {
    scrollTrigger: {
      trigger: prdImgWrap,
      start: 'top 50%',
      scrub: 1,
      // markers: true,
    },
    y: 100,
  });

  gsap.to(prdImgBox3, {
    scrollTrigger: {
      trigger: prdImgWrap,
      start: 'top 50%',
      scrub: 1,
      // markers: true,
    },
    y: 100,
  });

  gsap.from(prdImgBox2, {
    scrollTrigger: {
      trigger: prdImgWrap,
      start: 'top 50%',
      scrub: 1,
      markers: true,
    },
    y: 100,
  });

  gsap.from(prdImgBox4, {
    scrollTrigger: {
      trigger: prdImgWrap,
      start: 'top 50%',
      scrub: 1,
      markers: true,
    },
    y: 100,
  });

  // e:what we do

  // s:global networks
  const globalNetworks = $('.global-networks');
  const mainPatnerLogo = $('.main-patner-logo');
  const flowLogo = $('.flow-logo');
  const flowItem = $('.flow-item');
  const flowItemR = $('.flow-logo .reverse');
  const flowListItem = $('.list-item');
});
