import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import prismadb from '@/lib/prismadb';
import { Separator } from "@/components/ui/separator"
import  MemberList from '@/components/table'

export default async function District1a(){

  const user = await currentUser();
  let avatar = "/avatarone.png"

  if(user?.hasImage){ 
    avatar = user.imageUrl 
  }

  const getData = await prismadb.member.findMany();

  return (
    <div className="container">
      <main className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-3xl mx-2">{`Hello! ${user?.firstName}`}</h1>
          <Image
              src={avatar}
              width={150}
              height={150}
              alt="avatar"
              className="rounded-full"
          />
          <Separator />
          <MemberList data={getData || []} />
      </main>
    </div>
  )
}
