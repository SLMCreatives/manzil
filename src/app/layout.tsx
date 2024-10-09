import "@/app/globals.css";
import { env, publicUrl } from "@/env.mjs";
import { Toaster } from "@/ui/shadcn/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Outfit, Tangerine } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});

const tangerine = Tangerine({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-tangerine",
});

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("Global.metadata");
	return {
		title: t("title"),
		description: t("description"),
		metadataBase: new URL(publicUrl),
	};
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} className={`${outfit.variable} ${tangerine.variable}`}>
			<body className="flex min-h-full flex-col">
				<NextIntlClientProvider messages={messages}>
					<div className="flex min-h-full flex-1 flex-col" vaul-drawer-wrapper="">
						{children}
					</div>
					<Toaster />
				</NextIntlClientProvider>
				{env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
					<Script
						async
						src="/stats/script.js"
						data-host-url={publicUrl + "/stats"}
						data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
					/>
				)}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
