// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 按下背景（事件监听放在背景里），小鸟会飞一下

const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {

   onLoad(){
    //先开启物理的功能，必须在onload里去写
     cc.director.getPhysicsManager().enabled = true;
   }

    start () {


    }
    //飞的方法
    fly(){
        //获取刚体并给它一个向上的速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,200);
    }

    update (dt) {}

    onBeginContact(contact, self, other){
        if(other.tag == 1){
            console.debug("加1分");
        }else{
            console.debug("死亡");
        }
    }
}
