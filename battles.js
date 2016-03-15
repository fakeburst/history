var debug;
var debug2;
var debug3;
var debug4;
var shaerdGraphics;
var MEGA_GLOBAL_VAR_SPEED = 50;
var startTurn = 1;
var legendWidth = false;

function expand(){
    var width = $("#legend").width();
    if (!legendWidth){
        legendWidth = width;
    }
    console.log(legendWidth);
    $("#legend").width(legendWidth + 50);
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
    var text = ["Битва під Жовтими Водами","29 квітня поляки насамперед стали табором, окопавшись. С.Потоцький сподівався утримати свої позиції до приходу головних сил. Козаки підійшли під самі шанці Речі Посполитої, підкопалися, підвезли гармати, порох, почали приступ. Поляки мали сильнішу артилерію, відбили напад запорожців. Розпочалася позиційна боротьба. Повстанці замкнули звідусіль табір Речі Посполитої, почали його обстрілювати та періодично йшли на нього приступом: «день і ніч боротьба з ними була, і по кілька разів на день».", "30 квітня 1648 року штурм табору Речі Посполитої розпочався наступом української піхоти при підтримці татарської кінноти. Питома вага татарської кінноти у штурмі табору Речі Посполитої була мінімальною, але перебування навколо табору її полків, готових до бою, стримувало проведення контратак кавалерії Речі Посполитої проти наступаючої козацької піхоти.", "Але поки що козацький штурм не мав успіху. У поляків на вежах було 10 гармат. Б.Хмельницький мав на той час всього 3 гармати-фальконети малого калібру. Бойові дії 30 квітня— 1 травня 1648 року показали, що такою силою табір Речі Посполитої не здобути.8 — 9 травня татарська кіннота залишила Жовті Води, пішла в район зосередження на Інгульці (нині північна околиця міста П'ятихатки), де хан збирав усі сили для допомоги Богдану Хмельницькому. Табір Речі Посполитої залишався в облозі козаків.", "Богдан Хмельницький знав, що Дніпром проти нього йдуть не самі поляки, а реєстрові козаки, послані ними, тобто такі самі православно-руські люди, як і всі українці, лише зобов'язані службою королю Речі Посполитої. Запорозький вождь зважився вплинути на їхні почуття, аби відірвати від поляків. Залишивши табір, Б.Хмельницький поспішив до правого берега Дніпра, до урочища Кам'яний Затон, куди ввечері 3 травня підійшли й пристали до берега реєстрові козаки. За допомогою таємних агентів Богдан Хмельницький зумів пробудити у реєстрових козаків таку ненависть до поляків, що вони повстали, ледь прийшовши до Кам'яного Затону, перебили своїх начальників І.Барабаша, Вадовського, І.Караїмовича та інших (полковнику Кричевському - як особистому другу Хмельницького - зберегли життя і свободу), вибрали наказним гетьманом Филона Джалалія, 4 травня об'єдналися з козаками, що стояли в таборі. До Жовтих Вод їх доставили на прохання Б.Хмельницького кіньми Тугай-бея. 13 травня прибули до Жовтих Вод 3500 реєстровців водного відділу, які 4 травня під Микитиним Рогом (тепер поблизу Нікополя) перейшли на сторону повстанців.", "14 травня під час переговорів Хмельницький і Потоцький-молодший (його змусили вести перемовини власні вояки) домовилися: поляки передають козакам всю артилерію з порохом та клейноди, їм дають можливість відступити до Крилова. За даними польського дослідника Вєслава Маєвскі, після цього козаки зірвали перемовини, затримали послів Речі Посполитої (в т. ч. Стефана Чарнєцкі), а козацькі заручники втекли. Насправді в табір приїхав сотник Кривоніс. Домовились про те, що він залишається в заручниках, а Стефан віддає всі гармати. Стефан розумів: без підтримки батька важко буде впоратись. Після цього поляки почали пригощати козаків горілкою, в табір йшли козаки, їх поїли, однак надвечір не було ні козаків, ні заручників.", "Вєслав Маєвскі: …15 травня татари почали перемовини, вимагаючи особистої участі С.Потоцького в них; він мав вести розмову з Тугай-беєм між таборами. Виїхавши на них, С.Потоцький в полі побачив, що це була пастка особисто для нього. Союзники (татари) почали напад на табір поляків, які заховались у відокремлених шанцях: одними командував Шемберк, іншими С.Потоцький. Напад був відбитий ціною значних втрат. Шемберк полишив свій шанець, перебираючись до іншого, був поранений.", "Вночі з 15 травня на 16 військо Речі Посполитої вишикувалося для здійснення маршу до урочища Княжі Байраки в умовах козацького оточення не «табором» з возовою рухомою обороною, а в інший похідно-бойовий порядок — так званого «старого польського шикування». Це шикування мало вигляд великого, порожнього всередині кінного чотирикутника, готового з кожного боку до негайної кавалерійської атаки. Стефан Потоцький просунувся на 8-12 км уздовж урочища Княжі Байраки.", "С.Потоцький не здогадувався, що в його тилу проходить татарське військо. На шляху відходу Кривоніс перекопав дорогу, приготувався у засідці. Коли на світанку Стефан почав рух, позаду почувся дикий крик, хмара стріл. По опису очевидця, стріли нищили і нівечили людей і коней; перший напад був відбитий, другим табір поляків було розірвано. Почавши бігти вперед, Стефан потрапив на загін Кривоноса. Почалась битва, у якій «вода змішалась з кров'ю». Стефан був поранений (вогнепальне(і) та різані рани), потрапив до татарського полону, помер від гангрени 19 травня. Врятувався тільки один жовнір, який переодягнувшись в селянина, подав знак батьку М.Потоцькому про загибель сина."];
    expand();
    var legend = "<h6><div class=\"row\"><img src=\"hmel.png\"></div><div class=\"row\">Б. Хмельницький</div><p><div class=\"row\"><img src=\"polish-legend.png\"></div><div class=\"row\">М. Потоцький <br> М. Калиновський</div><div class=\"row\"><img src=\"osmans.png\"></div><div class=\"row\">Тугай Бей</div><div class=\"row\"><img src=\"kryvonos.png\"></div><div class=\"row\">М. Кривоніс</div><div class=\"row\"><img src=\"cavalry.png\" width=\"45%\" height=\"45%\"></div><div class=\"row\">І. Богун</div><div class=\"row\"></div></h6>";
    addLegend(legend);
    var turn = startTurn;
    var step = 1;
    var anime = false;
    $('#name').html(text[0]);
    addText(1, text);
    var renderer = new PIXI.CanvasRenderer(625, 531);
    $("#container").html(renderer.view);
    var stage = new PIXI.Container();
    var container = new PIXI.Container();
    container.interactive = true;
    container.on('mousedown', onDown);
    container.on('touchstart', onDown);
    stage.addChild(container);
    shaerdGraphics = new PIXI.Graphics();
    stage.addChild(shaerdGraphics);
    var bg = PIXI.Sprite.fromImage('map3.png');
    bg.width = renderer.width;
    bg.height = renderer.height;
    container.addChild(bg);
    animate();
    animate();
    animate();

    var potockij = new PIXI.Sprite(PIXI.Texture.fromImage('polish3.png'));
    potockij.anchor.set(0.5, 0.5);
    potockij.position.set(175, 360);
    potockij.rotation = -0.44;
    container.addChild(potockij);


    var push1 = new PIXI.Sprite(PIXI.Texture.fromImage('pushkar.png'));
    push1.anchor.set(0.5, 0.5);
    push1.scale.set(0.7, 0.7);
    push1.rotation = Math.PI;
    push1.position.set(138, 380);
    container.addChild(push1);
    
    var push2 = new PIXI.Sprite(PIXI.Texture.fromImage('pushkar.png'));
    push2.anchor.set(0.5, 0.5);
    push2.scale.set(0.7, 0.7);
    push2.rotation = Math.PI;
    push2.position.set(215, 340);
    container.addChild(push2);

    var hmel = new PIXI.Sprite(PIXI.Texture.fromImage('hmel.png'));
    hmel.anchor.set(0.5, 0.5);
    //hmel.scale.set(0.7, 0.7);
    hmel.rotation = -0.44;
    hmel.position.set(242, 469);
    container.addChild(hmel);

    var hmel1 = new PIXI.Sprite(PIXI.Texture.fromImage('infantry.png'));
    hmel1.anchor.set(0.5, 0.5);
    hmel1.scale.set(0.4, 0.4);
    hmel1.rotation = -0.44;
    hmel1.position.set(210, 443);
    container.addChild(hmel1);

    var hmel2 = new PIXI.Sprite(PIXI.Texture.fromImage('infantry.png'));
    hmel2.anchor.set(0.5, 0.5);
    hmel2.scale.set(0.4, 0.4);
    hmel2.rotation = -0.44;
    hmel2.position.set(242, 427);
    container.addChild(hmel2);

    var tatari = new PIXI.Sprite(PIXI.Texture.fromImage('osmans.png'));
    tatari.anchor.set(0.5, 0.5);
    tatari.rotation = - 1.3;
    tatari.position.set(386, 386);
    container.addChild(tatari);

    var tatari1 = new PIXI.Sprite(PIXI.Texture.fromImage('osmans.png'));
    tatari1.anchor.set(0.5, 0.5);
    tatari1.scale.set(0.4, 0.4);
    tatari1.rotation = - 1.3;
    tatari1.position.set(358, 358);
    container.addChild(tatari1);

    var tatari2 = new PIXI.Sprite(PIXI.Texture.fromImage('osmans.png'));
    tatari2.anchor.set(0.5, 0.5);
    tatari2.scale.set(0.4, 0.4);
    tatari2.rotation = - 1.3;
    tatari2.position.set(348, 392);
    container.addChild(tatari2);
    
    var reestr = new PIXI.Sprite(PIXI.Texture.fromImage('reestr.png'));
    var reestrRot = true;
    reestr.anchor.set(0.5, 0.5);
    reestr.scale.set(0.6, 0.6);
    reestr.rotation = Math.PI/2;
    reestr.position.set(650, 43);
    container.addChild(reestr);

    function onDown(eventData) {
        turn = 4;
        anime = true;
        addText(turn, text);
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
        if (anime) {
            switch (turn) {
                case 1:
                    turn1();
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
                case 8:
                    turn8();
                    break;
            }
        }
    }

    function turn1(){
        turn++;
    }

    function turn2(){
        if (linearNormal(hmel1.position, new PIXI.Point(187, 395), hmel1) & linearNormal(tatari2.position, new PIXI.Point(217, 378), tatari2)){
            turn++;
            anime = false;
        }
    }

    function turn3(){
        debug = step;
        switch (step){
            case 1:
                MEGA_GLOBAL_VAR_SPEED = 200;
                if (linear(hmel1.position, new PIXI.Point(166, 374), hmel1) & linear(tatari2.position, new PIXI.Point(197, 361), tatari2)){
                    step++;
                    hmel1.rotation -= Math.PI;
                    tatari2.rotation -= Math.PI;
                }
                break;        
            case 2:
                MEGA_GLOBAL_VAR_SPEED = 125;
                if (linear(hmel1.position, new PIXI.Point(187, 395), hmel1) & linear(tatari2.position, new PIXI.Point(217, 378), tatari2)){
                    step++;
                }   
                break;
            case 3:
                MEGA_GLOBAL_VAR_SPEED = 50;
                if (linearNormal(hmel1.position, new PIXI.Point(210, 443), hmel1) & linearNormal(tatari2.position, new PIXI.Point(348, 392), tatari2)){
                    step++;
                }
                break;
        }
    }

    function turn4(){
        switch(step){
            case 1:
                if(linearNormal(reestr.position, new PIXI.Point(280, 368), reestr)){
                    step++
                }
                break;
            case 2:
                if(linearNormal(reestr.position, new PIXI.Point(279, 449), reestr, true)){
                    console.log(reestr.rotation);
                    if(reestr.rotation > 2.73){
                        reestr.rotation -= 0.01;
                    } 
                    else{
                        turn++;
                        step = 1;
                        anime = false;
                    }
                }
                break;
        }
    }

    function turn5(){
        turn++;
        step = 1;
        anime = false;
    }

    function turn6(){
        turn++;
        step = 1;
        anime = false;
    }

    function turn7(){
        turn++;
        step = 1;
        anime = false;
    }

    function turn8(){
        turn++;
        step = 1;
        anime = false;
    }
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
