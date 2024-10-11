import Sidebar from "@/ui/dashboard/sidebar";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<Sidebar />
				{children}
			</div>
		</>
	);
}
