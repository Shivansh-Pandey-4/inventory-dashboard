"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react";

export default function SignoutClient() {

    const [loading, setLoading] = useState(false);

    async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log("signout clicked");
    }

    return <Button onClick={handleClick}>
        <LogOut /> Signout
    </Button>
}