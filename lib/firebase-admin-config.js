import { initializeApp, getApps, cert } from "firebase-admin/app";
var admin = require("firebase-admin");

var serviceAccount = require("../credentials.json");

const firebaseAdminConfig = {
	credential: admin.credential.cert(serviceAccount),
};

export function customInitApp() {
	if (getApps().length <= 0) {
		initializeApp(firebaseAdminConfig);
	}
}
