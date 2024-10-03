import { resetPasswordAction } from "@/app/actions";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import { SubmitButton } from "@/ui/submit-button";

export default async function ResetPassword() {
	return (
		<form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
			<h1 className="text-2xl font-medium">Reset password</h1>
			<p className="text-sm text-foreground/60">Please enter your new password below.</p>
			<Label htmlFor="password">New password</Label>
			<Input type="password" name="password" placeholder="New password" required />
			<Label htmlFor="confirmPassword">Confirm password</Label>
			<Input type="password" name="confirmPassword" placeholder="Confirm password" required />
			<SubmitButton formAction={resetPasswordAction}>Reset password</SubmitButton>
		</form>
	);
}
