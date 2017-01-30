#pragma strict
public var target : Transform;
var cam : GameObject;
var camera1 = cam.GetComponent.<Camera>();
public var marker : UI.Image;

function Start() {
    
}

function Update() {
    var screenPos : Vector3 = camera1.WorldToScreenPoint(target.position);
    marker.transform.position.x = screenPos.x;
    marker.transform.position.y = screenPos.y;
}