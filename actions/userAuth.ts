"use server";

import { auth } from "@/lib/auth";
import { SigninState, State } from "@/lib/types";


export async function signupAction(prevState: State, formData: FormData) {
    const fullName = formData.get("fullname")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!fullName.trim() || !email.trim() || !password.trim()) {
        return {
            success: false,
            msg: "all inputs are required",
            error: {
                email: !email ? "email is required" : undefined,
                password: !password ? "password is required" : undefined,
                fullName: !fullName ? "fullName is required" : undefined,
            },
            submitNo: prevState.submitNo + 1
        }
    }

    try {
        await auth.api.signUpEmail({
            body: {
                email,
                name: fullName,
                password
            }
        })

        return {
            success: true,
            msg: "user signedUp successfully",
            submitNo: prevState.submitNo + 1
        }
    } catch (error) {
        return {
            success: false,
            msg: "failed to signup",
            error: error instanceof Error ? error.message : "unknown error occurred",
            submitNo: prevState.submitNo + 1

        }
    }

}

export async function signinAction(prevState: SigninState, formData: FormData) {
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!email.trim() || !password.trim()) {
        return {
            success: false,
            msg: "all inputs are required",
            error: {
                email: !email ? "email is required" : undefined,
                password: !password ? "password is required" : undefined
            },
            submitNo: prevState.submitNo + 1
        }
    }

    try {
        await auth.api.signInEmail({
            body: { email, password }
        })

        return {
            success: true,
            msg: "signed in successfully",
            submitNo: prevState.submitNo + 1
        }
    } catch (error) {
        return {
            success: false,
            msg: "failed to signin",
            error: error instanceof Error ? error.message : "unknown error occurred",
            submitNo: prevState.submitNo + 1
        }
    }
}
