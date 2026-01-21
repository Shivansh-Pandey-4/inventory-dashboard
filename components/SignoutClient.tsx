"use client"

import { useActionState, useEffect } from "react"
import { Button } from "./ui/button"
import { Loader2, LogOut } from "lucide-react";
import { signoutAction } from "@/actions/userAuth";
import { toast } from "sonner";

const initialState: { submitNo: number; success?: boolean } = { submitNo: 0 }

export default function SignoutClient() {

    const [state, action, isPending] = useActionState(signoutAction, initialState)

    useEffect(() => {
        if (state.success === true) {
            toast.success("user signout successfully");
        }
        if (state.success === false) {
            toast.error("failed to signout")
        }
        console.log(state);
    }, [state.submitNo]);


    return <>
        <form action={action}>
            <Button>
                {
                    isPending ? <span className="animate-spin"><Loader2 /></span> : <span className="flex items-center gap-3"><LogOut /> Signout</span>
                }
            </Button>
        </form>
    </>
}