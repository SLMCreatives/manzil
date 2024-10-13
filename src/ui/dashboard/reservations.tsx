"use client";

import {
	confirmedStatus,
	deleteReservationAction,
	lockReservationAction,
	pendingStatus,
} from "@/app/actions";
import { Badge } from "@/ui/shadcn/badge";
import { Button } from "@/ui/shadcn/button";
import { Calendar } from "@/ui/shadcn/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/shadcn/card";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
} from "@/ui/shadcn/drawer";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/shadcn/popover";
import { ScrollArea } from "@/ui/shadcn/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/shadcn/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui/shadcn/tooltip";
import { SubmitButton } from "@/ui/submit-button";
import { PopoverClose } from "@radix-ui/react-popover";

import { addDays, eachDayOfInterval, format } from "date-fns";
import { Plus, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ReservationProps {
	reservations: string[];
}

export default function ReservationSection(reservations: ReservationProps) {
	const dbresList = reservations;

	const recentRes = dbresList.reservations?.slice(0, 5);
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
				end: addDays(resDates[i], resNights[i] > 1 ? resNights[i] - 1 : 0),
			});

			formattedDates.push(...intervals);
		}
		return formattedDates;
	};

	const formattedDates = getFormatedDates(resDates, resNights);
	const [openDrawer, setDrawerOpen] = useState(false);

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="space-y-4">
				<div className="grid grid-cols-1 lg:flex lg:flex-col gap-4">
					<div className="w-full lg:col-span-2">
						<Card className="lg:border-none lg:shadow-none lg:bg-transparent">
							<CardHeader>
								<CardTitle className="text-xl">The Manzil JB Reservations</CardTitle>
								<CardDescription></CardDescription>
							</CardHeader>
							<CardContent>
								<Calendar
									mode="multiple"
									numberOfMonths={1}
									today={new Date()}
									selected={[...formattedDates]}
									className="w-full lg:w-auto block md:hidden"
									modifiersClassNames={{
										selected: "text-red-500 bg-red-100 ",
										outside: "text-gray-400",
										today: "ring-red-200 ring-1 text-primary",
										overlapping: "ring-yellow-200 ring-2 text-red-500",
									}}
									onSelect={(e) => setDrawerOpen(true)}
								/>
								<Calendar
									mode="multiple"
									numberOfMonths={4}
									today={new Date()}
									selected={[...formattedDates]}
									className="md:flex hidden w-full overflow-y-auto"
									modifiersClassNames={{
										selected: "text-red-500 bg-red-100 ",
										outside: "text-gray-400",
										today: "ring-red-200 ring-1 text-primary",
										overlapping: "ring-yellow-200 ring-2 text-red-500",
									}}
									//onDayClick={() => setDrawerOpen(true)}
								/>
							</CardContent>
						</Card>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
						<Card className="w-full lg:col-span-3">
							<CardHeader className="flex flex-row items-end justify-between">
								<div className="flex flex-col gap-2">
									<CardTitle className="text-xl">Recent Reservations</CardTitle>
									<CardDescription>
										A list of recent reservations for your properties.
									</CardDescription>
								</div>
								<div>
									<Drawer open={openDrawer} onOpenChange={setDrawerOpen}>
										<DrawerTrigger>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Button variant="ghost" size="icon">
															<Plus className="h-4 w-4" />
														</Button>
													</TooltipTrigger>
													<TooltipContent side="top" align="center">
														Add Reservation
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</DrawerTrigger>
										<DrawerPortal>
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
																	placeholder="Guest Name"
																	aria-atomic
																	required
																/>
															</div>
															<div className="flex flex-col gap-2">
																<Label htmlFor="email">Email</Label>
																<Input id="email" name="email" placeholder="Email" required />
															</div>
														</div>
														<div className="grid grid-cols-2 gap-4">
															<div className="flex flex-col gap-2">
																<Label htmlFor="pax">No of Guest</Label>
																<Input
																	type="number"
																	id="pax"
																	name="pax"
																	max={16}
																	defaultValue={10}
																/>
															</div>

															<div className="flex flex-col gap-2">
																<Label htmlFor="status">Payment Status</Label>
																<Select name="status">
																	<SelectTrigger className="">
																		<SelectValue
																			defaultValue="pending"
																			placeholder="Select Status"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectItem value="pending">Pending</SelectItem>
																		<SelectItem value="confirmed">Confirmed</SelectItem>
																	</SelectContent>
																</Select>
															</div>
														</div>
														<Calendar
															mode="single"
															selected={checkInDate}
															onSelect={setCheckInDate}
															disabled={formattedDates}
															initialFocus
															className="lg:hidden block"
															numberOfMonths={1}
															modifiersClassNames={{
																disabled: "text-red-500 bg-red-100",
															}}
														/>
														<Calendar
															mode="single"
															selected={checkInDate}
															onSelect={setCheckInDate}
															disabled={formattedDates}
															initialFocus
															className="hidden lg:flex flex-row justify-start items-center mx-auto w-full"
															numberOfMonths={2}
															modifiersClassNames={{
																disabled: "text-red-500 bg-red-100",
																row: "justify-between",
															}}
														/>
														<div className="grid grid-cols-2 gap-4">
															<div className="flex flex-col gap-2">
																<Label htmlFor="date-picker">Check In Date</Label>
																<Input
																	id="date-picker"
																	name="date-picker"
																	type="date"
																	required
																	disabled
																	value={checkInDate?.toISOString().split("T")[0]}
																/>
															</div>
															<div className="flex flex-col gap-2">
																<Label htmlFor="nights">No of Nights</Label>
																<Input
																	type="number"
																	id="nights"
																	name="nights"
																	defaultValue={1}
																	max={10}
																/>
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
															value={
																checkInDate?.toLocaleDateString("en-MY", {
																	year: "numeric",
																	month: "short",
																	day: "numeric",
																}) || ""
															}
															className="sr-only"
														/>
														<SubmitButton
															variant="default"
															formAction={lockReservationAction}
															pendingText="Submitting"
															onClick={() => setDrawerOpen(false)}
														>
															Add Reservation
														</SubmitButton>
													</form>
												</div>
											</DrawerContent>
										</DrawerPortal>
									</Drawer>
								</div>
							</CardHeader>
							<CardContent>
								<ScrollArea className="h-fit">
									<table className="w-full">
										<thead>
											<tr>
												<th className="text-left font-semibold text-sm py-1">Guest</th>
												<th className="text-center font-semibold text-sm py-1 hidden lg:table-cell">
													Pax
												</th>
												<th className="text-center font-semibold text-sm py-1">Check In</th>
												<th className="text-center font-semibold text-sm py-1">Nights</th>
												<th className="text-center font-semibold text-sm py-1">Status</th>
												<th className="text-center font-semibold text-sm py-1">Delete</th>
											</tr>
										</thead>
										<tbody>
											{recentRes?.map((res: any) => {
												return (
													<tr key={res.id} className="border-t text-sm">
														<td className="py-4 font-semibold">{res.full_name}</td>
														<td className="py-4 text-center hidden lg:table-cell">
															{res.no_of_guest}
														</td>
														<td className="py-4 text-center">{format(res.check_in, "PP")}</td>
														<td className="py-4 text-center">{res.nights}</td>
														<td className="uppercase py-4 text-center">
															<Popover>
																<PopoverTrigger>
																	<Badge
																		variant={res.status === "confirmed" ? "default" : "destructive"}
																		className="capitalize"
																	>
																		{res.status}
																	</Badge>
																</PopoverTrigger>
																<PopoverContent className="p-2 m-0 w-fit" align="center">
																	<form className="flex flex-col gap-2">
																		<Input id="id" name="id" value={res.id} className="sr-only" />
																		<PopoverClose>
																			<Button
																				variant="destructive"
																				size="sm"
																				className="w-full"
																				formAction={pendingStatus}
																			>
																				Pending Payment
																			</Button>
																		</PopoverClose>
																		<PopoverClose>
																			<Button
																				variant="default"
																				size="sm"
																				className="w-full"
																				formAction={confirmedStatus}
																			>
																				Confirm Payment
																			</Button>
																		</PopoverClose>
																	</form>
																</PopoverContent>
															</Popover>
														</td>
														<td className="py-4 text-center">
															<Popover>
																<PopoverTrigger>
																	<Trash className="h-4 w-4" />
																</PopoverTrigger>
																<PopoverContent
																	className="p-2 m-0 w-fit bg-none border-none shadow-none"
																	align="center"
																	side="left"
																>
																	<Card className="flex flex-col gap-0 max-w-xs m-0 p-0">
																		<CardHeader>
																			<CardTitle>Are you sure?</CardTitle>
																			<CardDescription className="">
																				This will detele this reservation from the database. This
																				cannot be undone.
																			</CardDescription>
																		</CardHeader>
																		<CardContent>
																			<form className="flex flex-col items-center gap-2">
																				<Input
																					id="id"
																					name="id"
																					value={res.id}
																					className="sr-only"
																				/>
																				<SubmitButton
																					formAction={deleteReservationAction}
																					pendingText="Deleting..."
																					variant="destructive"
																					size="sm"
																					className="w-full"
																				>
																					Confirm Delete
																				</SubmitButton>
																			</form>
																		</CardContent>
																	</Card>
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
						<div className="grid grid-cols-2 gap-4 lg:col-span-2">
							<Card className="w-full">
								<CardHeader>
									<CardTitle>Reservations</CardTitle>
									<CardDescription>
										Total reservations: {dbresList?.reservations.length}
									</CardDescription>
								</CardHeader>
							</Card>
							<Card className="w-full">
								<CardHeader>
									<CardTitle>Reservations</CardTitle>
									<CardDescription>
										Total reservations: {dbresList?.reservations.length}
									</CardDescription>
								</CardHeader>
							</Card>
							<Card className="w-full">
								<CardHeader>
									<CardTitle>Reservations</CardTitle>
									<CardDescription>
										Total reservations: {dbresList?.reservations.length}
									</CardDescription>
								</CardHeader>
							</Card>
							<Card className="w-full">
								<CardHeader>
									<CardTitle>Reservations</CardTitle>
									<CardDescription>
										Total reservations: {dbresList?.reservations.length}
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
					<Link
						href="/dashboard/customers"
						className="w-full items-center justify-center flex flex-row"
					>
						<Button variant={"link"}>View All</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
