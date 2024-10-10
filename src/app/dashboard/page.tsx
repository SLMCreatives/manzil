//import { useState } from "react";
import { createClient } from "@/app/utils/supabase/server";
import ReservationSection from "@/ui/dashboard/reservations";
//import CustomerSection from "@/ui/dashboard/customers";
//import AnalyticsSection from "@/ui/dashboard/analytics";
import Sidebar from "@/ui/dashboard/sidebar";

export default async function Dashboard() {
	const supabase = createClient();
	const { data: dbres, error } = await supabase.from("reservations").select("*");
	if (error) {
		console.log(error);
	} else {
		return (
			<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<Sidebar />
				<ReservationSection reservations={dbres} />
			</div>
		);
	}
}
