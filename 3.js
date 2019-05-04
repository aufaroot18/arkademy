const cetakPola = (input) => {
	if (input %2 == 1) {
		for (var i=1; i<=input; i++) {
			if (i == ((input+1)/2)) {
				console.log("* * * * *");
			}
			else {
				console.log("* = = = *");
			}
		}
	}
	else {
		console.log("harus bilangan ganjil");
	}
}

cetakPola(5);