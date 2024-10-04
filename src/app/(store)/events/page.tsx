import { PartyPopper } from "lucide-react";

export default function EventsPage() {
	return (
		<main>
			<section className=" bg-accent-foreground p-6  rounded-xl flex flex-row gap-4 items-center">
				<PartyPopper className="min-h-8 min-w-8 aspect-square text-primary" />
				<h3 className="text-3xl font-bold">Events</h3>
			</section>
			<section className="py-6 rounded-xl h-72">
				<p className="text-muted-foreground italic">Coming soon</p>
			</section>
		</main>
	);
}
