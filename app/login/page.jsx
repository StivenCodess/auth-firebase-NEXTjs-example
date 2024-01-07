"use client";

import {
	auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "../../lib/firebase-config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
	const [dataForm, setDataForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const router = useRouter();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setDataForm((prevData) => ({ ...prevData, [name]: value }));
	};

	async function signIn() {
		const { email, password } = dataForm;

		try {
			const userCredentials = await signInWithEmailAndPassword(auth, email, password);

			fetch("/api/login", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${await userCredentials.user.getIdToken()}`,
				},
			}).then((response) => {
				if (response.status === 200) {
					router.push("/");
					const userData = {
						email: userCredentials.user.email,
						uid: userCredentials.user.uid,
					};
					localStorage.setItem("userData", JSON.stringify(userData));
				}
			});
		} catch (error) {
			setError(error.code);
		}
	}

	async function signUp() {
		const { email, password } = dataForm;

		try {
			const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

			fetch("/api/login", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${await userCredentials.user.getIdToken()}`,
				},
			}).then((response) => {
				if (response.status === 200) {
					router.push("/");
					const userData = {
						email: userCredentials.user.email,
						uid: userCredentials.user.uid,
					};
					localStorage.setItem("userData", JSON.stringify(userData));
				}
			});
		} catch (error) {
			setError(error.code);
		}
	}

	return (
		<>
			<form action="" className="flex flex-col gap-3 text-black">
				<input
					className="p-2"
					type="text"
					name="email"
					placeholder="Email"
					onChange={(e) => handleInputChange(e)}
					value={dataForm.email}
				/>
				<input
					className="p-2"
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) => handleInputChange(e)}
					value={dataForm.password}
				/>
				<button type="button" className=" border-2 p-3 text-white" onClick={signIn}>
					Sign In
				</button>
				<button type="button" className=" border-2 p-3 text-white" onClick={signUp}>
					Sign Up
				</button>
			</form>
			{error ? (
				<span className="absolute bottom-0 right-0 m-5 bg-red-500 p-4 rounded-md">
					{error}
				</span>
			) : null}
		</>
	);
}
