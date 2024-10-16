import { Competition } from "@src/models/competition/competition"
import { ICreateCompetitionInput } from "@src/types/competition"

class CompetitionService {
    public static async createCompetition(input: ICreateCompetitionInput) {
        const competition = await Competition.create(input)
        return competition;
    }

    public static async getCompetitions() {
        const competitions = await Competition.find();
        return competitions;
    }
    public static async getCompetition(id: string) {
        const competition = await Competition.findById(id);
        return competition;
    }
}

export default CompetitionService;

