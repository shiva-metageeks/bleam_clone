import CompetitionService from "@src/services/competition";
import { ICreateCompetitionInput } from "@src/types/competition";
import { Context } from "@src/types/types";

const queries = {
  getCompetitions: async (parent: any, args: any, context: Context) => {
    return await CompetitionService.getCompetitions(context);
  },
  getCompetitionById: async (parent: any, args: { id: string }, context: Context) => {
    return await CompetitionService.getCompetitionById(args.id, context);
  },
};

const mutations = {
  createCompetition: async (
    parent: any,
    args: { payload: ICreateCompetitionInput },
    context: Context
  ) => {
    return await CompetitionService.createCompetition(args.payload, context);
  },
};

export const resolvers = {
  queries,
  mutations,
};
