#pragma strict
var player : GameObject;
var run : boolean;
public var speed : float;
public var projectile : GameObject;
var obj : GameObject;
run = false;
var instantiatedProjectile : Rigidbody;
private var waitTime : float;
public var reloadTime : float;
public var meleeTime : float;

 
function Start() {
    MeleeSwing();
}

function Update(){

}
 
function MeleeSwing(){
    while(true){
        waitTime = 0;
        if(Input.GetButtonDown("Fire2")){
            if(obj != null){
                //player.GetComponent.<Animation>().CrossFade("1h_attack1");
                obj.SendMessage ("ApplyDamage", 200);
                //OnTriggerEnter();
                //yield WaitForSeconds(player.GetComponent.<Animation>()["1h_attack1"].length);
                //meleeTrigger.SetActive(false);
                waitTime = meleeTime;
            }
            else{
                yield;
            }
       
        }
        else if(Input.GetButtonDown("Fire1")){
            
            projectile.active = true;
            instantiatedProjectile = Instantiate(projectile,transform.position,transform.rotation)as Rigidbody;
            projectile.active = false;
            waitTime = reloadTime;
        }
        yield WaitForSecondsRealtime (waitTime);
    }
}

function OnTriggerEnter (other : Collider) {
    if(other.GetComponent.<enemyDamage>()){
        obj = other.gameObject;
    }
}

function OnTriggerExit(other : Collider) {
    obj = null;
}