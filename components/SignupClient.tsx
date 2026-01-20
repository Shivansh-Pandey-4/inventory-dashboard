"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/userAuth";
import { State } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

const initialState: State = { submitNo: 0 }

export default function SignupClient() {

    const [state, action, isPending] = useActionState(signupAction, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success === false) {
            toast.error(state.msg);
            return;
        }
        if (state.success === true) {
            toast.success(state.msg);
            redirect("/dashboard");
            // router.push("/dashboard");
        }
    }, [state.submitNo])

    return (
        <div className="max-w-xs mx-auto">
            <Card>
                <CardTitle className="text-center font-bold text-2xl" >
                    <h1>Signup Page.</h1>
                </CardTitle>
                <CardDescription className="text-center">
                    <p>{state.msg}</p>
                    {
                        typeof state.error === "string" && <p className="text-red-400 ">{state.error}</p>
                    }
                </CardDescription>
                <CardContent>
                    <form action={action}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="fullname">Full Name</Label>
                                <Input required autoFocus id="fullname" name="fullname" type="text" placeholder="Enter FullName" />

                                {
                                    typeof state.error === "object" && state.error.fullName && (<p className="text-red-400">{state.error.fullName}</p>)
                                }
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input required id="email" name="email" type="email" placeholder="Enter Email" />

                                {
                                    typeof state.error === "object" && state.error.email && (<p className="text-red-400">{state.error.email}</p>)
                                }
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input required id="password" name="password" type="password" placeholder="Enter Password" />

                                {
                                    typeof state.error === "object" && state.error.password && (<p className="text-red-400">{state.error.password}</p>)
                                }
                            </div>
                            <Button disabled={isPending}>
                                {
                                    isPending ? <span className="animate-spin"> <Loader2 /></span> : <span>Signup</span>
                                }
                            </Button>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="border flex-1 h-px"></div>
                            <span>OR</span>
                            <div className="border flex-1 h-px"></div>
                        </div>
                        <div className="text-center mt-2">
                            <Link href={"/signin"}>
                                <p className="hover:underline">Already have an account ? <span>Signin</span></p>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}