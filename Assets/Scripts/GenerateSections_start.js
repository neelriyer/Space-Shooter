
var Section01 : GameObject;
var Section02 : GameObject;
var Section03 : GameObject;

var NewXAxis : float = NextAxis.TheXAxis;
var GenSec : int;
var NewSec : GameObject;
var NextPosition : Vector3 = Vector3(NextAxis.TheXAxis, 0, 0);

NextAxis.TheXAxis = 216.3578;

function OnTriggerEnter (col : Collider) {
	NextPosition = Vector3(NextAxis.TheXAxis, 0, 0);
	GenSec = Random.Range(1, 4);
	NewXAxis = NextAxis.TheXAxis;

	if (GenSec == 1) {
		NewSec = Section01;
	}
	if (GenSec == 2) {
		NewSec = Section02;
	}
	if (GenSec == 3) {
		NewSec = Section03;
	}

	Instantiate(NewSec, NextPosition, Quaternion.identity);
	NextAxis.TheXAxis += 500;
}