#pragma strict
import System.IO;

var data : String[];
var arrLine : String[];
var fileName : String = Application.dataPath + "/config.cfg";
var temp;
public var settings : boolean;

public function writeStuffToFile(line_to_edit : int, newText : String)
{
    arrLine = System.IO.File.ReadAllLines(fileName);
    arrLine[line_to_edit - 1] = newText;
    System.IO.File.WriteAllLines(fileName, arrLine);
    //System.IO.File.AppendAllText(fileName, "\nThis is a new line");
}

public function readStufFromFile(line_to_read : int)
{
    data = System.IO.File.ReadAllLines(fileName);
    Debug.Log(data[line_to_read - 1]);
}

function Start () {
    arrLine = System.IO.File.ReadAllLines(fileName);
    if(settings){
        //volume
        data = System.IO.File.ReadAllLines(fileName);
        volumeChange.volume = float.Parse(data[0]);
        volumeChange.volumeAtStart = volumeChange.volume;
        //quality level
        graphicQuality.quality = int.Parse(data[1]);
        graphicQuality.startQuality = graphicQuality.quality;
        QualitySettings.SetQualityLevel(graphicQuality.quality);
    }
}

function Update () {

}

function applySettings(){
    //volume
    arrLine[0] = volumeChange.volume.ToString();
    volumeChange.volumeAtStart = volumeChange.volume;
    //quality level
    arrLine[1] = graphicQuality.quality.ToString();
    graphicQuality.startQuality = graphicQuality.quality;
    //final write
    System.IO.File.WriteAllLines(fileName, arrLine);
}