import App from "../models/App.js";

import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(appModel, root) {
		this.appModel = appModel;
		this.root = root;
		this.actions = {
			saveWorkspace: (data) => {
				console.log(data);
			},
		};

		this.render();
	}

	render() {
		this.root.innerHTML = "";

		const mainLayout = createMainLayout(this.appModel, this.actions);
		this.root.appendChild(mainLayout);
	}
}
