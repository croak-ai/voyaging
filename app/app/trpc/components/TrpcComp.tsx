'use client'

import { trpc } from "@/app/_trpc/client"

export default function TrpcComp(){
    const walsh = trpc.bot.botUser.useQuery()
    return (<div> {JSON.stringify(walsh.data)} </div>)
}