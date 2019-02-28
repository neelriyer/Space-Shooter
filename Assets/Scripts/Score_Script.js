import UnityEngine.UI;

static var TheScore : int;
var ScoreDisplay : GameObject;

 TheScore = 0;
function Start () {
     InvokeRepeating("AddScore", 1, 0.1);
}
 

function AddScore() {
	TheScore += 5;
	ScoreDisplay.GetComponent.<Text>().text = "Score: " + TheScore;
}
