"use client";

import { Button } from "@/ui/shadcn/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui/shadcn/sheet";
import { Bell, LineChart, Menu, ShoppingCart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
	{
		label: "Reservations",
		href: "/dashboard",
		icon: ShoppingCart,
	},
	{
		label: "Customers",
		href: "/dashboard/customers",
		icon: Users,
	},
	{
		label: "Analytics",
		href: "/dashboard/analytics",
		icon: LineChart,
	},
];

export default function Sidebar() {
	const [navselect, setNavselect] = useState("Reservations");
	return (
		<div className="border-r bg-muted/40">
			<div className="hidden md:flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						<Image width={50} height={50} src="/logo.png" alt="The Manzil JB" className="h-6 w-6" />
						<span className="">The Manzil JB</span>
					</Link>
					<Button variant="outline" size="icon" className="ml-auto h-8 w-8">
						<Bell className="h-4 w-4" />
						<span className="sr-only">Toggle notifications</span>
					</Button>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-2 text-sm font-medium gap-4 w-full lg:px-4">
						{nav.map((item) => (
							<Link href={item.href} key={item.label}>
								<Button
									variant={item.label === navselect ? "default" : "ghost"}
									key={item.label}
									className="w-full justify-between"
									onClick={() => setNavselect(item.label)}
								>
									{item.label}
									<item.icon className="h-4 w-4" />
								</Button>
							</Link>
						))}
					</nav>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="shrink-0 md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col w-72 gap-4">
							<nav className="grid text-lg font-medium gap-4">
								<Image
									width={50}
									height={50}
									src="/logo.png"
									alt="The Manzil JB"
									className="h-6 w-6"
								/>
								<span className="sr-only">The Manzil JB</span>
								{nav.map((item) => (
									<SheetClose asChild>
										<Link href={item.href} key={item.label}>
											<Button
												key={item.label}
												className="w-full flex items-start justify-between gap-4 rounded-lg py-2"
												variant={item.label === navselect ? "default" : "ghost"}
												onClick={() => setNavselect(item.label)}
											>
												{item.label}
												<item.icon className="h-5 w-5" />
											</Button>
										</Link>
									</SheetClose>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</header>
			</div>
		</div>
	);
}
