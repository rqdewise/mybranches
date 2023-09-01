import axios from 'axios'
import React from 'react'
import { stringify } from 'querystring';


export const table = async () => {

    const response = await axios.get('/api/members') 
    console.log(response)
  return (
    <div>
        hi      
    </div>
  )
}

export default table