import React from 'react'
import Image from 'next/image'

type data = {
    id: string, 
    name: string, 
    bdate: string, 
    email: string, 
    phone: string, 
    address: string, 
    userId: string,
    createdAt: Date, 
    updatedAt: Date, 
}


interface MemberListProps {
    data: data[]
}

export const MemberList:React.FC<MemberListProps> = ({
    data
}) => {

    return (
    <>
    <ul className="flex flex-col space-y-4">
        <>
        {
            data.map( (member) => (
                <li key={member.id} className='flex space-x-3'>
                    
                    <Image 
                        src="/avatarone.png"
                        width={50}
                        height={50}
                        alt="avatar"
                        className="rounded-full"
                    />
                    <span className='text-2xl font-semibold '>{member.name}</span>
                    <span className='text-slate-400'>email: {member.email}</span>
                </li>
                )) 
            }
        </> 
    </ul>
    </>
  )
}

export default MemberList