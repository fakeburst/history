function corsun() {
    $(document).ready(function () {
        var turn = 0;
        var anime = false;
        
        var renderer = new PIXI.CanvasRenderer(631, 536);
        $("#container").append(renderer.view);

        var stage = new PIXI.Container();
        var container = new PIXI.Container();
        container.interactive = true;
        container.on('mousedown', onDown);
        container.on('touchstart', onDown);
        stage.addChild(container);

        var bg = PIXI.Sprite.fromImage('map.jpg');
        bg.width = renderer.width;
        bg.height = renderer.height;
        container.addChild(bg);

        var infantry = PIXI.Texture.fromImage('infantry.png');
        
        var kryvonos = new PIXI.Sprite(infantry);
        kryvonos.anchor.x = 0.5;
        kryvonos.anchor.y = 0.5;
        kryvonos.scale.set(-0.5, -0.5);
        kryvonos.position.set(333,518);
        container.addChild(kryvonos);
        
        var psheki = new PIXI.Sprite(PIXI.Texture.fromImage('polish-infantry.png'));
        psheki.anchor.set(0.5, 0.5);
        psheki.scale.x += 0.3;
        psheki.scale.y += 0.3;
        psheki.rotation += 1.57;
        psheki.position.set(430,375);
        container.addChild(psheki);
        
        animate();
        
        function onDown (eventData) {
            turn++;
            anime = true;
            animate();
        }

        function animate(){
            requestAnimationFrame(animate);
            if(anime && turn == 1)
                {
                    if(!kryvonos.containsPoint(new PIXI.Point(315, 460)))
                        {
                            kryvonos.position.x -= 0.14;
                            kryvonos.position.y -= 0.55;
                        }
                    else{
                        var bridge = PIXI.Sprite.fromImage('bridge.png');
                        bridge.height = 5;
                        bridge.weight = 10;
                        bridge.position.set(287,450);
                        bridge.rotation -= 0.2;
                        container.addChild(bridge);
                        anime = false;
                        console.log(kryvonos.position.x + " " + kryvonos.position.y); 320, 468
                    }
                }
            if(anime && turn == 2)
                {
                    if(kryvonos.position.x > 283 && kryvonos.position.y > 423)
                        {
                            kryvonos.position.x -= 0.37;
                            kryvonos.position.y -= 0.45;
                        }
                    else if (kryvonos.position.x > 235)
                        {
                            kryvonos.position.x -= 0.48;
                        }
                    else{
                        var hmel = PIXI.Sprite.fromImage('infantry.png');
                        anime = false;
                    }
                }
            renderer.render(stage);
        }
    });
}

