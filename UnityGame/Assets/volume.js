#pragma strict
public var volumeAudio : AudioSource;

function Start () {
    volumeAudio.volume = volumeChange.volume;
}

function Update () {

}