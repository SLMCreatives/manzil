import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/shadcn/table";

const customers = [
	{
		id: "CUST001",
		name: "Alice Johnson",
		email: "alice@example.com",
		totalOrders: 15,
		totalSpent: "$1,200",
	},
	{
		id: "CUST002",
		name: "Bob Smith",
		email: "bob@example.com",
		totalOrders: 8,
		totalSpent: "$750",
	},
	{
		id: "CUST003",
		name: "Charlie Brown",
		email: "charlie@example.com",
		totalOrders: 22,
		totalSpent: "$2,100",
	},
	{
		id: "CUST004",
		name: "Diana Prince",
		email: "diana@example.com",
		totalOrders: 5,
		totalSpent: "$500",
	},
	{
		id: "CUST005",
		name: "Ethan Hunt",
		email: "ethan@example.com",
		totalOrders: 12,
		totalSpent: "$980",
	},
];

export default function CustomerSection() {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
			</div>
			<div className="border shadow-sm rounded-lg">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Customer ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Total Orders</TableHead>
							<TableHead>Total Spent</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{customers.map((customer) => (
							<TableRow key={customer.id}>
								<TableCell className="font-medium">{customer.id}</TableCell>
								<TableCell>{customer.name}</TableCell>
								<TableCell>{customer.email}</TableCell>
								<TableCell>{customer.totalOrders}</TableCell>
								<TableCell>{customer.totalSpent}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</main>
	);
}
