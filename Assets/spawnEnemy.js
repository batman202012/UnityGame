#pragma strict
public var enemy : GameObject;
public var spawnPoint : Transform;

function Start () {

}

function Update () {
    if(Input.GetKeyDown(KeyCode.K)){
        Instantiate(enemy,spawnPoint.position,spawnPoint.rotation);
    }
}