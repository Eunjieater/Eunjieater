$(function () {
    let container = $('div.container');     // contents 표시영역 선택
    
    // hash가 home일 때 보여줄 데이터
    let home = "<div>\n" +
        "            <aside>\n" +
        "                <h1>SHIN EUN JI's HOME</h1>\n" +
        "                <p>안녕하세요, 저는 놀기를 좋아하는 컴퓨터공학과 신은지입니다.</p>\n" +
        "                <div class=\"img\">\n" +
        "                    <a href=\"https://imgur.com/W87MRMt\">\n" +
        "                        <img src=\"https://i.imgur.com/W87MRMt.jpg\" title=\"source: imgur.com\"\n" +
        "                            style=\"max-width: 50%; height: auto\" alt=\"\"></a>\n" +
        "                </div>\n" +
        "            </aside>\n" +
        "        </div>";
    
    // hash가 about일 때 보여줄 데이터
    let about = "<div>\n" +
        "            <aside>\n" +
        "                <h1>ABOUT ME</h1>\n" +
        "                <hr>\n" +
        "                <h3>FOOD</h3>\n" +
        "                <p>맛있는 음식을 굉장히 좋아합니다.</p>\n" +
        "                <div class=\"img\">\n" +
        "                    <a href=\"https://imgur.com/EgGY7fR\">\n" +
        "                        <img src=\"https://i.imgur.com/EgGY7fR.jpg\" title=\"source: imgur.com\"\n" +
        "                            style=\"max-width: 35%; height: auto\" alt=\"\"></a>\n" +
        "                </div>\n" +
        "                <h3>TRAVEL</h3>\n" +
        "                <p>여행을 가는 것을 굉장히 좋아합니다.</p>\n" +
        "                <div class=\"img\">\n" +
        "                    <a href=\"https://imgur.com/suIIqpw\">\n" +
        "                        <img src=\"https://i.imgur.com/suIIqpw.jpg\" title=\"source: imgur.com\"\n" +
        "                            style=\"max-width: 35%; height: auto\" alt=\"\"></a>\n" +
        "                </div>\n" +
        "            </aside>\n" +
        "        </div>";
    
    // hash가 contact일 때 보여줄 데이터
    let contact = "<div>\n" +
        "            <h1>CONTACT</h1>\n" +
        "            <hr>\n" +
        "            <a href=\"https://www.instagram.com/_0x63_eej/\">\n" +
        "                <img src=\"https://i.imgur.com/C3HPzTQ.png\" title=\"source: imgur.com\"\n" +
        "                        style=\"max-width: 50px; height: auto\" alt=\"\">\n" +
        "            </a>\n" +
        "            <a href=\"https://github.com/Eunjieater/Eunjieater.github.io\">\n" +
        "                <img src=\"https://i.imgur.com/P4hV2cE.png\" title=\"source: imgur.com\"\n" +
        "                        style=\"max-width: 50px; height: auto\" alt=\"\">\n" +
        "            </a>\n" +
        "        </div>";
    
    // hash값에 따라 실행할 함수
    let hashRouter = {
        '': () => container.html(home),
        'about': () => container.html(about),
        'contact': () => container.html(contact)
    }

    // hash값에 따라 routerMap의 함수를 호출하는 함수
    function router() {
        let hash = location.hash.replace('#', '');
        hashRouter[hash]();
    }

    // 처음 페이지 로딩 시, 또는 hash값이 바뀌었을때 router()가 실행되도록 설정
    $(window).bind("load", router);
    $(window).bind("hashchange", router);
});
