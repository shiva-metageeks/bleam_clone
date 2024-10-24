"use client";
import Link from "next/link";
import { useGetCompetitionById,useJoinCompetition,useCheckUserCompetition } from "@/hooks/competition/competition";
import { useRouter } from "next/navigation";
import { ITask } from "@/types/task/task";
import SelectedTask from "@/components/tasks/seletedTask/selectedTask";
const CompetitionSlugPage = ({ params }: { params: { id: string } }) => {
  const router=useRouter();
  const { id } = params;
  const { competition } = useGetCompetitionById(id);
  const {userCompetition}=useCheckUserCompetition(id);
  const {mutate:joinCompetition}=useJoinCompetition();
  console.log("competition", competition);
  console.log("checkUserCompetition",userCompetition);

  const handleJoinCompetition=()=>{
    joinCompetition({competitionId:id},{
      onSuccess: async (data) => {
        console.log("data Joined Competition", data);
      },
      onError: async (error)=>{
        console.log("error",error);
      }
    });
  }
  return (
    <div className="sm:w-[95%] sm:mx-auto h-screen p-4">
      <div className="flex justify-center gap-4 bg-slate-100 rounded-md p-4 mb-4">
        <div className="w-1/4 rounded-md overflow-hidden">
          <img
            src={competition?.imageUrl}
            alt="ald"
            className="rounded-md object-fill"
          />
        </div>
        <div className="w-3/4 h-full">
          <div className="flex flex-col items-start justify-start h-full">
            <div className="text-2xl font-bold capitalize">
              {competition?.name}
            </div>
            <div className="text-sm text-gray-500 capitalize">
              {competition?.description}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 p-4">
        <div className="text-2xl font-bold">Active Tasks</div>
        <div className="flex items-center gap-4">
        {
          !userCompetition?.joined && <button onClick={handleJoinCompetition} className="bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border transition-all duration-300 text-white px-4 py-2 rounded-full">
            Join Competition
          </button>
        }
          <div
            onClick={()=>{router.back()}}
            className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white hover:border-white transition-all duration-300 px-4 py-2 rounded-full"
          >
            Back
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full mb-2 p-4">
        {competition?.tasks.map((item:ITask) => {
          return (
            <div className="border border-slate-300 shadow-md bg-gray-300 rounded-md p-2 flex justify-between items-start gap-4">
              <div className="w-3/4 flex flex-col justify-start items-start">
                <div className="text-lg font-bold text-start">Task {item.type}</div>
                <div className="text-sm text-gray-500 truncate h-[20px] text-wrap">
                  {item.title}
                </div>
                <div className="flex justify-end items-center">
                  <SelectedTask task={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitionSlugPage;
