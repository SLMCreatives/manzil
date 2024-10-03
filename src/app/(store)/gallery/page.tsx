import { Images } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
	const manzils = [3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16, 17];
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<Images className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">The Manzil Gallery</h3>
			</section>
			<section className="py-6 rounded-xl">
				<div className="grid grid-cols-3 gap-4 ">
					{manzils.map((item) => (
						<Image
							key={item}
							width={200}
							height={200}
							loading="lazy"
							src={`/unit/manzil${item}.webp`}
							alt="The Manzil"
							className="min-w-full min-h-full aspect-square rounded-sm object-cover"
						/>
					))}
				</div>
			</section>
		</main>
	);
}
