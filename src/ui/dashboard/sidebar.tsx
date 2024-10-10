"use client";

import { Button } from "@/ui/shadcn/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/ui/shadcn/dropdown-menu";
import { Input } from "@/ui/shadcn/input";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui/shadcn/sheet";
import { Bell, CircleUser, LineChart, Menu, Search, ShoppingCart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
	{
		label: "Reservations",
		icon: ShoppingCart,
	},
	{
		label: "Customers",
		icon: Users,
	},
	{
		label: "Analytics",
		icon: LineChart,
	},
];

export default function Sidebar() {
	const [navselect, setNavselect] = useState("Reservations");
	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
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
					<nav className="grid items-start px-2 text-sm font-medium gap-4 lg:px-4">
						{nav.map((item) => (
							<Button
								variant={item.label === navselect ? "default" : "ghost"}
								key={item.label}
								className="flex items-center justify-between rounded-lg px-3 py-2"
								onClick={() => setNavselect(item.label)}
							>
								{item.label}
								<item.icon className="h-4 w-4" />
							</Button>
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
										<Button
											key={item.label}
											className="mx-[-0.65rem] flex items-cente justify-between gap-4 rounded-xl px-3 py-2"
											variant={item.label === navselect ? "default" : "ghost"}
											onClick={() => setNavselect(item.label)}
										>
											{item.label}
											<item.icon className="h-5 w-5" />
										</Button>
									</SheetClose>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<div className="w-full flex-1">
						<form>
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search products..."
									className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
								/>
							</div>
						</form>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
			</div>
		</div>
	);
}
