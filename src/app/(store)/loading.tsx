import Image from "next/image";

export async function Buffertimer() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(null);
		}, 5000);
	});
}

export default function Loading() {
	Buffertimer();
	return (
		<div className="bg-primary">
			<h1 className="sr-only">Loading...</h1>
			<Image
				src="/photos/manzil2.webp"
				alt="Logo"
				width={500}
				height={500}
				className="w-full h-full p-0 m-0"
			/>
		</div>
	);
}
