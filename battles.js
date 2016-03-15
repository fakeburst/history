var debug;
var debug2;
var debug3;
var debug4;
var shaerdGraphics;
var MEGA_GLOBAL_VAR_SPEED = 50;
var startTurn = 1;

function expand(){
    var width = $("#legend").width();
    console.log(width);
    $("#legend").width(width + 50);
    console.log($("#legend").width());
}

function corsun() {
    var text = ["Корсунська Битва", "14 (24) травня 1648 року Хмельницький вислав наперед полк Кривоноса, частину татар із наказом затримати противника до підходу основних сил козацько-татарського війська. <p> Увечері цей полк розпочав дії за Россю у тилу Потоцького. <p> Під Стеблевом, за милю на захід від Корсуня, козаки Кривоноса загатили ріку Рось, щоб полегшити доступ до польського табору.", "На світанку 15 (25) травня у район Корсуня підійшла основна козацько-татарська армія і переправилась через Рось, скупчившись у Корсуні.<p> Військо Богдана Хмельницького мало понад 15 тисяч козацької піхоти і кінноти, 26 гармат. З ним були також не менше 3 тисячі татарської кінноти. Довідавшись про підхід Хмельницького, Миколай Потоцький наказав запалити Фільварки. <p> Пізно ввечері 15 травня у наметі Миколая Потоцького відбулася військова рада. Серед командування військ Речі Посполитої одностайності не було. <p>Польний гетьман Марцін Калиновський, інші досвідчені воїни радили зміцнити табір і відбиватися; більшість на чолі з Миколаєм Потоцьким, налякані перебільшеними чутками про чисельність татарської кінноти, наполягали на відступі. <p>Зважаючи на перевагу козаків і татар у живій силі, відсутність допомоги та провізії, було вирішено на світанку наступного дня відступити на Богуслав під захистом табору з возів.", "Про наміри ворога Б.Хмельницький дізнався від козака-розвідника Самійла Зарудного, який за його дорученням виконував роль провідника урядових військ. <p>Аби перерізати їм шляхи відступу, був відряджений Корсунський полк на чолі з Кривоносом, який вранці 16 (26) травня зупинився у березовому гаю, в урочищі Горохова Діброва (поблизу с. Виграєва за 8–10 верст від Корсуня) із піхотою й 10 гарматами. <p>Козаки перекопали шлях глибокими ровами, завалили стовбурами дерев, а у хащі поставили гармати.", "На світанку 16 (26) травня, під захистом табору з возів, військо Речі Посполитої рушило з-під Корсуня по Богуславському шляху.<p> Козаки і татари пропустили його, однак супроводжуючи, тиснули з флангів і тилу. <p>Кілька разів зчинялася перестрілка. <p>Опівдні урядові війська, зазнавши відчутних втрат, увійшли у балку, густо зарослу лісом і чагарником. <p>Там командири урядових військ сподівалися зменшити перевагу татарської кавалерії і уберегти себе від стріл та куль.", "Долаючи перешкоди та яруги під постійним обстрілом козаків і татар, сили Речі Посполитої наблизились до пагорбів, між якими проходила широка (близько 3,5 км) і глибока балка.<p> Затиснуте ліворуч болотом, а праворуч кручами, шляхетське військо наткнулося на перекоп та завали на шляху і змушене було зупинитися. <p>Схил балки був таким урвистим, що, під час спроб обійти перешкоду, вози переверталися. Табір утратив порядок. <p>Розгорнути до бою артилерію не вдавалося, бо вози застрягли в багні. <p>Тіснота не дозволила стати до бою кавалерійським хоругвам тилової частини.", "У цю мить, козаки Кривоноса, які засіли в заздалегідь викопаних шанцях, вдарили спереду і з флангів.<p><p> Раптовий вогонь гармат і самопалів спричинив паніку у ворожому війську. <p>З тилу противника атакували козаки самого Хмельницького і татари Тугай-бея.<p> За чотири години армія Речі Посполитої була розгромлена.", "Битва завершилась близько другої-третьої години дня. <p>Переважна більшість солдат противника загинула. <p>До полону потрапили 80 великих вельмож, разом із гетьманами Потоцьким і Калиновським, 127 офіцерів, 8520 жовнірів.<p> Козаки захопили обоз, 41 гармату, багато вогнепальної і холодної зброї, військові припаси. <p>Татарська кіннота переслідувала втікачів понад 30 км. <p>З усього війська від полону й загибелі врятувалося тільки 1,5 тисячі чоловік."]
    expand();
    var legend = "<h6><div class=\"row\"><img src=\"hmel.png\"></div><div class=\"row\">Б. Хмельницький</div><p><div class=\"row\"><img src=\"polish-legend.png\"></div><div class=\"row\">М. Потоцький <br> М. Калиновський</div><div class=\"row\"><img src=\"osmans.png\"></div><div class=\"row\">Тугай Бей</div><div class=\"row\"><img src=\"kryvonos.png\"></div><div class=\"row\">М. Кривоніс</div><div class=\"row\"><img src=\"cavalry.png\" width=\"45%\" height=\"45%\"></div><div class=\"row\">І. Богун</div><div class=\"row\"></div></h6>";
    addLegend(legend);
    var turn = startTurn;
    var step = 1;
    var anime = false;
    $('#name').html(text[0]);
    addText(1, text);
    var renderer = new PIXI.CanvasRenderer(631, 536);
    $("#container").html(renderer.view);
    var stage = new PIXI.Container();
    var container = new PIXI.Container();
    container.interactive = true;
    container.on('mousedown', onDown);
    container.on('touchstart', onDown);
    stage.addChild(container);
    shaerdGraphics = new PIXI.Graphics();
    stage.addChild(shaerdGraphics);
    var bg = PIXI.Sprite.fromImage('map.jpg');
    bg.width = renderer.width;
    bg.height = renderer.height;
    container.addChild(bg);
    var infantry = PIXI.Texture.fromImage('kryvonos.png');
    var kryvonos = new PIXI.Sprite(infantry);
    kryvonos.anchor.x = 0.5;
    kryvonos.anchor.y = 0.5;
    kryvonos.scale.set(-0.5, -0.5);
    kryvonos.position.set(333, 518);
    container.addChild(kryvonos);
    var psheki = new PIXI.Sprite(PIXI.Texture.fromImage('polish.png'));
    psheki.anchor.set(0.5, 0.5);
    psheki.scale.x += 0.3;
    psheki.scale.y += 0.3;
    psheki.position.set(430, 375);
    container.addChild(psheki);
    var hmel = false;
    var osmans = false;
    var pushkar = false;
    var pushka = false;
    var cavalry = false;
    animate();
    animate();
    animate();

    function onDown(eventData) {
        addText(turn, text);
        $('.grey').height("100%");
        anime = true;
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
        if (anime) {
            switch (turn) {
                case 1:
                    if (linearNormal(kryvonos.position, new PIXI.Point(315, 460), kryvonos, true)) {
                        var bridge = PIXI.Sprite.fromImage('bridge.png');
                        bridge.height = 5;
                        bridge.weight = 10;
                        bridge.position.set(287, 450);
                        bridge.rotation -= 0.2;
                        container.addChild(bridge);
                        turn++;
                        anime = false;
                        console.log(kryvonos.position.x + " " + kryvonos.position.y);
                    }
                    break;
                case 2:
                    turn2();
                    break;
                case 3:
                    turn3();
                    break;
                case 4:
                    turn4();
                    break;
                case 5:
                    turn5();
                    break;
                case 6:
                    turn6();
                    break;
                case 7:
                    turn7();
                    break;
            }
        }
    }

    function turn2() {
        switch (step) {
            case 1:
                if (linearNormal(kryvonos.position, new PIXI.Point(283, 423), kryvonos, true)) {
                    step++;
                }
                break;
            case 2:
                if (linearNormal(kryvonos.position, new PIXI.Point(235, 423), kryvonos, true)) {
                    step++;
                }
                break;
            case 3:
                if (!hmel || !osmans) {
                    hmel = new PIXI.Sprite(PIXI.Texture.fromImage('hmel.png'));
                    hmel.anchor.set(0.5, 0.5);
                    hmel.scale.set(1.3, 1.3);
                    hmel.position.set(315, hmel.height / 2 + 537);
                    container.addChild(hmel);
                    osmans = new PIXI.Sprite(PIXI.Texture.fromImage('osmans.png'));
                    osmans.anchor.set(0.5, 0.5);
                    osmans.scale.set(1.0, 1.0);
                    osmans.position.set(560, osmans.height + 537);
                    container.addChild(osmans);
                    console.log(hmel.position);
                }
                if (linear(hmel.position, new PIXI.Point(315, 305)) & linear(osmans.position, new PIXI.Point(560, 485))) {
                    step++;
                }
                break;
            case 4:
                if (linearNormal(hmel.position, new PIXI.Point(330, 290), hmel)) {
                    if (hmel.rotation < 0.8) hmel.rotation += 0.01;
                    else {
                        turn++;
                        step = 1;
                        anime = false;
                        debug2 = kryvonos;
                    }
                }
                break;
            default:
                alert("HOW!?");
        }
    }

    function turn3() {
        switch (step) {
            case 1:
                if (linearNormal(kryvonos.position, new PIXI.Point(80, 280), kryvonos)) {
                    step++;
                }
                break;
            case 2:
                if (linearNormal(kryvonos.position, new PIXI.Point(37, 170), kryvonos)) {
                    step = 6;
                }
                break;
            case 6:
                if (linearNormal(kryvonos.position, new PIXI.Point(78, 109), kryvonos)) {
                    step++;
                }
                break;
            case 7:
                if (linearNormal(kryvonos.position, new PIXI.Point(140, 140), kryvonos)) {
                    step++;
                }
                break;
            case 8:
                debug4 = pushkar;
                if (!pushkar || !cavalry) {
                    pushkar = new PIXI.Sprite(PIXI.Texture.fromImage('infantry.png'));
                    pushkar.anchor.set(0.5, 0.5);
                    pushkar.alpha = 0;
                    pushkar.scale.set(0.3, 0.3);
                    pushkar.position.set(150, 115);
                    container.addChild(pushkar);
                    cavalry = new PIXI.Sprite(PIXI.Texture.fromImage('cavalry.png'));
                    cavalry.anchor.set(0.5, 0.5);
                    cavalry.alpha = 0;
                    cavalry.scale.set(0.3, 0.3);
                    cavalry.position.set(370, 260);
                    container.addChild(cavalry);
                }
                if (pushkar.alpha > 0.95) {
                    step++;
                } else {
                    pushkar.alpha = lerp(new PIXI.Point(pushkar.alpha, 0), new PIXI.Point(1, 0), 0.03).x;
                    cavalry.alpha = pushkar.alpha;
                }
                break;
            case 9:
                if (linearNormal(pushkar.position, new PIXI.Point(240, 80), pushkar) & linearNormal(cavalry.position, new PIXI.Point(465, 250), cavalry)) {
                    step++;
                    console.log(cavalry);
                }
                break;
            case 10:
                if (pushkar.rotation > 0 || cavalry.rotation > 0.785){ 
                    if (pushkar.rotation > 0)
                        pushkar.rotation -= 0.01;
                    if (cavalry.rotation > 0.785)
                        cavalry.rotation -= 0.01;
                }
                else {
                    step++;
                }
                break;
            case 11:
                if (!pushka) {
                    pushka = new PIXI.Sprite(PIXI.Texture.fromImage('pushkar.png'));
                    pushka.anchor.set(0.5, 0.5);
                    pushka.alpha = 0;
                    pushka.rotation = -Math.PI;
                    pushka.scale.set(0.8, 0.8);
                    pushka.position.set(pushkar.position.x, pushkar.position.y + pushkar.height + 10);
                    container.addChild(pushka);
                }
                if (pushka.alpha > 0.95) {
                    step++;
                } else {
                    pushka.alpha = lerp(new PIXI.Point(pushka.alpha, 0), new PIXI.Point(1, 0), 0.03).x;
                    anime = false;
                    step = 1;
                    turn++;
                }
                break;
        }
        debug = step;
    }
    
    function turn4(){
        MEGA_GLOBAL_VAR_SPEED = 50;
        switch(step){
            case 1:
                if(linearNormal(osmans.position, new PIXI.Point(501,384), osmans, true)){
                    step++;
                }
                break;
            case 2:
                //pheki - 415, 284;
                if(linearNormal(psheki.position, new PIXI.Point(415, 284), psheki) & linearNormal(osmans.position, new PIXI.Point(476,279), osmans)){
                   step++;
                   }
                break;
            case 3:
                if(linearNormal(psheki.position, new PIXI.Point(382, 224), psheki, true) & linearNormal(cavalry.position, new PIXI.Point(410, 193), cavalry)){
                    step = 1;
                    turn++;
                    anime = false;
                }
                break;
            default:
                alert("Not good");
        }
    }
    
    function turn5(){
        MEGA_GLOBAL_VAR_SPEED = 50;
        switch(step){
            case 1:
                if(linearNormal(psheki.position, new PIXI.Point(343, 193), psheki, true) & linearNormal(osmans.position, new PIXI.Point(390, 230), osmans, true)){
                    step++;
                }
                break;
            case 2 :
                if(linearNormal(psheki.position, new PIXI.Point(288,183), psheki, true) & linearNormal(cavalry.position, new PIXI.Point(347,168), cavalry)){
                   step++;
                   }
                break;
            case 3:
                if(linearNormal(psheki.position, new PIXI.Point(243, 216), psheki, true)){
                    step = 1;
                    turn++;
                    anime = false;
                }
                break;
            default:    
                alert("Not good");
        }
    }
    
    function turn6(){
        switch(step){
            case 1:
                if(linearNormal(hmel.position, new PIXI.Point(288,318), hmel)){
                    step++;                
                }
                break;
            case 2:
                if(linearNormal(hmel.position, new PIXI.Point(197,282), hmel) & linearNormal(osmans.position, new PIXI.Point(328,186), osmans, true) & linearNormal(cavalry.position, new PIXI.Point(259,167), cavalry)){
                    step++;
                }
                break;
            case 3:
                if(linearNormal(hmel.position, new PIXI.Point(205,267), hmel, true) & linearNormal(kryvonos.position, new PIXI.Point(223,184), kryvonos) & linearNormal(cavalry.position, new PIXI.Point(260,173), cavalry, true) & linearNormal(osmans.position, new PIXI.Point(292,187.5), osmans, true)){
                    anime = false;
                    turn++;
                    step = 1;
                }
                break;
            default:
                alert("Not good");
        }
    }
    
    function turn7(){
        switch(step){
            case 1:
                psheki.alpha = lerp(new PIXI.Point(psheki.alpha), new PIXI.Point(0,0), 0.01).x;
                if(psheki.alpha < 0.01){
                    anime = false;
                }
                break;
        }
    }
}

