export type Competition = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    terms: string;
    startDate: string;
    endDate: string;
}

export type CreateCompetitionResponse={
    createCompetition :{
    id:string;
    name:string;
    description:string;
    imageUrl:string;
    terms:string;
    startDate:string;
    endDate:string;
  }
}

export type Response={
    success:boolean;
    message:string;
}

export type checkUserCompetitionResponse={
    success:boolean;
    joined:boolean;
    completed:string;
    pointsEarned:number;
    rank:number
}

export interface CompetitionByIdQueryResult {
    getCompetitionById: Competition
}

export interface checkUserCompetitionQueryResult {
    checkUserCompetition: checkUserCompetitionResponse
}

export interface CompetitionsQueryResult {
    getCompetitions:Competition[]
}

export interface JoinCompetitionResult {
    joinCompetition: Response
}