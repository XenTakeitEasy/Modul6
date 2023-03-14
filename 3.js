function first(a) {
	return function(b) {
		return a + b;
	}
}
const second = first(3);
console.log(second(7));