//import { signOutAction } from "@/app/actions";
//import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
//import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
//import { Button } from "@/ui/shadcn/button";
import { YnsLink } from "@/ui/yns-link";

const links = [
	{
		label: "Villa",
		href: "/product/villa",
	},
	{
		label: "Gallery",
		href: "/gallery",
	},
	{
		label: "Events",
		href: "/events",
	},
	{
		label: "T&C",
		href: "/terms",
	},
];

export const Nav = async () => {
	return (
		<header className="border-b py-4 bg-white sticky top-0">
			<div className="mx-auto flex flex-row  max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ">
				<YnsLink href="/">
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">The Manzil</SeoH1>
				</YnsLink>

				<div className="sm:mr-auto md:pl-2 flex flex-row  flex-wrap items-center gap-2">
					<NavMenu links={links} />

					{/* <CartSummaryNav />
				<form action="">
					<Button
					size="sm"
					formAction={signOutAction}
					>Sign Out</Button>
				</form> */}

					{/* <div className="flex items-center justify-start gap-x-6">
				</div>  */}
				</div>
			</div>
		</header>
	);
};
