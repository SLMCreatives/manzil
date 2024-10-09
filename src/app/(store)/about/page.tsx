import { Card, CardContent, CardHeader } from "@/ui/shadcn/card";
import { BookOpenText } from "lucide-react";
import Image from "next/image";

const features = [
	{
		name: "Entire Private Villa",
		src: "/features/room-key.svg",
	},
	{
		name: "4 Bed & 4 Bath",
		src: "/features/double-bed.svg",
	},
	{
		name: "Sleeps 12 - 16 People",
		src: "/features/pillow.svg",
	},
	{
		name: "Private Indoor Pool",
		src: "/features/swimming.svg",
	},
	{
		name: "BBQ Services & Full Kitchen",
		src: "/features/cutlery.svg",
	},
	{
		name: "Free Wifi, Netflix & Games Room",
		src: "/features/wifi-router.svg",
	},
];

export default function AboutPage() {
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<BookOpenText className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">About The Manzil JB</h3>
			</section>
			<section className="py-6 rounded-xl flex flex-col gap-2">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center p-6">
					<Image
						width={200}
						height={200}
						src="/unit/manzil4.webp"
						alt="The Manzil"
						className="w-full lg:w-96 aspect-video rounded-lg object-cover float-left my-2 mr-4"
					/>
					<p className="text-primary leading-8">
						In the Arabic world, Manzil is a house or inn used as a place of rest, especially by
						travelers. Aptly, <q>The Manzil</q> was thoughtfully and lovingly designed as a place of
						rest and relaxation for families and groups looking for a gateway within the pristine
						rainforest of Janda Baik.
					</p>
				</div>

				<div className="bg-accent-foreground p-6 rounded-xl flex flex-col gap-4 items-center justify-center">
					<p className="text-primary leading-8">
						Family owned and operated, The Manzil is inspired and built in an eclectic Moorish
						style, reflected in the multitude of arches, decorative tile work, terracotta tiles and
						use of natural wood; lending earthy tones that enhance the coziness of the whole space.
					</p>
					<p className="text-primary leading-8">
						Reflecting traditional architectural norms, the villa at once creates an atmosphere of
						warmth and hospitality, as well as spaciousness and generosity. A clear hierarchy of
						form and clearly delineated spaces ensure ultimate privacy, while still infusing the
						space with the celebrated elements of Arabic culture.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center p-6">
					<div className="grid grid-cols-2 gap-6">
						<Image
							width={200}
							height={200}
							src="/unit/manzil11.webp"
							alt="The Manzil"
							className="w-full aspect-auto rounded-lg object-cover"
						/>
						<Image
							width={200}
							height={200}
							src="/unit/manzil15.webp"
							alt="The Manzil"
							className="w-full aspect-auto rounded-lg object-cover"
						/>
					</div>
					<p className="text-primary leading-8 lg:col-span-2">
						The warmth and cozy interior within the Villa is enhanced with the external surroundings
						of the pristine tropical rainforest that envelopes the villa. In the morning, expect to
						be awakened by the crow of the rooster, greeted by mist at the balcony and caressed by a
						gentle breeze; and then later go to sleep with a clear view of the moon and stars in the
						sky to bid you goodnight.
					</p>

					<p className="text-primary leading-8">
						The Manzil, is located 45 minutes / 45km from the city of Kuala Lumpur and promises a
						reviving escape from the hustle and bustle of city life.
					</p>
				</div>
			</section>
			<section className=" my-8">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
					{features.map((feature) => (
						<Card key={feature.name} className="flex flex-col items-center justify-start">
							<CardHeader>
								<Image
									src={feature.src}
									alt={feature.name}
									width={100}
									height={100}
									className="max-h-16 max-w-16 bg-accent-foreground rounded-full p-3"
								/>
							</CardHeader>
							<CardContent>
								<p className="font-bold text-center text-xl text-primary">{feature.name}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
