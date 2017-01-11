#pragma strict
public var health : float;
public var damageReduction : float;
public var missChance : float[];
private var missChance1 : float;
public var absorbtionChance : float;
private var miss : boolean;
private var miss1 : float;
private var absorb : boolean;
private var absorb1 : float;
private var damage : float;

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

function OnTriggerEnter (other : Collider) {
    if(other.name == "pistol Bullet(Clone)"){
        Destroy(GameObject.Find("pistol Bullet(Clone)"));
        missChance1 = missChance[0];
        ApplyDamage(90);
    }
    else if(other.name == "shotgun Bullet(Clone)"){
        Destroy(GameObject.Find("shotgun Bullet(Clone)"));
        missChance1 = missChance[1];
        ApplyDamage(250);
    }
}

function ApplyDamage(damageRate){
    if(!missChance1){
        missChance1 = 0f;
    }
    miss1 = Random.Range(0,101);
    if(miss1<=missChance1){
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
    print(damage);
}