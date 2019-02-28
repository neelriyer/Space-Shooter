var StarScore : int = 500;
var StarSound : AudioSource;

function OnTriggerEnter (col : Collider) {
	StarSound.Play();
	Score_Script.TheScore += StarScore;
	this.transform.position = Vector3(0, 1000, 0);
}