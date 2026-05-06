export default class Collection {
	constructor() {
		this.items = [];
	}

	save(item) {
		this.items = [...this.items, item];
		return item;
	}

	edit(editedItem) {
		this.items = this.items.map((item) => {
			if (item.id === editedItem.id) {
				return {
					...item,
					...editedItem,
				};
			}

			return item;
		});
	}

	delete(id) {
		this.items = this.items.filter((item) => item.id !== id);
	}

	get isDone() {
		if (this.items.length === 0) return false;
		return this.items.every((item) => item.isDone);
	}
}
