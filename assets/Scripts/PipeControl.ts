// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeControl extends cc.Component {
    @property
    speed:number = 50;

    start () {

    }

    update (dt) {
        //跟遍历背景一样的逻辑遍历管道
        for( let pipe of this.node.children){
            pipe.x -= this.speed * dt;
            //x 小于-50，基本上就算出屏幕了依然加两屏幕的位置
            if(pipe.x < -50){
                pipe.x += 288 * 2;
                //430~671
                pipe.y = Math.random() * 150 + 430;
            }
        }
    }
}
