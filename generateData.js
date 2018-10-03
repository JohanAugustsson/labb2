function generateProduct() {
	const color = ['red', 'blue', 'pink']
	const category = ['wood', 'plastic', 'metal']
	const name = ['balloonHat', 'bicycleHat', 'hammerHat', 'wrenchHat']
	function randomElement(list) {
		let r = Math.random() * list.length;
		return list[Math.floor(r)];
	}

	let c = randomElement(color);
	let m = randomElement(category);
	let t = randomElement(name);
	return {
    color: c,
    category: m,
    name: t,
    price: Math.floor((Math.random() * 100))
  }
}

function getHatList( count ) {
  let list = [];
  while( count > 0 ) {
    list.push(generateProduct());
    count--;
  }
  return list;
}

module.exports = {
  getHatList,
}
