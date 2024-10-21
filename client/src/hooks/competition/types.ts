export type Competition = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    terms: string;
    startDate: string;
    endDate: string;
}

export interface CompetitionByIdQueryResult {
    getCompetitionById: Competition
}