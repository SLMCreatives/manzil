"use client";

import { Calendar } from "@/ui/shadcn/calendar";
import { addDays, differenceInDays, format } from "date-fns";
import { CalendarCheck } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import * as React from "react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Checkbox } from "@/ui/shadcn/checkbox";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/shadcn/popover";
import Link from "next/link";

export default function BookingsPage() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 2),
	});
	const days = differenceInDays(date?.to || new Date(), date?.from || new Date()) + 1;
	const nights = days - 1;
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<CalendarCheck className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">Book A Stay</h3>
			</section>
			<section className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Book Details</CardTitle>
						<CardDescription>Select the details of your stay.</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<Label className="text-sm font-medium" htmlFor="date">
								Dates
							</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										id="date"
										variant={"outline"}
										className={cn(
											"w-full justify-start text-left font-normal",
											!date && "text-muted-foreground",
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date?.from ? (
											date.to ? (
												<>
													{format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
												</>
											) : (
												format(date.from, "LLL dd, y")
											)
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										initialFocus
										mode="range"
										defaultMonth={date?.from}
										selected={date}
										onSelect={setDate}
										numberOfMonths={1}
										disabled={(date) => date < new Date()}
									/>
								</PopoverContent>
							</Popover>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="guests">No of Guests</Label>
							<Input id="guests" type="number" defaultValue={8} max={16} min={7} />
						</div>
						<hr></hr>
						<div className="flex flex-row gap-2 items-center">
							<Checkbox id="terms" />
							<Label
								htmlFor="terms"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Accept{" "}
								<Link href="/terms" className="hover:underline text-accent">
									terms and conditions.
								</Link>
							</Label>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full border-none shadow-none">
					<CardContent className="flex flex-col gap-4">
						<Label htmlFor="days">Days</Label>
						<p id="days" className="text-xl">
							{" "}
							{days > 0 ? days : 0} days, {nights > 0 ? nights : 0} {} nights{" "}
						</p>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
