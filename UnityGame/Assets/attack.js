#pragma strict
var player : GameObject;
var meleeTrigger : GameObject;
var run : boolean;
var other : GameObject;
run = false;
 
function Start() {
    MeleeSwing();
}

function Update(){

}
 
function MeleeSwing(){
    while(true){
        if(Input.GetButtonDown("Fire1")){
            if(run){
                print("1");
                //player.GetComponent.<Animation>().CrossFade("1h_attack1");
                other.SendMessage ("ApplyDamage", 200);
                print("4");
                //yield WaitForSeconds(player.GetComponent.<Animation>()["1h_attack1"].length);
                //meleeTrigger.SetActive(false);
                yield WaitForSeconds(0.1);
            }
       
        }
        else{
            yield;
        }
    }
}

function OnTriggerEnter (other : Collider) {
    if(other.GetComponent.<enemyDamage>()){
        print("5");
        run = true;
    }
}

function OnTriggerExit(other : Collider) {
    run = false;
}