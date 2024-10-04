import { publicUrl } from "@/env.mjs";

//import { ProductList } from "@/ui/products/product-list";
import { Button } from "@/ui/shadcn/button";
import { Card, CardContent, CardHeader } from "@/ui/shadcn/card";
import { YnsLink } from "@/ui/yns-link";
//import * as Commerce from "commerce-kit";
import { ArrowRightCircle, Calendar, Images } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

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

export default async function Home() {
	//const products = await Commerce.productBrowse({ first: 6 });
	//const t = await getTranslations("/");

	return (
		<main>
			<section className="w-full hidden lg:block rounded-xl relative mb-8">
				<Image
					alt="The Manzil Indoor Playground"
					loading="eager"
					priority={true}
					className="rounded-xl w-full h-full brightness-50"
					height={1000}
					width={1000}
					src="/photos/manzil2.webp"
				/>

				<div className="absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3 backdrop-opacity-40 flex flex-col gap-4 ">
					<h2 className="text-balance text-3xl font-bold lg:font-normal tracking-tight md:text-9xl text-primary-foreground font-tangerine">
						Enter an oasis of <span className="text-accent-foreground font-bold">calm</span> and{" "}
						<span className="text-accent-foreground font-bold">tranquility...</span>
					</h2>
					<p className="text-pretty text-white text-2xl font-sans">
						{" "}
						A Moorish-styled holiday villa sited within the pristine tropical rainforest of Janda
						Baik, Pahang.
					</p>
					<Button
						variant="link"
						className="flex flex-row w-fit items-center gap-6 px-0 justify-between text-accent-foreground text-xl"
						size="lg"
					>
						Book Now
						<ArrowRightCircle className="h-6 w-6 stroke-2" />
					</Button>
				</div>
			</section>

			<section className="flex lg:hidden bg-accent-foreground p-6 lg:p-0 rounded-xl">
				<div className=" w-full grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
					<div className="lg:max-w-md w-full flex flex-col space-y-4 ">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
							Enter an oasis of calm and tranquility
						</h2>
						<p className="text-pretty text-neutral-600">
							{" "}
							A Moorish-styled holiday villa situated within the pristine tropical rainforest of
							Janda Baik, Pahang, Malaysia.
						</p>
						<YnsLink
							className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
							href="/product/villa"
						>
							Book Now
						</YnsLink>
					</div>
					<Image
						alt="The Manzil Indoor Playground"
						loading="eager"
						priority={true}
						className="rounded-xl p-0 m-0 w-full"
						height={450}
						width={450}
						src="/photos/manzil2.webp"
						style={{
							objectFit: "cover",
						}}
						//sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 620px"
					/>
				</div>
			</section>
			<section className="lg:py-10 pt-10 flex flex-wrap gap-8">
				<div className="grid grid-cols-1 grid-cols-reverse  lg:grid-cols-3 gap-10 items-start justify-center lg:p-0 px-0">
					<div className="flex flex-col gap-4 lg:px-0 px-4">
						<p className="text-pretty text-3xl lg:text-5xl font-tangerine">
							Inspired by the Arabic world, the villa features intricate archways, decorative
							tilework, and natural wood elements that create a warm and inviting atmosphere.
						</p>
						<p className="text-pretty text-md lg:text-lg text-muted-foreground font-sans">
							The spacious interior provides ample room for families and groups, while the outdoor
							amenities, including a private swimming pool and lush gardens, offer opportunities for
							relaxation and recreation.
						</p>
						<p className="text-pretty text-md lg:text-lg text-muted-foreground font-sans">
							Located just 45 minutes from Kuala Lumpur, The Manzil is the perfect destination for
							those seeking a peaceful retreat. Whether you're looking to unwind with loved ones,
							explore the surrounding nature, or simply escape the stresses of everyday life, this
							villa provides the ideal setting for a truly memorable getaway.
						</p>
						<div className="flex flex-row gap-4">
							<Link href="/product/villa">
								<Button
									variant="default"
									className="flex flex-row w-fit gap-2 items-center justify-between text-accent-foreground"
								>
									<Calendar className="max-h-4 max-w-4 " /> Reserve Now{" "}
								</Button>
							</Link>
							<Link href="/gallery">
								<Button
									variant="link"
									className="flex flex-row w-fit gap-2 items-center justify-between text-primary hover:text-accent-foreground"
								>
									<Images className="max-h-4 max-w-4 " /> View Gallery{" "}
								</Button>
							</Link>
						</div>
					</div>
					<Image
						src="/unit/manzil11.webp"
						alt="The Manzil"
						className="min-w-42 lg:w-full h-full object-cover rounded-xl"
						width={500}
						height={500}
						loading="lazy"
					/>
					<Image
						src="/unit/manzil3.webp"
						alt="The Manzil"
						className="min-w-42 lg:w-full h-full object-cover rounded-xl "
						width={500}
						height={500}
						loading="lazy"
					/>
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

			{/* <ProductList products={products} /> */}
		</main>
	);
}
