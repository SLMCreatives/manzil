import { Badge } from "@/ui/shadcn/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/shadcn/table";
import { format } from "date-fns";

interface CustomerProps {
	customers: string[];
}

export default function CustomerSection(customers: CustomerProps) {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold">Customers</CardTitle>
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
							</TableRow>
						</TableHeader>
						<TableBody>
							{customers.customers?.map((customer: any) => (
								<TableRow key={customer.id}>
									<TableCell className="text-xs py-4">{customer.id}</TableCell>
									<TableCell className="font-bold text-md">{customer.full_name}</TableCell>
									<TableCell className="text-xs hidden md:table-cell">{customer.email}</TableCell>
									<TableCell className="">{format(customer.check_in, "dd MMM yyyy")}</TableCell>
									<TableCell className="text-center">{customer.nights}</TableCell>
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
			</Card>
		</main>
	);
}
