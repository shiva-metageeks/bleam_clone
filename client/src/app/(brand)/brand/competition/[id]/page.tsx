"use client";
import Link from "next/link";
import { useGetCompetitionById } from "@/hooks/competition/competition";
import { useRouter } from "next/navigation";
import { ITask } from "@/types/task/task";
export default function CompetitionPage({params}: {params: {id: string}}) {
    const router=useRouter();
    const {id} = params;
    const {competition} = useGetCompetitionById(id);
    console.log("competition",competition);
    return (
        <div className="sm:w-[95%] sm:mx-auto h-screen p-4">
            <div className="flex justify-center gap-4 bg-slate-100 rounded-md p-4 mb-4">
            <div className="w-1/4 rounded-md overflow-hidden"><img src={competition?.imageUrl} alt="ald" className="rounded-md object-fill" /></div>
            <div className="w-3/4 h-full"> 
                <div className="flex flex-col items-start justify-start h-full">
                    <div className="text-2xl font-bold capitalize">{competition?.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{competition?.description}</div>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-between mb-4 p-4">
            <div className="text-2xl font-bold">Active Tasks</div>
            <div className="flex items-center gap-4">
                <Link href={`/brand/add-tasks/${competition?.id}`}  className="bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border transition-all duration-300 text-white px-4 py-2 rounded-full">Add Task</Link>
                <button onClick={()=>router.back()} className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white hover:border-white transition-all duration-300 px-4 py-2 rounded-full" >Back</button>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mb-2 p-4" >
               {competition?.tasks.map((item:ITask)=>{
                return (
                    <div className="bg-slate-300 rounded-md p-2 flex justify-between items-start gap-4">
                    <div className="w-1/4 rounded-md overflow-hidden">
                    <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="ald" className="rounded-md object-fill" />
                    </div>
                    <div className="w-3/4 flex flex-col justify-start items-start">
                    <div className="text-lg font-bold text-start">Task {item.type}</div>
                    <div className="text-sm text-gray-500 truncate h-[20px] text-wrap">{item.title}</div>
                    </div>
                </div>
                )
               })}
            </div>

        </div>
    )
}