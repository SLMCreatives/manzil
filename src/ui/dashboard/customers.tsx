"use client";

import { confirmedStatus, deleteReservationAction, pendingStatus } from "@/app/actions";
import { Badge } from "@/ui/shadcn/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/ui/shadcn/card";
import { Input } from "@/ui/shadcn/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/shadcn/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/shadcn/table";
import { SubmitButton } from "@/ui/submit-button";
import { addDays, format } from "date-fns";
import { EllipsisVertical } from "lucide-react";

interface CustomerProps {
	customers: string[];
}

export default function CustomerSection(customers: CustomerProps) {
	const confirmedBookings = customers.customers?.filter(
		(customer: any) => customer.status === "confirmed",
	);
	const pendingBookings = customers.customers?.filter(
		(customer: any) => customer.status === "pending",
	);
	return (
		<main className="flex flex-1 flex-col lg:grid lg:grid-cols-2 gap-4 p-4 md:gap-8 md:p-6">
			{pendingBookings.length > 0 && (
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
									<TableHead className="hidden md:table-cell">Email</TableHead>
									<TableHead>Check In</TableHead>
									<TableHead className="text-center">Nights</TableHead>
									<TableHead className="text-center">Status</TableHead>
									<TableHead></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{pendingBookings.length === 0 && (
									<p className="py-4 text-muted-foreground italic">No pending bookings</p>
								)}
								{pendingBookings.map((customer: any) => (
									<TableRow key={customer.id}>
										<TableCell className="text-xs py-4 text-nowrap">{customer.id}</TableCell>
										<TableCell className="font-bold text-md">{customer.full_name}</TableCell>
										<TableCell className="text-xs hidden md:table-cell">{customer.email}</TableCell>
										<TableCell className="">{format(customer.check_in, "dd MMM yyyy")}</TableCell>
										<TableCell className="text-center">{customer.nights}</TableCell>
										<TableCell className="text-center">
											<Badge variant="destructive">P</Badge>
										</TableCell>
										<TableCell className="text-center">
											<Popover>
												<PopoverTrigger>
													<EllipsisVertical className="h-4 w-4" />
												</PopoverTrigger>
												<PopoverContent
													className="p-2 m-0 w-72 bg-none border-none shadow-none"
													align="center"
													side="left"
												>
													<Card className="flex flex-col gap-0 max-w-xs m-0 p-0">
														<CardHeader>
															<CardTitle className="flex flex-row gap-2 text-xl">
																{customer.full_name}
															</CardTitle>
															<CardDescription>{customer.email}</CardDescription>
														</CardHeader>
														<CardContent className="flex flex-col gap-2">
															<p className="text-sm">
																Check In Date:{" "}
																<span className="text-primary font-bold">
																	{" "}
																	{format(new Date(customer.check_in), "PP")}
																</span>
															</p>{" "}
															<p className="text-sm">
																Check Out Date:{" "}
																<span className="text-primary font-bold">
																	{format(
																		addDays(
																			new Date(customer.check_in),
																			customer.nights > 1 ? customer.nights - 1 : customer.nights,
																		),
																		"PP",
																	)}
																</span>
															</p>
															<p className="text-sm">
																Total:{" "}
																<span className="text-primary font-bold">
																	RM {customer.nights * 2000}
																</span>
															</p>
														</CardContent>
														<CardFooter>
															<form className="flex flex-row items-center gap-2">
																<Input id="id" name="id" value={customer.id} className="sr-only" />
																<SubmitButton
																	formAction={confirmedStatus}
																	pendingText="Saving"
																	variant="default"
																	size="sm"
																	className="w-full"
																>
																	Confirm
																</SubmitButton>
																<SubmitButton
																	formAction={deleteReservationAction}
																	pendingText="Deleting"
																	variant="destructive"
																	size="sm"
																	className="w-full"
																>
																	Delete
																</SubmitButton>
															</form>
														</CardFooter>
													</Card>
												</PopoverContent>
											</Popover>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			)}
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
								<TableHead className="hidden md:table-cell">Email</TableHead>
								<TableHead>Check In</TableHead>
								<TableHead className="text-center">Nights</TableHead>
								<TableHead className="text-center">Status</TableHead>
								<TableHead></TableHead>
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
									<TableCell className="text-center">
										<Badge variant="secondary">C</Badge>
									</TableCell>
									<TableCell className="text-center">
										<Popover>
											<PopoverTrigger>
												<EllipsisVertical className="h-4 w-4" />
											</PopoverTrigger>
											<PopoverContent
												className="p-2 m-0 w-72 bg-none border-none shadow-none"
												align="center"
												side="left"
											>
												<Card className="flex flex-col gap-0 max-w-xs m-0 p-0">
													<CardHeader>
														<CardTitle className="flex flex-row gap-2 text-xl">
															{customer.full_name}
														</CardTitle>
														<CardDescription>{customer.email}</CardDescription>
													</CardHeader>
													<CardContent className="flex flex-col gap-2">
														<p className="text-sm">
															Check In Date:{" "}
															<span className="text-primary font-bold">
																{" "}
																{format(new Date(customer.check_in), "PP")}
															</span>
														</p>{" "}
														<p className="text-sm">
															Check Out Date:{" "}
															<span className="text-primary font-bold">
																{format(
																	addDays(
																		new Date(customer.check_in),
																		customer.nights > 1 ? customer.nights - 1 : customer.nights,
																	),
																	"PP",
																)}
															</span>
														</p>
														<p className="text-sm">
															Total:{" "}
															<span className="text-primary font-bold">
																RM {customer.nights * 2000}
															</span>
														</p>
													</CardContent>
													<CardFooter>
														<form className="flex flex-row items-center gap-2">
															<Input id="id" name="id" value={customer.id} className="sr-only" />
															<SubmitButton
																formAction={pendingStatus}
																pendingText="Saving"
																variant="default"
																size="sm"
																className="w-full"
															>
																Pending
															</SubmitButton>
															<SubmitButton
																formAction={deleteReservationAction}
																pendingText="Deleting"
																variant="destructive"
																size="sm"
																className="w-full"
															>
																Delete
															</SubmitButton>
														</form>
													</CardFooter>
												</Card>
											</PopoverContent>
										</Popover>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			{/* {pendingBookings.length > 0 && (
				
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
			)} */}
			{/* <Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold">Customers</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-fit">ID</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead className="hidden md:table-cell">Check In</TableHead>
								<TableHead className="hidden md:table-cell text-center">Nights</TableHead>
								<TableHead className="text-center">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{customers.customers?.map((customer: any) => (
								<TableRow key={customer.id}>
									<TableCell className="text-xs py-4">{customer.id}</TableCell>
									<TableCell className="font-bold text-md">{customer.full_name}</TableCell>
									<TableCell className="text-xs">{customer.email}</TableCell>
									<TableCell className=" hidden md:table-cell">{format(customer.check_in, "dd MMM yyyy")}</TableCell>
									<TableCell className="text-center  hidden md:table-cell">{customer.nights}</TableCell>
									<TableCell className="text-center uppercase">
										<Badge variant={customer.status === "confirmed" ? "default" : "destructive"}>
											{customer.status}
										</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card> */}
		</main>
	);
}
