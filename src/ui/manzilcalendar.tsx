"use client";

//import { toast } from "@/hooks/use-toast";
import { reserveAction } from "@/app/actions";
import { cn } from "@/lib/utils";
import { PhoneInput } from "@/ui/phone-input";
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
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/shadcn/popover";
import { SubmitButton } from "@/ui/submit-button";
import { addDays /*, differenceInDays, eachDayOfInterval */ } from "date-fns";
import { CalendarIcon } from "lucide-react";
//import { ToastAction } from "@/ui/shadcn/toast";
import Image from "next/image";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export default function CalendarSection() {
	/* const dbRes = reservations?.reservations?.map((res: any) => {
        return {
            ...res.resdates
        }
    }); */

	//const [ selectedDates, setSelectedDates ] = useState<Date[]>([]);
	//const [ disabledDates, setDisabledDates ] = useState<Date[]>([]);
	/*  const getFormatedDates = (dbRes: any[]) => {
        const formattedDates: Date[] = []
        dbRes.forEach((dbRes) => {
            const startDate = new Date(dbRes.start)
            const endDate = new Date(dbRes.end)

            const datesInRange = eachDayOfInterval({ start: startDate, end: endDate })


            datesInRange.forEach((date) => {
				formattedDates.push(new Date(date))
            })
        })

        return formattedDates
    } */
	/* 
	const getSelectedDates = (date: DateRange) => {
		const selectedDays: Date[] = []

		const startDate = new Date(date?.from || new Date())
		const endDate = new Date(date?.to || new Date())

		const datesInRange = eachDayOfInterval({ start: startDate, end: endDate })

		datesInRange.forEach((date) => {
			selectedDays.push(new Date(date))
		})

		return selectedDays
	} */

	//const formattedDates = getFormatedDates(dbRes);
	//const [disabledDates, setDisabledDates] = useState<Date[]>([...formattedDates]);
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 2),
	});

	//const days = differenceInDays(date?.to || new Date(), date?.from || new Date()) + 1 ;
	//const nights = days - 1;
	const [fullName, setFullName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");

	return (
		<section className="py-6 grid grid-cols-1 gap-8">
			<div className="flex flex-col gap-4">
				<Card className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
					<Image
						src="/unit/manzil4.webp"
						alt="The Manzil"
						width={500}
						height={500}
						className="w-full h-full rounded-xl"
					/>
					<div className="flex flex-col gap-0 justify-between py-4 lg:px-4">
						<CardHeader>
							<CardTitle className="text-xl font-bold">Booking Details</CardTitle>
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
											{date ? (
												<div className="flex flex-row gap-2 items-center">
													{date.from?.toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric",
													})}{" "}
													-{" "}
													{date.to?.toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric",
													})}
												</div>
											) : (
												"Select dates"
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="range"
											defaultMonth={date?.from}
											selected={date}
											onSelect={setDate}
											disabled={{ before: new Date(), after: addDays(new Date(), 90) }}
											//disabled={disabledDates}
											numberOfMonths={1}
										/>
									</PopoverContent>
								</Popover>
							</div>
							<div className="flex flex-col gap-2">
								<Label htmlFor="guests">No of Guests</Label>
								<Input id="guests" type="number" defaultValue={8} max={16} min={7} />
							</div>
						</CardContent>
						<CardFooter>
							<Button //onClick={handleCheckAvailability}
							>
								Check Availability
							</Button>
						</CardFooter>
					</div>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Personal Information</CardTitle>
						<CardDescription>Enter your personal information.</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<Label className="text-sm font-medium" htmlFor="full_name">
								Your Full Name
							</Label>
							<Input
								id="full_name"
								name="full_name"
								className="w-full"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label className="text-sm font-medium" htmlFor="email">
								Email Address
							</Label>
							<Input
								id="email"
								name="email"
								className="w-full"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label className="text-sm font-medium" htmlFor="phone">
								Phone Number
							</Label>
							<PhoneInput value={phone} onChange={setPhone} />
						</div>
					</CardContent>
					<CardFooter>
						<SubmitButton
							form="reserve-form"
							className="w-full"
							pendingText="Reserving..."
							formAction={reserveAction}
						>
							Reserve
						</SubmitButton>
					</CardFooter>
				</Card>
			</div>
			{/* <div className="flex flex-col gap-4">
					<Card className="">
						<CardHeader>
							<CardTitle>
								Reservations Summary
							</CardTitle>
							<CardDescription>
								Confirm the details of you stay.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							<form className="flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Check In Date</Label>
									<Input id="check_in_date" name="check_in_date" type="datetime-local" defaultValue={date?.from?.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}>
									</Input>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Check Out Date</Label>
									<p className="text-lg text-accent flex flex-row gap-2 items-center"><CalendarCheck className="mr-2 h-4 w-4" /> {" "}{date?.to?.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) + ", 12:00pm" || "Pick a date"}</p>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Duration</Label>
									<p className="text-lg text-accent flex flex-row gap-2 items-center"><Clock className="mr-2 h-4 w-4" /> {" "}
										{days > 0 ? days : 0} days, {nights > 0 ? nights : 0} {} nights{" "}
									</p>
								</div>
								<hr></hr>
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Full Name</Label>
									<p className="text-lg text-accent flex flex-row gap-2 items-center"><User2 className="mr-2 h-4 w-4" /> {" "}{fullName ? fullName : "Enter your name"}</p>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Email Address</Label>
									<p className="text-lg text-accent flex flex-row gap-2 items-center"><Inbox className="mr-2 h-4 w-4" /> {" "}{email ? email : "Enter your email"}</p>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="days">Phone Number</Label>
									<p className="text-lg text-accent flex flex-row gap-2 items-center"><Phone className="mr-2 h-4 w-4" /> {" "}{phone ? phone : "Enter your phone number"}</p>
								</div>
									<SubmitButton
										pendingText="Reserving..."
										formAction={reserveAction}
										className="w-full"
									>
										Submit 
									</SubmitButton>
							</form>
							</CardContent>
					</Card>
				</div> */}
		</section>
	);
}
