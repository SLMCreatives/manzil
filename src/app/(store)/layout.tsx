import Loading from "@/app/(store)/loading";
import "@/app/globals.css";
//import { createClient } from "@/app/utils/supabase/server";
import { Footer } from "@/ui/footer/footer";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/json-ld";
import { Nav } from "@/ui/nav/nav";
import { TooltipProvider } from "@/ui/shadcn/tooltip";
import * as Commerce from "commerce-kit";
//import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function StoreLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	/* const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
   */
	const accountResult = await Commerce.accountGet();
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<>
			<Nav />
			<Suspense fallback={<Loading />}>
				<TooltipProvider>
					<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8">
						{children}
						{modal}
					</main>
					<Footer />
				</TooltipProvider>
			</Suspense>
			<JsonLd
				jsonLd={accountToWebsiteJsonLd({
					account: accountResult?.account,
					logoUrl: logoLink?.url,
				})}
			/>
		</>
	);
}
