export default class Collection {
	constructor() {
		this.items = [];
	}

	add(item) {
		this.items = [...this.items, item];
		return item;
	}

	remove(id) {
		this.items = this.items.filter((item) => item.id !== id);
	}

	get isDone() {
		if (this.items.length === 0) return false;
		return this.items.every((item) => item.isDone);
	}
}
