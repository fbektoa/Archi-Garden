$(function() {
    // 공통 함수: 메뉴 닫기
    function closeMenu() {
        $('.m-menu-btn').removeClass('active');
        $('.mo-menu').removeClass('active');
        $('.dim').fadeOut(300);
        $('body').removeClass('no-scroll'); // 스크롤 잠금 해제
    }

    // 1. 메뉴 열기/닫기
    $('.m-menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mo-menu').toggleClass('active');
        $('.dim').fadeToggle(300);
        
        // 메뉴 상태에 따라 스크롤 잠금 토글
        $('body').toggleClass('no-scroll');
    });

    // 2. 딤 처리(어두운 배경) 클릭 시 닫기
    $('.dim').on('click', function() {
        closeMenu();
    });

    // 3. 아코디언 메뉴 (기존 코드 유지)
    $('.m-gnb > li > a').on('click', function(e) {
        const $subMenu = $(this).next('.m-sub');
        const $parentLi = $(this).parent('li');

        if ($subMenu.length > 0) {
            e.preventDefault();
            
            if ($parentLi.hasClass('on')) {
                $subMenu.stop().slideUp(300);
                $parentLi.removeClass('on');
            } else {
                $('.m-sub').stop().slideUp(300);
                $('.m-gnb > li').removeClass('on');
                $subMenu.stop().slideDown(300);
                $parentLi.addClass('on');
            }
        }
    });
});