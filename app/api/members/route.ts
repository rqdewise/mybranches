import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"

export async function POST(
    req: Request,
){
    try{
        const { userId } = auth()
        const body = await req.json()

        const {name, bdate, phone, address ,email} = body

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 400})
        }

        if(!name || !bdate ){
            return new NextResponse("Name and birthday are required", {status: 400 })
        }

        const member = await prismadb.member.create({
            data: {
                name,
                bdate,
                email,
                phone,
                address, 
                userId,               
            }
        })

        return NextResponse.json(member)
        
    }catch(err){
        console.log('[MEMBERS_POST]', err)
        return new NextResponse("Internal error", { status: 500 })
    }
}


export async function GET(
    req: Request,
){
    try{
        const { userId } = auth()

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 400})
        }
        const members = await prismadb.member.findMany()

        return NextResponse.json(members)
        
    }catch(err){
        console.log('[MEMBERS_GET]', err)
        return new NextResponse("Internal error", { status: 500 })
    }
}