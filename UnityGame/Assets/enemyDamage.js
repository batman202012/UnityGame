#pragma strict
public var health : float;
public var damageReduction : float;
public var missChance : float;
public var absorbtionChance : float;
var miss : boolean;
var miss1 : float;
var absorb : boolean;
var absorb1 : float;
var damage : float;

var player : GameObject;
var other : GameObject;
var enemy : GameObject;
public var stunTime : float;

 
function Start () {
    //Physics.IgnoreCollision(GetComponent.<Collider>(), player.GetComponent.<Collider>());
    //ApplyDamage(200);
    //gameObject.GetComponent(enemyDamage).enabled = false;
}
 
function Update(){

}

/*function OnTriggerEnter (player : Collider) {
    if(player.name == "FPSController"){
        
    }
}*/

function ApplyDamage(damageRate){
    miss1 = Random.Range(0,101);
    if(miss1<=missChance){
        miss=true;
    }
    else{
        miss=false;
    }
    if(miss==false){
        absorb1 = Random.Range(0,101);
        if(absorb1<=absorbtionChance){
            absorb = true;
            damage = 0;
        }
            damage = damageRate;
            damage = damage - (damage * damageReduction);
            health = health - damage;
            if(health<=0){
                Destroy(enemy);
            }
    }
}