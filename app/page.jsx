"use client";
import { auth } from "@/lib/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	const handlerSignOut = async () => {
		//Sign out with the Firebase client
		await signOut(auth);

		//Clear the cookies in the server
		const response = await fetch("http://localhost:3000/api/signOut", {
			method: "POST",
		});

		if (response.status === 200) {
			router.push("/login");
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1>HOME</h1>
			<button onClick={handlerSignOut}>SignOut</button>
		</main>
	);
}
