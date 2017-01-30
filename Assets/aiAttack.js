#pragma strict
private var obj : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
    if(other.GetComponent.<playerHealth>()){
        obj = other.gameObject;
    }
}

function OnTriggerExit(other : Collider) {
    obj = null;
}