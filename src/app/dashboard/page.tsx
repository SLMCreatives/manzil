import { createClient } from "@/app/utils/supabase/server";
import ReservationSection from "@/ui/dashboard/reservations";

export default async function Dashboard() {
	const supabase = createClient();
	const { data: dbres, error } = await supabase
		.from("reservations")
		.select("*")
		.order("id", { ascending: false });
	if (error) {
		console.log(error);
	} else {
		return (
			<div>
				<ReservationSection reservations={dbres} />
			</div>
		);
	}
}
