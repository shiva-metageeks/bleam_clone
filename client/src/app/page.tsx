"use client"
import React, { useState } from 'react'
import { useGetUser, useCreateUser } from '@/hooks/user'

export type CreateUserInput = {
  name: string
  username: string
  email: string
  bio: string
  profileImageUrl: string
}

const page = () => {
  const { data, isLoading } = useGetUser("shiva");
  const { mutate: createUser } = useCreateUser();

  const [user, setUser] = useState({
    username: "suraj",
    name: "suraj",
    email: "suraj@gmail.com",
    profileImageUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    bio: "I am a software engineer",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const handleSubmit = async () => {
    createUser(user)
  }

  console.log(data)
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default page
