import { ITask } from '@/types/task/task';
import React from 'react';
import Link from "next/link";

const TweetRetweet = ({task}:{task:ITask}) => {
  return (
     <div className='p-4 flex flex-col' >
        <div className="mb-2" >Retweet the following tweet</div>
        <Link target='_blank' href={task.twitter.tweetLink} className='px-4 py-2 bg-zinc-950 rounded-full text-white text-center mb-2' >Tweet</Link>
        <div className='flex justify-end items-center'>
        <button className='px-4 py-2 bg-orange-500 text-white rounded-full' >Submit task</button> 
        </div>
    </div>
  )
}

export default TweetRetweet;