function jovti(){
    
}

function addText(id, q) {
    $('#text').html(q[id]);
}

function addLegend(q) {
    $('#legend').html(q);
}

function lerp(vec, target, alpha) {
    var invAlpha = 1.0 - alpha;
    vec.x = (vec.x * invAlpha) + (target.x * alpha);
    vec.y = (vec.y * invAlpha) + (target.y * alpha);
    return vec;
}

function linear(vec, target) {
    if (!vec.speed) {
        vec.speed = new Object();
        var length = Math.sqrt((vec.x - target.x) * (vec.x - target.x) + (vec.y - target.y) * (vec.y - target.y));
        debug3 = length;
        debug2 = length / 50;
        vec.speed.x = -(vec.x - target.x) / (100 * length / MEGA_GLOBAL_VAR_SPEED);
        vec.speed.y = -(vec.y - target.y) / (100 * length / MEGA_GLOBAL_VAR_SPEED);
    }
    var res = true;
    if (Math.abs(vec.x - target.x) > 1) {
        vec.x = vec.x + vec.speed.x;
        res = false;
    }
    if (Math.abs(vec.y - target.y) > 1) {
        vec.y = vec.y + vec.speed.y;
        res = false;
    }

    if (res) {
        vec.speed = false;
    }
    return res;
}

