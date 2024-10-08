//import { signOutAction } from "@/app/actions";
//import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SeoH1 } from "@/ui/seo-h1";
import { Button } from "@/ui/shadcn/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPortal,
	SheetTrigger,
} from "@/ui/shadcn/sheet";
//import { Button } from "@/ui/shadcn/button";
import { YnsLink } from "@/ui/yns-link";
import { MenuIcon } from "lucide-react";
//import { SearchNav } from "@/ui/nav/search-nav";
import Image from "next/image";
import Link from "next/link";

const links = [
	{
		label: "Villa",
		href: "/",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Gallery",
		href: "/gallery",
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
				<YnsLink href="/" className="flex items-center ">
					<Image src="/logo.png" width={100} height={100} alt="Logo" className="h-8 w-auto" />
					<SeoH1 className=" whitespace-nowrap text-xl font-bold">The Manzil JB</SeoH1>
				</YnsLink>

				<div className=" lg:flex flex-row  flex-wrap items-center gap-2 hidden">
					<NavMenu links={links} />
					<YnsLink href="/booking">
						<Button variant="default">Book Now</Button>
					</YnsLink>

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
				<div className="flex items-center justify-start gap-x-6 lg:hidden">
					<Sheet>
						<SheetTrigger>
							<MenuIcon className="h-6 w-6 text-primary" />
						</SheetTrigger>
						<SheetPortal>
							<SheetClose />
							<SheetContent side="right" className="w-72">
								<SheetHeader className="">
									<SheetClose asChild>
										<YnsLink href="/" className="flex p-0 m-0 items-center justify-start">
											<Image
												src="/logo.png"
												width={100}
												height={100}
												alt="Logo"
												className="h-12 w-auto"
											/>
											<SeoH1 className=" whitespace-nowrap text-xl font-bold">The Manzil JB</SeoH1>
										</YnsLink>
									</SheetClose>
								</SheetHeader>
								<SheetDescription className="flex flex-col gap-4 py-10 text-lg ">
									{links.map((link) => (
										<SheetClose key={link.label} asChild>
											<YnsLink
												key={link.label}
												href={link.href}
												className="underline-offset-4 hover:underline"
											>
												{link.label}
											</YnsLink>
										</SheetClose>
									))}
									<SheetClose asChild>
										<YnsLink href="/booking">
											<Button variant="link" className="p-0 text-lg">
												Book Now
											</Button>
										</YnsLink>
									</SheetClose>
								</SheetDescription>
								<SheetFooter className="absolute bottom-4 flex gap-2 flex-row text-sm text-foreground ">
									<p>&copy; 2024</p> |{" "}
									<Link href="/" className="hover:underline">
										The Manzil Janda Baik
									</Link>
								</SheetFooter>
							</SheetContent>
						</SheetPortal>
					</Sheet>
				</div>
			</div>
		</header>
	);
};
