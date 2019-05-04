const cetakPola = (input) => {
	var polaNonMedian = "";
	var polaMedian = "";
	if (input %2 == 1) {
		for (let i=1; i<=input; i++) {
			if (i == ((input+1)/2)) {
				for (let j=1; j<=input; j++) {
					polaMedian += "* ";
				}
				console.log(polaMedian);
			}
			else {
				for (let j=1; j<=input; j++) {
					if (j == 1) {
						polaNonMedian += "* ";
					}
					else if (j == input) {
						polaNonMedian += "* ";
					}
					else {
						polaNonMedian += "= "
					}
				}
				console.log(polaNonMedian);
				polaNonMedian = "";
			}
		}
	}
	else {
		console.log("harus bilangan ganjil");
	}
}

cetakPola(9);