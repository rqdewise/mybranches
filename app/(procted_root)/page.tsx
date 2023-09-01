"use client"
import React from "react"
import Image from "next/image"

import { ModalProvider } from '@/providers/modal-provider'
import { Banner } from "@/components/banner"


export default function Home() {

  return (
    <main className="container">
      <Banner />

      <ModalProvider/>
      
      <section className="flex space-x-2 items-center justify-center">
            <Image 
                width={150}
                height={150}
                src={'/dp.jpg'}
                alt="Ralf" 
                className="rounded-full"
            />
            <blockquote className="w-[150px] inline-block max-w-[750px] text-sm text-muted-foreground sm:text-md text-center "> 
                I appreciate you coming here. I am eager to collaborate with you for this year's ministry. Let us do the work as a "chidren of light!"
            </blockquote>

        </section>
    </main>
  )
}
