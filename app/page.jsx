"use client";
import { auth } from "@/lib/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	if (!localStorage.getItem("userData")) return null;

	const { email, uid } = JSON.parse(localStorage.getItem("userData"));

	const handlerSignOut = async () => {
		//Sign out with the Firebase client
		await signOut(auth);

		//Clear the cookies in the server
		const response = await fetch("http://localhost:3000/api/signOut", {
			method: "POST",
		});

		if (response.status === 200) {
			router.push("/login");
			localStorage.removeItem("userData");
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1>WELCOME! {email} </h1>
			<span>YOUR UID: {uid}</span>
			<button className="mt-6 border-2 p-2 rounded-sm" onClick={handlerSignOut}>
				SignOut
			</button>
		</main>
	);
}
