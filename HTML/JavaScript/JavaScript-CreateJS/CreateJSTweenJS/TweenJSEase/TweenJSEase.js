
var stage = new createjs.Stage('gameview');

var circle = new createjs.Shape();
circle.graphics.beginFill('#1e5eff').drawCircle(50, 50, 50);

stage.addChild(circle);

createjs.Tween.get(circle, {loop: false}, true)
    .to({x: 500, y: 0, alpha: 0.1}, 1000, createjs.Ease.backIn)
    .to({x: 0}, 1000, createjs.Ease.backIn)
    .wait(1000)
    .to({alpha: 1}, 100);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick', stage);