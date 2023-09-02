"use client";

import React from 'react'
import * as z from "zod"
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { toast } from "react-hot-toast"

import { cn } from "@/lib/utils"
import {useStoreModal} from '@/hooks/use-store-modal';
// import {Modal} from '@/components/ui/modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {   
  Popover,
  PopoverContent,
  PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';


const formSchema = z.object({
  name: z.string().min(5),
  bdate: z.string(),
  phone: z.string().min(11),
  email: z.string(),
  address: z.string(),
})

export const StoreModal = () => {
  
  const [loading, setLoading] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bdate: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{
      try {
        setLoading(true)

        const response = await axios.post('/api/members', values)  
        
        toast.success("You are Registered!")

      } catch (error) {
        toast.error("something went wrong.")
      } finally{
        setLoading(false)
      }
  }

  return(   
        <Card className="m-10">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Kindly register your information that we may able to minister to you efficiently</CardDescription>
          </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                          <Input disabled={loading} 
                          placeholder="Fullname" {...field}/>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name="bdate"
                render={({field}) => (
                  <FormItem>
                      <FormLabel>Birth day</FormLabel>
                      <FormControl>
                          <Input disabled={loading} 
                          placeholder="Birthday" {...field}/>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
                />

            <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                          <Input disabled={loading} 
                          placeholder="Email@example.com" {...field}/>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="phone"
                render={({field}) => (
                  <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                          <Input disabled={loading} 
                          placeholder="09091234567" {...field}/>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name="address"
                render={({field}) => (
                  <FormItem>
                      <FormLabel>Address on Santa Rosa City</FormLabel>
                      <FormControl>
                          <Textarea disabled={loading} 
                          placeholder="House no., Subdivision, Brgy" {...field}/>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
                />

                <div className="pt-6 space-x-2 flex items-center justify-center w-full">
                  <Button disabled={loading} type="submit">Submit</Button>
                </div>
            </form>
          </Form>
          </CardContent>
        </Card>
  )
}
