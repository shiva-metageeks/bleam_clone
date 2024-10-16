import CompetitionService from "@src/services/competition";
import { ICreateCompetitionInput } from "@src/types/competition";
import { Context } from "@src/types/types";

const queries = {
  getCompetitions: async (parent: any, args: any, context: Context) => {
    // if (!context.user) {
    //   throw new Error("Unauthorized");
    // }
    return await CompetitionService.getCompetitions();
  },
  getCompetition: async (parent: any, args: { id: string }, context: Context) => {
    // if (!context.user) {
    //   throw new Error("Unauthorized");
    // }
    return await CompetitionService.getCompetition(args.id);
  },
};

const mutations = {
  createCompetition: async (
    parent: any,
    args: { payload: ICreateCompetitionInput },
    context: Context
  ) => {
    // if (!context.user) {
    //   throw new Error("Unauthorized");
    // }
    return await CompetitionService.createCompetition(args.payload);
  },
};

export const resolvers = {
  queries,
  mutations,
};
