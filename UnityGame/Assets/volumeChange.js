#pragma strict

public var volumeSlider : UI.Slider;
public var volumeAudio : AudioSource;
static var volume : float;
public var text : UI.Text;
private var temp;
static var volumeAtStart;

function Start () {
    volumeSlider.value = volumeChange.volume;
    temp = volumeChange.volume * 100;
    text.text = temp.ToString();
    volumeAudio.volume = volumeChange.volume;
}

function Update () {

}

function VolumeController(){
    volumeChange.volume = volumeSlider.value;
    temp = volumeChange.volume * 100;
    text.text = temp.ToString();
    volumeAudio.volume = volumeChange.volume;
}

function reset(){
    volumeAudio.volume = volumeChange.volumeAtStart;
    volumeSlider.value = volumeChange.volumeAtStart;
    //temp = float.Parse(volumeChange.volumeAtStart) * 100;
    //text.text = temp.ToString();
}