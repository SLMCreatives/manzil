import { createClient } from "@/app/utils/supabase/server";
import AnalyticsSection from "@/ui/dashboard/analytics";

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
				<AnalyticsSection analytics={dbres} />
			</div>
		);
	}
}
