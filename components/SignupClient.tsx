"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignupClient() {
    return (
        <div className="max-w-xs mx-auto">
            <Card>
                <CardTitle className="text-center font-bold text-2xl" >
                    <h1>Signup Page.</h1>
                </CardTitle>
                <CardContent>
                    <form action="">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="fullname">Full Name</Label>
                                <Input required autoFocus id="fullname" name="fullname" type="text" placeholder="Enter FullName" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input required id="email" name="email" type="email" placeholder="Enter Email" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input required id="password" name="password" type="password" placeholder="Enter Password" />
                            </div>
                            <Button>Signup</Button>
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