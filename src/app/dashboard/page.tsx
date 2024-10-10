"use client";

import { Bell, CircleUser, Home, LineChart, Menu, Search, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";

//import { Badge } from "@/ui/shadcn/badge"
import { Button } from "@/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/shadcn/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/ui/shadcn/dropdown-menu";
import { Input } from "@/ui/shadcn/input";
import { ScrollArea } from "@/ui/shadcn/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/shadcn/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/shadcn/table";
import { SubmitButton } from "@/ui/submit-button";
import Image from "next/image";
//import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useState } from "react";

const nav = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: Home,
	},
	{
		label: "Reservations",
		href: "/dashboard/reservations",
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

const customers = [
	{
		id: "CUST001",
		name: "Alice Johnson",
		email: "alice@example.com",
		totalOrders: 15,
		totalSpent: "$1,200",
	},
	{
		id: "CUST002",
		name: "Bob Smith",
		email: "bob@example.com",
		totalOrders: 8,
		totalSpent: "$750",
	},
	{
		id: "CUST003",
		name: "Charlie Brown",
		email: "charlie@example.com",
		totalOrders: 22,
		totalSpent: "$2,100",
	},
	{
		id: "CUST004",
		name: "Diana Prince",
		email: "diana@example.com",
		totalOrders: 5,
		totalSpent: "$500",
	},
	{
		id: "CUST005",
		name: "Ethan Hunt",
		email: "ethan@example.com",
		totalOrders: 12,
		totalSpent: "$980",
	},
];

const data = [
	{
		name: "Jan",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Feb",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Mar",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Apr",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "May",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jun",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jul",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Aug",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Sep",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Oct",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Nov",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Dec",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
];

export default function Dashboard() {
	const [navselect, setNavselect] = useState("Dashboard");
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link href="/" className="flex items-center gap-2 font-semibold">
							<Image
								width={50}
								height={50}
								src="/logo.png"
								alt="The Manzil JB"
								className="h-6 w-6"
							/>
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
								<SubmitButton
									variant={item.label === navselect ? "default" : "ghost"}
									key={item.label}
									//href={item.href}
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									aria-current={item.label === navselect ? navselect : undefined}
									onClick={e}
								>
									<item.icon className="h-4 w-4" />
									{item.label}
								</SubmitButton>
							))}
						</nav>
					</div>
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
						<SheetContent side="left" className="flex flex-col">
							<nav className="grid gap-2 text-lg font-medium">
								<Image
									width={50}
									height={50}
									src="/logo.png"
									alt="The Manzil JB"
									className="h-6 w-6"
								/>
								<span className="sr-only">The Manzil JB</span>
								{nav.map((item) => (
									<Button
										key={item.label}
										//href="#"
										className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
									>
										<item.icon className="h-5 w-5" />
										{item.label}
									</Button>
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
				{navselect === "Dashboard" && overview()}
				{navselect === "Reservations" && reservation()}
				{navselect === "Customers" && customer()}
				{navselect === "Analytics" && analytics()}
			</div>
		</div>
	);
}
function overview() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<p className="text-lg font-semibold md:text-2xl">Overview</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$45,231.89</div>
						<p className="text-xs text-muted-foreground">+20.1% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Bookings</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+2350</div>
						<p className="text-xs text-muted-foreground">+180.1% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Listings</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<rect width="20" height="14" x="2" y="5" rx="2" />
							<path d="M2 10h20" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">54</div>
						<p className="text-xs text-muted-foreground">+19% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">88%</div>
						<p className="text-xs text-muted-foreground">+5.4% from last month</p>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}

function reservation() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="space-y-4">
				<h1 className="text-2xl font-bold">Reservations</h1>
				<Card>
					<CardHeader>
						<CardTitle>Recent Reservations</CardTitle>
						<CardDescription>A list of recent reservations for your properties.</CardDescription>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-fit">
							<table className="w-full">
								<thead>
									<tr>
										<th className="text-left font-medium">Guest</th>
										<th className="text-left font-medium">Property</th>
										<th className="text-left font-medium">Check-in</th>
										<th className="text-left font-medium">Check-out</th>
										<th className="text-left font-medium">Status</th>
									</tr>
								</thead>
								<tbody>
									{[...Array(3)].map((_, i) => (
										<tr key={i} className="border-t">
											<td className="py-2">John Doe</td>
											<td className="py-2">Villa Serenity</td>
											<td className="py-2">2023-06-15</td>
											<td className="py-2">2023-06-22</td>
											<td className="py-2">
												<span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
													Confirmed
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</ScrollArea>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}

function customer() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
			</div>
			<div className="border shadow-sm rounded-lg">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Customer ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Total Orders</TableHead>
							<TableHead>Total Spent</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{customers.map((customer) => (
							<TableRow key={customer.id}>
								<TableCell className="font-medium">{customer.id}</TableCell>
								<TableCell>{customer.name}</TableCell>
								<TableCell>{customer.email}</TableCell>
								<TableCell>{customer.totalOrders}</TableCell>
								<TableCell>{customer.totalSpent}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</main>
	);
}

function analytics() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<div className="flex flex-col gap-4">
				<p className="text-lg font-semibold md:text-2xl">Analytics</p>
				<p className="text-sm text-muted-foreground">Coming Soon</p>
			</div>
		</main>
	);
}
