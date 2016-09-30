#pragma strict
public var completedTutorial = false;
public var mainMenu : GameObject;
public var optionsMenu : GameObject;

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

function backToMainMenu(){
    mainMenu.SetActive(true);
    optionsMenu.SetActive(false);
}

function optionsmenu(){
    mainMenu.SetActive(false);
    optionsMenu.SetActive(true);
}