import { signUpAction } from "@/app/actions";
import { Button } from "@/ui/shadcn/button";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import Link from "next/link";

export default function Signup() {
	return (
		<>
			<form className="flex flex-col min-w-64 max-w-64 mx-auto items-center pt-32 h-screen">
				<h1 className="text-2xl font-medium">Sign up</h1>
				<p className="text-sm text text-foreground">
					Already have an account?{" "}
					<Link className="text-primary font-medium underline" href="/sign-in">
						Sign in
					</Link>
				</p>
				<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
					<Label htmlFor="email">Email</Label>
					<Input name="email" placeholder="you@example.com" required />
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						name="password"
						placeholder="Your password"
						minLength={6}
						required
					/>
					<Button formAction={signUpAction} /* pendingText="Signing up..." */>Sign up</Button>
				</div>
			</form>
			{/*       <SmtpMessage />
			 */}{" "}
		</>
	);
}
