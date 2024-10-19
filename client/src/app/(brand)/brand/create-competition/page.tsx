"use client";
import React, { useState } from "react";
import CreateCompetition from "@/components/competition/create-competition";
import {
  CompetitionFormData,
  CompetitionPrize,
} from "@/types/competition/competition";
import { useCreateCompetition } from "@/hooks/competition";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateCompetitionPage = () => {
  const {mutate:createCompetition} = useCreateCompetition();
  const router = useRouter();
  const [competitionFormData, setCompetitionFormData] = 
    useState<CompetitionFormData>({
      competitionName: "",
      competitionDescription: "",
      competitionImageUrl: "adfka",
      competitionStartDate: "",
      competitionEndDate: "",
      competitionTerms: "",
      competitionPrize: [
        { rank: 1, title: "", description: "", points: 0 },
        { rank: 2, title: "", description: "", points: 0 },
        { rank: 3, title: "", description: "", points: 0 },
      ],
    });
  const [activeStep, setActiveStep] = useState<
    "basic" | "tasks" | "prize" | "terms"
  >("basic");

  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  const handleInputChange = (
    index: number,
    field: keyof CompetitionPrize,
    value: string | number
  ) => {
    const updatedPrizes = [...competitionFormData.competitionPrize];
    updatedPrizes[index] = {
      ...updatedPrizes[index],
      ["rank"]: index + 1,
      [field]: value,
    };

    setCompetitionFormData({
      ...competitionFormData,
      competitionPrize: updatedPrizes,
    });
  };

  const handleCreateCompetition = () => {
    console.log(competitionFormData);

    if(competitionFormData.competitionName === "" || competitionFormData.competitionDescription === ""){
      toast.error("Please provide basic details");
      return;
    }

    if(competitionFormData.competitionStartDate === "" || competitionFormData.competitionEndDate === ""){
      toast.error("Please provide start and end dates");
      return;
    }

    if(competitionFormData.competitionPrize.some(prize => prize.title === "" || prize.description === "" || prize.points === 0)){
      toast.error("Please provide prizes");
      return;
    }

    if(competitionFormData.competitionTerms === ""){
      toast.error("Please provide terms and conditions");
      return;
    }

    if(competitionFormData.competitionStartDate >= competitionFormData.competitionEndDate){
      toast.error("Start date should be less than end date");
      return;
    }

    createCompetition({
      description: competitionFormData.competitionDescription,
      name: competitionFormData.competitionName,
      startDate: competitionFormData.competitionStartDate as string,
      endDate: competitionFormData.competitionEndDate as string,
      imageUrl: competitionFormData.competitionImageUrl as string,
      terms: competitionFormData.competitionTerms,
      prizes: competitionFormData.competitionPrize,
    },
    {
      onSuccess: (data) => {
        toast.success("Competition created successfully");
        router.push(`/brand/competition/${data?.createCompetition?.id}`);
      },
      onError: () => {
        toast.error("Failed to create competition");
      }
    }
    );

  };


  return (
    <CreateCompetition
      CompetitionFormData={competitionFormData}
      setCompetitionFormData={setCompetitionFormData}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      handleToggle={handleToggle}
      handleInputChange={handleInputChange}
      expanded={expanded}
      handleCreateCompetition={handleCreateCompetition}
    />
  );
};

export default CreateCompetitionPage;
