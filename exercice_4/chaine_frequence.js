const countCharacters = string => {

	const result = {};
	string.replacg, '').toLowerCase().split('').forEach(character => {
		result[character] ? result[character]++ : result[character] = 1;
	});
}