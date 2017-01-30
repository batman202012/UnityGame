#pragma strict
public var target : Transform;
public var player : Transform;
var playerPos : Vector3;
var targetPos : Vector3;
var changePos : Vector3;
public var speed : int;


function Start () {
    targetPos = target.position;
    playerPos = player.position;
    changePos = targetPos - playerPos;
    changePos = changePos * speed;
    GetComponent.<Rigidbody>().velocity = changePos;
    yield WaitForSecondsRealtime (10);
}

function Update () {
    if(gameObject.transform.position.y<=40){
        Destroy(gameObject);
    }
    
}