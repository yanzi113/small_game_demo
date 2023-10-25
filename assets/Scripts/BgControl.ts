// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BirdControl from './BirdControl';

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    //可能会更改的 写成属性 移动：速度
    @property
    speed: number = 4;
    //宽度
    @property
    width: number = 288;
    @property(BirdControl)
    bird : BirdControl = null;
    //跨脚本调用，为什么先把它赋值为空然后在在软件里面挂上去
    start () {
        //点击事件监听,之后让按下的事件和小鸟关联
        for(let bg of this.node.children){
            bg.on(cc.Node.EventType.MOUSE_DOWN,()=>{
                this.bird.fly()
            });
        }
    }

    update (dt) {
        for(let bg of this.node.children){
            bg.x -= this.speed *dt;
            //如果背景超出屏幕，那就把它移到右边
            if(bg.x < -this.width){
                bg.x += this.width * 2;

            }
        }
    }
}
