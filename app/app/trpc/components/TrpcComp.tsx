'use client'

import { trpc } from "@/app/_trpc/client"

export default function TrpcComp(){
    const resData = trpc.bot.botTest.useQuery()
    return (<div> {JSON.stringify(resData.data)} </div>)
}