#pragma strict
public var qualitySelect : UI.Dropdown;
static var quality : int;
static var startQuality : int;

function Start () { 
    qualitySelect.value = graphicQuality.quality;
    QualitySettings.SetQualityLevel(graphicQuality.quality);
}

function Update () {

}

function qualityChange(){
    graphicQuality.quality = qualitySelect.value;
    QualitySettings.SetQualityLevel(graphicQuality.quality);
}

function qualityReset(){
    qualitySelect.value = graphicQuality.startQuality;
    QualitySettings.SetQualityLevel(graphicQuality.startQuality);
}