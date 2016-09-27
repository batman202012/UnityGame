#pragma strict
public var completedTutorial = false;

function Start () {

}

function Update () {

}

function playGame(){
    if(completedTutorial){

    }
    else{
        Application.LoadLevel(1);
    }
}

function quitGame(){
    Application.Quit();
}