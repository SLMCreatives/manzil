import { createClient } from "@/app/utils/supabase/server";
import CustomerSection from "@/ui/dashboard/customers";

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
				<CustomerSection customers={dbres} />
			</div>
		);
	}
}
