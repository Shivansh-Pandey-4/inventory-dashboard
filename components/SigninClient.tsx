"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SigninState } from "@/lib/types";
import { useActionState, useEffect } from "react";
import { signinAction } from "@/actions/userAuth";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const initialState: SigninState = { submitNo: 0 }

export default function SigninClient() {

    const [state, action, isPending] = useActionState(signinAction, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success === false) {
            toast.error(state.msg);
            return;
        }
        if (state.success === true) {
            toast.success(state.msg);
            router.push("/dashboard");
        }
    }, [state.submitNo])

    return (
        <div className="max-w-xs mx-auto">
            <Card>
                <CardTitle className="text-center font-bold text-2xl" >
                    <h1>Signin Page.</h1>
                </CardTitle>
                <CardContent>
                    <form action={action}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input required autoFocus id="email" name="email" type="email" placeholder="Enter Email" />

                                {
                                    typeof state.error === "object" && state.error.email && (<p className="text-red-500">{state.error.email}</p>)
                                }
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input required id="password" name="password" type="password" placeholder="Enter Password" />

                                {
                                    typeof state.error === "object" && state.error.password && (<p className="text-red-500">{state.error.password}</p>)
                                }
                            </div>
                            <Button disabled={isPending}>
                                {
                                    isPending ? <span className="animate-spin"><Loader2 /></span> : <span>Signin</span>
                                }

                            </Button>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="border flex-1 h-px"></div>
                            <span>OR</span>
                            <div className="border flex-1 h-px"></div>
                        </div>
                        <div className="text-center mt-2">
                            <Link href={"/signup"}>
                                <p className="hover:underline">Don't have an account ? <span>Signup</span></p>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}