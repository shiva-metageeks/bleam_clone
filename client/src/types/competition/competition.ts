export type CompetitionFormData = {
  competitionName: string;
  competitionDescription: string;
  competitionImageUrl: string;
  competitionStartDate: string;
  competitionEndDate: string;
  competitionTerms: string;
  competitionPrize: CompetitionPrize[];
};

export type CompetitionPrize = {
  rank: number;
  title: string;
  description: string;
  points: number;
};
