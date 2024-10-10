"use client";

import { deleteReservationAction, lockReservationAction } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Badge } from "@/ui/shadcn/badge";
import { Button } from "@/ui/shadcn/button";
import { Calendar } from "@/ui/shadcn/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/shadcn/card";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTitle,
	DrawerTrigger,
} from "@/ui/shadcn/drawer";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/shadcn/popover";
import { ScrollArea } from "@/ui/shadcn/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/shadcn/select";
import { SubmitButton } from "@/ui/submit-button";

import { addDays, eachDayOfInterval, format } from "date-fns";
import { CalendarIcon, EllipsisVertical } from "lucide-react";
import { useState } from "react";

interface ReservationProps {
	reservations: string[];
}

export default function ReservationSection(reservations: ReservationProps) {
	const dbresList = reservations;
	const [checkInDate, setCheckInDate] = useState<Date | undefined>();

	const resDates = dbresList.reservations?.map((res: any) => {
		return new Date(res.check_in);
	});

	const resNights = dbresList.reservations?.map((res: any) => {
		return res.nights;
	});

	const getFormatedDates = (resDates: any[], resNights: any[]) => {
		const formattedDates: Date[] = [];
		for (let i = 0; i < resDates.length; i++) {
			const intervals = eachDayOfInterval({
				start: new Date(resDates[i]),
				end: addDays(resDates[i], resNights[i]),
			});

			formattedDates.push(...intervals);
		}
		return formattedDates;
	};

	const formattedDates = getFormatedDates(resDates, resNights);

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="space-y-4">
				<h1 className="text-2xl font-bold">Reservations</h1>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<div className="flex flex-col gap-4">
							<CardTitle>Recent Reservations</CardTitle>
							<CardDescription>A list of recent reservations for your properties.</CardDescription>
						</div>
						<div>
							<Drawer>
								<DrawerTrigger asChild>
									<Button variant="outline">Add</Button>
								</DrawerTrigger>
								<DrawerContent className="max-w-xl p-0 mx-auto">
									<div className="flex flex-col gap-4 p-4 px-8 w-full">
										<DrawerTitle>Add Reservations</DrawerTitle>
										<DrawerDescription>Add reservations into database.</DrawerDescription>
										<form className="flex flex-col gap-4">
											<div className="grid grid-cols-2 gap-4">
												<div className="flex flex-col gap-2">
													<Label htmlFor="full_name">Guest Name</Label>
													<Input
														id="full_name"
														name="full_name"
														placeholder="Enter Guest Full Name"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<Label htmlFor="email">Email</Label>
													<Input id="email" name="email" placeholder="Enter Email" />
												</div>
											</div>
											<div className="grid grid-cols-2 gap-4">
												<div className="flex flex-col gap-2">
													<Label htmlFor="pax">No of Guest</Label>
													<Input
														type="number"
														placeholder="Enter number of pax"
														id="pax"
														name="pax"
														max={16}
													/>
												</div>
												<div className="flex flex-col gap-2">
													<Label htmlFor="checkin">Check In Date</Label>
													<Button
														variant={"outline"}
														disabled
														className={cn(
															"w-full justify-start text-left font-normal",
															!checkInDate && "text-muted-foreground",
														)}
													>
														<CalendarIcon className="mr-2 h-4 w-4" />
														{checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
													</Button>
												</div>
											</div>
											<Calendar
												mode="single"
												selected={checkInDate}
												onSelect={setCheckInDate}
												initialFocus
												numberOfMonths={1}
											/>

											<div className="grid grid-cols-2 gap-4">
												<div className="flex flex-col gap-2">
													<Label htmlFor="nights">No of Nights</Label>
													<Input
														type="number"
														id="nights"
														name="nights"
														placeholder="Enter number of nights"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<Label htmlFor="status">Status</Label>
													<Select name="status">
														<SelectTrigger className="">
															<SelectValue defaultValue="pending" placeholder="Select status" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="pending">Pending</SelectItem>
															<SelectItem value="confirmed">Confirmed</SelectItem>
															<SelectItem value="paid">Paid</SelectItem>
														</SelectContent>
													</Select>
												</div>
											</div>
											<Input
												id="user_id"
												name="user_id"
												value="aef4142e-452f-4bd0-9c42-803b5205b19e"
												className="sr-only"
											/>
											<Input
												id="checkin"
												name="checkin"
												value={checkInDate?.toISOString()}
												className="sr-only"
											/>
											<SubmitButton
												variant="default"
												formAction={lockReservationAction}
												pendingText="Submitting"
											>
												Add Reservation
											</SubmitButton>
										</form>
									</div>
								</DrawerContent>
							</Drawer>
						</div>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-fit">
							<table className="w-full">
								<thead>
									<tr>
										<th className="text-left font-semibold text-sm py-1">Guest</th>
										<th className="text-center font-semibold text-sm py-1">Pax</th>
										<th className="text-center font-semibold text-sm py-1">Check-in</th>
										<th className="text-center font-semibold text-sm py-1">Nights</th>
										<th className="text-center font-semibold text-sm py-1">Status</th>
										<th className="text-center font-semibold text-sm py-1">Actions</th>
									</tr>
								</thead>
								<tbody>
									{dbresList?.reservations?.map((res: any) => {
										return (
											<tr key={res.id} className="border-t text-sm">
												<td className="py-4">{res.full_name}</td>
												<td className="py-4 text-center">{res.no_of_guest}</td>
												<td className="py-4 text-center">
													{new Date(res.check_in).toLocaleDateString("en-US", {
														year: "numeric",
														month: "short",
														day: "numeric",
													})}
												</td>
												<td className="py-4 text-center">{res.nights}</td>
												<td className="uppercase py-4 text-center">
													<Badge variant={res.status === "paid" ? "outline" : "destructive"}>
														{res.status}
													</Badge>
												</td>
												<td className="py-4 text-center">
													<Popover>
														<PopoverTrigger>
															<EllipsisVertical className="h-4 w-4 text-primary" />
														</PopoverTrigger>
														<PopoverContent className="p-0 m-0 w-fit" side="bottom" align="end">
															<div className="flex flex-col gap-2 p-2">
																<form>
																	<Input id="id" name="id" value={res.id} className="sr-only" />
																	<Button
																		formAction={deleteReservationAction}
																		variant="destructive"
																	>
																		Delete
																	</Button>
																</form>
															</div>
														</PopoverContent>
													</Popover>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</ScrollArea>
					</CardContent>
				</Card>
			</div>
			<div>
				<Card>
					<CardHeader>
						<CardTitle>Calendar View</CardTitle>
						<CardDescription>Select a date to view reservations</CardDescription>
					</CardHeader>
					<CardContent className="">
						<Calendar
							mode="multiple"
							numberOfMonths={1}
							today={new Date()}
							selected={[...formattedDates]}
							modifiersClassNames={{
								selected: "text-accent bg-accent-foreground ",
							}}
						/>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
