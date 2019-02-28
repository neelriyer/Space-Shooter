//ScoreSave

import System.IO;

var fileName = "highscore.data";
var ScoreAmount : int;

function Start () {
	ScoreAmount = Score_Script.TheScore;
	//var OurFile = File.CreateText(fileName);
		//OurFile.WriteLine (ScoreAmount);
		//OurFile.Close();
	PlayerPrefs.SetInt("Highscore", ScoreAmount);
}
