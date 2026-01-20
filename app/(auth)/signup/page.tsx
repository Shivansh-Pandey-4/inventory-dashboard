import SignupClient from "@/components/SignupClient";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { HomeIcon } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signup() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        redirect("/");
    }

    return (
        <div className="min-h-screen py-16 px-4 bg-linear-to-b from-purple-50 to-purple-200">
            <main className="container max-w-4xl mx-auto">
                <section>
                    <Link href={"/"}>
                        <Button className="mb-8" variant={"outline"}>
                            <HomeIcon /> Back to home.
                        </Button>
                    </Link>
                    <div>
                        <SignupClient />
                    </div>
                </section>
            </main>
        </div>
    )
}