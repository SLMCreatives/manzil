import { publicUrl } from "@/env.mjs";
import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded bg-neutral-100 py-8 sm:py-12">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
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
							href={t("hero.link")}
						>
							Book Now{" "}
						</YnsLink>
					</div>
					<Image
						alt="The Manzil Indoor Playground"
						loading="eager"
						priority={true}
						className="rounded"
						height={450}
						width={450}
						src="/photos/manzil2.webp"
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/>
				</div>
			</section>

			{/* <ProductList products={products} />
			 */}
			{/* 
			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						{ categorySlug: "accessories", src: AccessoriesImage },
						{ categorySlug: "apparel", src: ApparelImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section> */}
		</main>
	);
}
