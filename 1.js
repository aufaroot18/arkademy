const biodata = () => {
	const data = {
		name: "Aufa",
		address: "Depok",
		hobbies: [
			"Membaca", "Menulis", "Futsal", "Badminto"
		],
		is_married: false,
		school: {
			highSchool: "S1",
			universtiry: "STT-NF"
		},
		skills: [
			{
				skill: "Web Programming"
			},
			{
				skill: "Linux"
			},
			{
				skill: "Teaching"
			},
			{
				skill: "English and Arabic"
			}
		],
	};

	const result = JSON.stringify(data);
	return result;
}

console.log(biodata());