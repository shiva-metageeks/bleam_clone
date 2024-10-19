import { Competition } from "@src/models/competition/competition"
import Brand from "@src/models/user/brand"
import { ICreateCompetitionInput } from "@src/types/competition"
import { Context } from "@src/types/types";

class CompetitionService {
    public static async createCompetition(input: ICreateCompetitionInput, context: Context) {
        if(!context.brand || !context.brand._id){
            throw new Error("Unauthorized");
        }
        const competition = await Competition.create({...input, brand: context.brand._id});
        if(!competition){
            throw new Error("Failed to create competition");
        }
        console.log(competition);

        const brand = await Brand.findByIdAndUpdate(context.brand._id, {$push: {competitions: competition._id}});
        if(!brand){
            throw new Error("Failed to update brand");
        }
        return competition;
    }

    public static async getCompetitions(context: Context) {
        const competitions = await Competition.find();
        return competitions;
    }
    public static async getCompetition(id: string, context: Context) {
        const competition = await Competition.findById(id);
        return competition;
    }
}

export default CompetitionService;