function isLeft(a, b, c) {
    /*var graphics = shaerdGraphics;
        graphics.clear();
        graphics.beginFill(0xe74c3c); // Red
        // Draw a circle
        graphics.drawCircle(c.x, c.y, 3); // drawCircle(x, y, radius)
        // Applies fill to lines and shapes since the last call to beginFill.
        graphics.lineWidth = 2;
        graphics.moveTo(a.x, a.y);
        graphics.lineTo(b.x, b.y);
        graphics.endFill();*/
    ///debug3 = 
    return ((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) > 0;
}

function linearNormal(vec, target, rotator, ppp) {
    if (!rotator.finishedRotation) {
        if (!rotator.startPos) {
            rotator.startPos = new Object();
            rotator.startPos.x = vec.x;
            rotator.startPos.y = vec.y;
        }
        var p2 = new PIXI.Point(vec.x - rotator.height / 2 * Math.cos(rotator.rotation + Math.PI / 2), vec.y - rotator.height / 2 * Math.sin(rotator.rotation + Math.PI / 2));
        debug2 = p2;
        if (!ppp) {
            if (!isLeft(rotator.startPos, target, p2)) {
                rotator.rotation += 0.01;
                return false;
            }
        } else {
            if (isLeft(rotator.startPos, target, p2)) {
                rotator.rotation -= 0.01;   
                return false;
            }
        }
        rotator.finishedRotation = true;
    }
    var r = linear(vec, target);
    if (r) {
        rotator.finishedRotation = false;
        rotator.startPos = false;
    }
    return r;
}
