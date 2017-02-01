#pragma strict
public var target : Transform;
public var player : Transform;
public var player2 : Transform;
public var player3 : Transform;
private var playerPos : Vector3;
private var targetPos : Vector3;
var changePos : Vector3;
public var speed : int;
private var forward : Vector3;


function Start () {
    /*targetPos = target.position;
    playerPos = player.position;
    changePos = targetPos - playerPos;
    changePos = changePos * speed;
    print(changePos);
    GetComponent.<Rigidbody>().velocity = changePos;*/
    //transform.localEulerAngles = Vector3(player2.localEulerAngles.x, Camera.main.transform.localEulerAngles.y,  Camera.main.transform.localEulerAngles.z);
    //print(GetComponent.<Rigidbody>().velocity);
    forward = transform.forward;
    print(forward);
}

function Update () {
    transform.position.x += forward.x * Time.deltaTime * speed;
    transform.position.y += forward.y * Time.deltaTime * speed - (Mathf.Pow(Time.deltaTime, 2) * 9.818);
    transform.position.z += forward.z * Time.deltaTime * speed;
    if(gameObject.transform.position.y<=40){
        Destroy(gameObject);
    }
    
}