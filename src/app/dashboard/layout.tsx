//import { createClient } from "@/app/utils/supabase/server";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	/* const supabase = createClient();
    const { data: dbres, error} = await supabase.from("reservations").select("*");
    if (error) {
        console.log(error)
    } else { */
	return <>{children}</>;
}
