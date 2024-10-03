import { signInAction, signInWithOAuth } from "@/app/actions";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { SubmitButton } from "@/ui/submit-button";

import Link from "next/link";

export default function Login() {
	return (
		<div className=" flex flex-col gap-4">
			<form className="flex-1 flex flex-col min-w-64 items-center pt-32">
				<h1 className="text-2xl font-medium">Sign in</h1>
				<p className="text-sm text-foreground">
					Don't have an account?{" "}
					<Link className="text-primary font-medium underline" href="/sign-up">
						Sign up
					</Link>
				</p>
				<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
					<Label htmlFor="email">Email</Label>
					<Input name="email" placeholder="you@example.com" required />
					<div className="flex justify-between items-center">
						<Label htmlFor="password">Password</Label>
						<Link className="text-xs text-foreground underline" href="/forgot-password">
							Forgot Password?
						</Link>
					</div>
					<Input type="password" name="password" placeholder="Your password" required />
					<SubmitButton pendingText="Signing In..." formAction={signInAction}>
						Sign in
					</SubmitButton>
				</div>
			</form>
			<form className="flex flex-col w-full">
				<SubmitButton pendingText="Signing In..." formAction={signInWithOAuth}>
					Sign in with Google
				</SubmitButton>
			</form>
		</div>
	);
}
