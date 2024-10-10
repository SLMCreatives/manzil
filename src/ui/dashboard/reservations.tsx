"use client";

import {
	confirmedStatus,
	deleteReservationAction,
	lockReservationAction,
	pendingStatus,
} from "@/app/actions";
import { cn } from "@/lib/utils";
import { Badge } from "@/ui/shadcn/badge";
import { Button } from "@/ui/shadcn/button";
import { Calendar } from "@/ui/shadcn/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/ui/shadcn/card";
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
import { SubmitButton } from "@/ui/submit-button";
import { PopoverClose } from "@radix-ui/react-popover";

import { addDays, eachDayOfInterval, format } from "date-fns";
import { CalendarIcon, Plus, Trash } from "lucide-react";
import { useState } from "react";

interface ReservationProps {
	reservations: string[];
}

export default function ReservationSection(reservations: ReservationProps) {
	const dbresList = reservations;
	const [checkInDate, setCheckInDate] = useState<Date | undefined>();

	const resDates = dbresList.reservations
		?.filter((res: any) => res.status === "confirmed")
		.map((res: any) => {
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
	const [openDrawer, setDrawerOpen] = useState(false);

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="space-y-4">
				<h1 className="text-2xl font-bold">Reservations</h1>
				<div>
					<Card>
						<CardHeader>
							<CardTitle>Calendar View</CardTitle>
							<CardDescription>Select a date to add a reservation</CardDescription>
						</CardHeader>
						<CardContent className="">
							<Calendar
								mode="multiple"
								numberOfMonths={1}
								today={new Date()}
								selected={[...formattedDates]}
								modifiersClassNames={{
									selected: "text-red-500 bg-red-100 ",
									outside: "text-gray-400",
									today: "ring-red-200 ring-1 text-primary",
								}}
								onSelect={() => setDrawerOpen(true)}
							/>
						</CardContent>
					</Card>
				</div>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<div className="flex flex-col gap-4">
							<CardTitle>Recent Reservations</CardTitle>
							<CardDescription>A list of recent reservations for your properties.</CardDescription>
						</div>
						<div>
							<Drawer open={openDrawer} onOpenChange={setDrawerOpen}>
								<DrawerTrigger asChild>
									<Button variant="outline" size="icon">
										<Plus className="h-4 w-4" />
									</Button>
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
													disabled={formattedDates}
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
																<SelectValue defaultValue="pending" placeholder="Select Status" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="pending">Pending</SelectItem>
																<SelectItem value="confirmed">Confirmed</SelectItem>
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
									{dbresList?.reservations?.map((res: any) => {
										return (
											<tr key={res.id} className="border-t text-sm">
												<td className="py-4">{res.full_name}</td>
												<td className="py-4 text-center hidden lg:table-cell">{res.no_of_guest}</td>
												<td className="py-4 text-center">
													{new Date(res.check_in).toLocaleDateString("en-MY", {
														month: "numeric",
														day: "numeric",
														year: "2-digit",
													})}
												</td>
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
															<Card>
																<CardHeader>
																	<CardTitle>Are you sure?</CardTitle>
																	<CardDescription>This action cannot be undone</CardDescription>
																</CardHeader>
																<CardFooter>
																	<form className="flex flex-col items-center gap-2">
																		<Input id="id" name="id" value={res.id} className="sr-only" />
																		<Button
																			formAction={deleteReservationAction}
																			variant="destructive"
																			size="sm"
																			className="w-full"
																		>
																			Confirm Delete
																		</Button>
																	</form>
																</CardFooter>
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
			</div>
		</main>
	);
}
