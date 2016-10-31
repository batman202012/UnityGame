#pragma strict
public var inArea : boolean = false;
public var door : GameObject;
public var player : GameObject;
public var doorIsOpen : boolean = false;
static var brokeTheDoor : boolean = false;
function Start () {

}

function Update () {
    if(Input.GetButtonDown("Use")){
        if(inArea){
            if(doorIsOpen==false){
                door.GetComponent(Animation).Play ("door fall");
                door_falls.brokeTheDoor = true;
                doorIsOpen=false;
            }
        }
    }
}

function OnTriggerEnter (player : Collider){
    inArea=true;
}

function OnTriggerExit (player : Collider){
    inArea=false;
}