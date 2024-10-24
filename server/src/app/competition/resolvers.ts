import CompetitionService from "@src/services/competition";
import { ICompetition, ICreateCompetitionInput, IJoinCompetitionInput } from "@src/types/competition";
import { Context } from "@src/types/types";
import { Competition } from ".";
import { ITask } from "@src/types/task";
import TaskService from "@src/services/task";

const queries = {
  getCompetitions: async (parent: any, args: any, context: Context) => {
    return await CompetitionService.getCompetitions(context);
  },
  getCompetitionById: async (parent: any, args: { id: string }, context: Context) => {
    return await CompetitionService.getCompetitionById(args.id, context);
  },
  checkUserCompetition: async (parent: any, args: { id: string }, context: Context) => {
    return await CompetitionService.checkUserCompetition(args.id, context);
  }
};

const mutations = {
  createCompetition: async (
    parent: any,
    args: { payload: ICreateCompetitionInput },
    context: Context
  ) => {
    return await CompetitionService.createCompetition(args.payload, context);
  },
  joinCompetition : async (
    parent: any,
    args: { payload: IJoinCompetitionInput },
    context: Context
  )=>{
    return await CompetitionService.joinCompetition(args.payload, context);
  }
};

const extraResolvers = {
    Competition: {
        tasks: async (parent: ICompetition, args: any, context: Context) => {
            return Promise.all(parent.tasks.map(async (task:ITask)=>{
              return TaskService.getTaskById(task._id as string,context);
            })
            )
        }
    }
}

export const resolvers = {
  queries,
  mutations,
  extraResolvers
};
