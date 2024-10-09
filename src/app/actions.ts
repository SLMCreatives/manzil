"use server";

import { createClient } from "@/app/utils/supabase/server";
import { encodedRedirect } from "@/app/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	const supabase = createClient();
	const origin = (await headers()).get("origin");

	if (!email || !password) {
		return { error: "Email and password are required" };
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});
	if (error) {
		console.error(error.code + " " + error.message);
		return encodedRedirect("error", "/sign-up", error.message);
	} else {
		return redirect("/type");
	}
};

export async function signInWithOAuth() {
	const origin = (await headers()).get("origin");
	const supabase = createClient();
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: `${origin}/auth/callback`,
		},
	});
	if (error) {
		console.error(error);
		// Handle error appropriately
		return;
	}
	if (data?.url) {
		return redirect(data.url);
	}
}

export const signInAction = async (formData: FormData) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return encodedRedirect("error", "/sign-in", error.message);
	}

	return redirect("/findtrainers");
};

export const forgotPasswordAction = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const supabase = createClient();
	const origin = (await headers()).get("origin");
	const callbackUrl = formData.get("callbackUrl")?.toString();

	if (!email) {
		return encodedRedirect("error", "/forgot-password", "Email is required");
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect("error", "/forgot-password", "Could not reset password");
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		"success",
		"/forgot-password",
		"Check your email for a link to reset your password.",
	);
};

export const resetPasswordAction = async (formData: FormData) => {
	const supabase = createClient();

	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!password || !confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/reset-password",
			"Password and confirm password are required",
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect("error", "/protected/reset-password", "Passwords do not match");
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect("error", "/protected/reset-password", "Password update failed");
	}

	encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect("/sign-in");
};

export const reserveAction = async (formData: FormData) => {
	const check_in_date = formData.get("check_in_date")?.toString();
	const check_out_date = formData.get("check_out_date")?.toString();
	const no_of_guest = formData.get("no_of_guest")?.toString();

	const user_id = formData.get("user_id")?.toString();
	const status = false;
	const confirmed = false;

	const supabase = createClient();

	const { error } = await supabase.from("reservations").insert({
		check_in_date,
		check_out_date,
		no_of_guest,
		user_id,
		status,
		confirmed,
	});

	if (error) {
		console.error(error);
		return encodedRedirect("error", "/reserve", error.message);
	}

	return console.log("Reservation created successfully");
};
