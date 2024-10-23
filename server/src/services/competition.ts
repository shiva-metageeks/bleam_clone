import { Competition } from "@src/models/competition/competition"
import { UserCompetition } from "@src/models/competition/userCompetiton";
import Brand from "@src/models/user/brand"
import User from "@src/models/user/user"
import { ICreateCompetitionInput,IJoinCompetitionInput } from "@src/types/competition"
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
        const brand = await Brand.findByIdAndUpdate(context.brand._id, {$push: {competitions: competition._id}});
        if(!brand){
            throw new Error("Failed to update brand");
        }
        return competition;
    }
    public static async joinCompetition(input:IJoinCompetitionInput, context: Context) {
        console.log("context",context);
        if(!context.user || !context.user._id){
            throw new Error("Unauthorized");
        }
        const newCompetitionUser={
            user: context.user._id,
            competition: input.competitionId,
            pointsEarned: 0,
            rank: 0,
            completed: "not completed"
        }
        const competitionUser=await UserCompetition.create(newCompetitionUser);
        if(!competitionUser){
            throw new Error("Failed to join competition");
        }

        const userToUpdate=await User.findById(context.user._id);
        if(!userToUpdate){
            throw new Error("Failed to update user");
        }
        userToUpdate?.joinedCompetitions?.push(competitionUser);
        await userToUpdate.save();

        const competition=await Competition.findById(input.competitionId);
        if(!competition){
            throw new Error("Failed to update user");
        }
        competition.participants?.push(competitionUser);
        await competition.save();

        return {success:true,message:"Successfully joined competition"};
    }

    public static async getCompetitions(context: Context) {
        const competitions = await Competition.find();
        return competitions;
    }
    public static async getCompetitionById(id: string, context: Context) {
        const competition = await Competition.findById(id);
        return competition;
    }
    public static async checkUserCompetition(id: string, context: Context) {
        if(!context.user || !context.user._id){
            throw new Error("Unauthorized");
        }
        console.log("competition",context.user._id,id);
        const userCompetition = await UserCompetition.findOne({user: context.user?._id, competition: id});
        console.log("user competition",userCompetition);
        if(!userCompetition){
            return {
                success: false,
                message: "User not joined this competition",
                joined: false
            }
        }
        return {
            success: true,
            message: "User joined this competition",
            joined: true,
            completed: userCompetition.completed,
            pointsEarned: userCompetition.pointsEarned,
            rank: userCompetition.rank,
        };
    }
}

export default CompetitionService;

