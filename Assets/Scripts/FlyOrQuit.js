
//FlyOrQuit

function OnGUI () {
	if (GUI.Button (Rect (Screen.width/2 - 100, Screen.height/2, 200, 30), "Fly Again")) {
		Application.LoadLevel(2);
	}

	if (GUI.Button (Rect (Screen.width/2 - 100, Screen.height/2+50, 200, 30), "Main Menu")) {
		Application.LoadLevel(0);
	}


}