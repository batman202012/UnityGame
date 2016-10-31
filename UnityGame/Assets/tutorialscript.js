#pragma strict
public var screen : GameObject;
public var text : UI.Text;
public var player : GameObject;
var audio1 : AudioSource = player.GetComponent.<AudioSource>();
public var audioClips : AudioClip[];
public var endOfHallwayMarker : GameObject;
public var doorMarker : GameObject;
public var marker : GameObject;
private var playerReachesEndOfCorrider : boolean;
public var endOfHall : GameObject;
public var door1 : GameObject;
public var doorFallMarker : GameObject;
public var textures: Texture[];
public var rend: Renderer = door1.GetComponent.<Renderer>();

private var walkedForward : boolean;
private var showWalkForward : boolean;
private var walkedBackward : boolean;
private var showWalkBackward : boolean;
private var walkedLeft : boolean;
private var showWalkLeft : boolean;
private var walkedRight : boolean;
private var showWalkRight : boolean;
private var ran : boolean;
private var showRun : boolean;
private var openDoor : boolean;
private var  showOpenDoor : boolean;
playerReachesEndOfCorrider = false;
walkedForward = true;
walkedBackward = true;
walkedLeft = true;
walkedRight = true;
ran = true;
openDoor = true;
showWalkForward = false;
showWalkBackward = false;
showWalkLeft = false;
showWalkRight = false;
showRun = false;
showOpenDoor = false;

function Start () {
   yield WaitForSeconds (2.5);
    audio1.Play();
    yield WaitForSeconds (audioClips[0].length + 2.5); 
    audio1.clip = audioClips[1]; 
    showWalkForward = true;
    audio1.Play();
    changeText();
}

function OnTriggerEnter (endOfHall : Collider){
    playerReachesEndOfCorrider=true;
}

function OnTriggerExit (endOfHall : Collider){
    playerReachesEndOfCorrider=false;
}

function Update () {
        if(walkedForward==false){
            if(Input.GetKeyDown(KeyCode.W)){
                screen.SetActive(false);
                hideText();
                audio1.clip = audioClips[2];
                audio1.Play();
                moveBackward();
                walkedForward = true;
            }
        }
        if(walkedBackward==false){
            if(Input.GetKeyDown(KeyCode.S)){
                hideText();
                audio1.clip = audioClips[2];
                audio1.Play();
                moveLeft();
                walkedBackward=true;
            }
        }
        if(walkedLeft==false){
            if(Input.GetKeyDown(KeyCode.A)){
                hideText();
                audio1.clip = audioClips[2];
                audio1.Play();
                moveRight();
                walkedLeft=true;
            }
        }
        if(walkedRight==false){
            if(Input.GetKeyDown(KeyCode.D)){
                hideText();
                audio1.clip = audioClips[2];
                audio1.Play();
                run();
                walkedRight=true;
            }
        }
        if(ran==false){
            if(playerReachesEndOfCorrider){
                hideText();
                endOfHallwayMarker.SetActive(false);
                marker.SetActive(false);
                audio1.clip = audioClips[7];
                audio1.Play();
                door();
                ran=true;
            }
        }
        if(openDoor==false){
            if(door_falls.brokeTheDoor){
                hideText();
                doorMarker.SetActive(false);
                doorFallMarker.SetActive(true);
                audio1.clip = audioClips[9];
                audio1.Play();
                openDoor=true;
            }
        }
}

function changeText(){
    if(showWalkForward) { 
        walkedForward = false;
        showWalkForward = false; 
    }
    if(showWalkBackward) {
        text.text = "Use the S key to walk backward.";
        walkedBackward = false;
        showWalkBackward = false;
    }
    if(showWalkLeft) {
        text.text = "Use the A key to walk left.";
        walkedLeft = false;
        showWalkLeft = false;
    }
    if(showWalkRight) {
        text.text = "Use the D key to walk right.";
        walkedRight = false;
        showWalkRight = false;
    }
    if(showRun){
        text.text = "Hold the Left Shift key while holding W to run forward.";
        endOfHallwayMarker.SetActive(true);
        marker.SetActive(true);
        ran = false;
        showRun = false;
    }
    if(showOpenDoor){
        text.text = "Walk close to the door and press E to open it.";
        doorMarker.SetActive(true);
        marker.SetActive(true);
        rend.material.mainTexture = textures[0];
        openDoor = false;
        showOpenDoor = false;
    }
screen.SetActive(true);
}

function hideText(){
    screen.SetActive(false);
}

function moveBackward(){
    yield WaitForSeconds (audioClips[2].length+2.5);
    audio1.clip = audioClips[3];
    audio1.Play();
    showWalkBackward = true;
    changeText();
    yield WaitForSeconds (audioClips[3].length);
}

function moveLeft(){
    yield WaitForSeconds (audioClips[2].length+2.5);
    audio1.clip = audioClips[4];
    audio1.Play();
    showWalkLeft = true;
    changeText();
    yield WaitForSeconds (audioClips[4].length);
}

function moveRight(){
    yield WaitForSeconds (audioClips[2].length+2.5);
    audio1.clip = audioClips[5];
    audio1.Play();
    showWalkRight = true;
    changeText();
    yield WaitForSeconds (audioClips[5].length);
}

function run(){
    yield WaitForSeconds (audioClips[2].length+2.5);
    audio1.clip = audioClips[6];
    ran = false;
    audio1.Play();
    showRun = true;
    changeText();
    yield WaitForSeconds (audioClips[6].length);
}

function door(){
    yield WaitForSeconds (audioClips[7].length+2.5);
    audio1.clip = audioClips[8];
    openDoor = false;
    audio1.Play();
    showOpenDoor = true;
    changeText();
    yield WaitForSeconds (audioClips[8].length);
}