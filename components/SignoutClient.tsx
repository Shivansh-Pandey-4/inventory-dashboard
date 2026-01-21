"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Loader2, LogOut } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function SignoutClient() {

    const [isPending, setIsPending] = useState(false);
    const router = useRouter();


    async function handleBtn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setIsPending(true);
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    setIsPending(false);
                    toast.success("signout successfully");
                    router.refresh()
                },
                onError: () => {
                    setIsPending(false);
                    toast.error("failed to signout");
                }
            },
        });
    }


    return <>
        <Button className="min-w-30" disabled={isPending} onClick={handleBtn}>
            {
                isPending ? <span className="animate-spin"><Loader2 /></span> : <span className="flex items-center gap-3"><LogOut /> Signout</span>
            }
        </Button>
    </>
}