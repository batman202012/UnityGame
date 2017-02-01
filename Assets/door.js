#pragma strict
public var inArea : boolean = false;
public var door : GameObject;
public var player : GameObject;
public var doorIsOpen : boolean = false;
function Start () {

}

function Update () {
    if(Input.GetButtonDown("Use")){
        if(inArea){
            if(doorIsOpen){
                door.GetComponent(Animation).Play ("door close");
                doorIsOpen=false;
            }
            else{
                door.GetComponent(Animation).Play ("door open");
                doorIsOpen=true;
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