#pragma strict
public var target : Transform;
public var player : Transform;
private var playerPos : Vector3;
private var targetPos : Vector3;
var changePos : Vector3;
public var speed : int;


function Start () {
    /*targetPos = target.position;
    playerPos = player.position;
    changePos = targetPos - playerPos;
    changePos = changePos * speed;
    print(changePos);
    GetComponent.<Rigidbody>().velocity = changePos;*/
    GetComponent.<Rigidbody>().velocity = Vector3(0, 0, 200);
    yield WaitForSecondsRealtime (10);
}

function Update () {
    if(gameObject.transform.position.y<=40){
        Destroy(gameObject);
    }
    
}