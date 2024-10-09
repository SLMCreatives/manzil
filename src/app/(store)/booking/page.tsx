import CalendarSection from "@/ui/manzilcalendar";
import { CalendarCheck } from "lucide-react";
import * as React from "react";
//import { createClient } from "@/app/utils/supabase/server";

export default async function BookingsPage() {
	/* const supabase = createClient();
	const { data: reservations, error } = await supabase.from("reservations").select("resdates").is("confirmed", true);
	if (error) {
		console.log(error);
	} else { */
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<CalendarCheck className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">Book A Stay</h3>
			</section>
			<CalendarSection />
		</main>
	);
}
