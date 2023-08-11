const countCharacters = string => {

	const result = {};
	string.replace(/\s|\W/g, '').toLowerCase().split('').forEach(character => {
		result[character] ? result[character]++ : result[character] = 1;
	});
}