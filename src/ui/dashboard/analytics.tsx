import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/shadcn/table";
import { addDays, getMonth } from "date-fns";
import { format } from "date-fns";
import { Calendar, DollarSign, Moon, UserCheck } from "lucide-react";

interface AnalyticsProps {
	analytics: string[];
}

export default function AnalyticsSection(analytics: AnalyticsProps) {
	const confirmedBookings = analytics.analytics?.filter(
		(customer: any) => customer.status === "confirmed",
	);
	const pendingBookings = analytics.analytics?.filter(
		(customer: any) => customer.status === "pending",
	);
	const totalBookings = confirmedBookings.length;
	const nights = confirmedBookings.map((customer: any) => customer.nights);
	const totalNights = nights
		.map((nights: number) => nights)
		.reduce((a: number, b: number) => a + b, 0);
	const totalRev = totalNights * 2000;
	//const daysInThisMonth = getDaysInMonth(new Date());

	const thisMonthBookings = confirmedBookings.filter((customer: any) => {
		const checkIn = new Date(customer.check_in);
		const checkInMonth = getMonth(checkIn);
		return checkInMonth === getMonth(new Date());
	}).length;

	const lastMonthsBookings = confirmedBookings.filter((customer: any) => {
		const checkIn = new Date(customer.check_in);
		const checkInMonth = getMonth(checkIn);
		return checkInMonth === getMonth(addDays(new Date(), -30));
	}).length;

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 justify-start">
			<p className="text-xl font-bold">Overview</p>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader>
						<CardTitle className="font-normal flex flex-row gap-2">
							<UserCheck className="w-4 h-4" />
							Total Bookings
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-end">
							<p className="text-2xl font-bold">{totalBookings} bookings</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="font-normal flex flex-row gap-2">
							<Calendar className="w-4 h-4" />
							{format(new Date(), "MMM")} Bookings
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-end">
							<p className="text-2xl font-bold">
								{" "}
								<span className="text-sm font-normal text-muted-foreground ">
									({lastMonthsBookings})
								</span>{" "}
								{thisMonthBookings} bookings
							</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="font-normal flex flex-row gap-2">
							<Moon className="w-4 h-4" />
							Total Nights{" "}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-end">
							<p className="text-2xl font-bold">{totalNights} nights</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="font-normal flex flex-row gap-2">
							<DollarSign className="w-4 h-4" />
							Total Revenue
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-end">
							<p className="text-2xl font-bold">RM {totalRev}</p>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold">Confirmed Bookings</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-fit">ID</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead className="">Check In</TableHead>
								<TableHead className="text-center">Nights</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{confirmedBookings.map((customer: any) => (
								<TableRow key={customer.id}>
									<TableCell className="text-xs py-4">{customer.id}</TableCell>
									<TableCell className="font-bold text-md">{customer.full_name}</TableCell>
									<TableCell className="text-xs">{customer.email}</TableCell>
									<TableCell className="">{format(customer.check_in, "dd MMM yyyy")}</TableCell>
									<TableCell className="text-center">{customer.nights}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold">Pending Bookings</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-fit">ID</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Check In</TableHead>
								<TableHead>Nights</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{pendingBookings.length === 0 && (
								<p className="py-4 text-muted-foreground italic">No pending bookings</p>
							)}
							{pendingBookings.map((customer: any) => (
								<TableRow key={customer.id}>
									<TableCell className="text-xs py-4">{customer.id}</TableCell>
									<TableCell className="font-bold text-md">{customer.full_name}</TableCell>
									<TableCell className="text-xs">{customer.email}</TableCell>
									<TableCell className="">{customer.check_in}</TableCell>
									<TableCell className="text-center">{customer.nights}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</main>
	);
}
