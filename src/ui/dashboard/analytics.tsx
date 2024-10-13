import BarChartM from "@/ui/dashboard/BarChartM";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { addDays, format, getMonth } from "date-fns";
import { Calendar, DollarSign, Moon, UserCheck } from "lucide-react";
import React from "react";

interface AnalyticsProps {
	analytics: string[];
}

export default function AnalyticsSection(analytics: AnalyticsProps) {
	const confirmedBookings = analytics.analytics?.filter(
		(customer: any) => customer.status === "confirmed",
	);
	//const pendingBookings = analytics.analytics?.filter((customer: any) => customer.status === "pending");
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

			<BarChartM analytics={analytics.analytics} />
		</main>
	);
}
