"use client"
import { useGetUser } from '@/hooks/user';
import React, { useState } from 'react'

const page = () => {
  const {user} = useGetUser("shivam@7011");
  console.log("users",user);
  return (
    <div>
      app
    </div>
  )
}

export default page
