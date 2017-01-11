#pragma strict
public var meleeAttack : int;
public var meleeTime : int;
private var waitTime : float;
private var obj : GameObject;
private var attackType;

function Start () {
    attack();
}

function Update () {

}

function attack(){
    while(true){
        attackType = Mathf.Floor(Random.value);
        if(obj != null){
            if(attackType==0){
                //player.GetComponent.<Animation>().CrossFade("1h_attack1");
                obj.SendMessage ("ApplyDamage", meleeAttack);
                //yield WaitForSeconds(player.GetComponent.<Animation>()["1h_attack1"].length);
                waitTime = meleeTime;
            }
        }
        else{
                yield;
        }
        yield WaitForSecondsRealtime (waitTime);
    }
}

function OnTriggerEnter (other : Collider) {
    if(other.GetComponent.<playerHealth>()){
        obj = other.gameObject;
    }
}

function OnTriggerExit(other : Collider) {
    obj = null;
}