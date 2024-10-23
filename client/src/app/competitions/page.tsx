"use client";
import React, { useState } from "react";
import UserNavbar from "@/components/navbar/userNavbar";
import Filter from "@/components/competition/filter";
import CompetitionGrid from "@/components/competition/competitionGrid";
import { useGetCompetitions } from "@/hooks/competition/competition";
import {Competition} from "@/hooks/competition/types";

const CompetitionsPage = () => {
  const {competitions} = useGetCompetitions();
  return (
      <div className="main flex justify-between gap-4 p-4">
        <Filter />
        <CompetitionGrid competitions={competitions as Competition[]} />
      </div>
  );
};

export default CompetitionsPage;
