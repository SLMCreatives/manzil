import Image from "next/image";

export default function Loading() {
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
