import React from "react";
import { icons } from "../../utils/imports/config";
const { LuSettings2, FaGift, IoMdSettings, TbShieldQuestion } = icons;
import {
  CompetitionFormData,
  CompetitionPrize,
} from "@/types/competition/competition";
import CompetitionSteps from "@/components/competition/competitionSteps";

const CreateCompetition = ({
  CompetitionFormData,
  setCompetitionFormData,
  activeStep,
  setActiveStep,
  handleToggle,
  handleInputChange,
  expanded,
  handleCreateCompetition,
  getRootProps,
  getInputProps,
  preview,
  selectedFile,
  loader,
}: {
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
  activeStep: "basic" | "tasks" | "prize" | "terms";
  setActiveStep: (step: "basic" | "tasks" | "prize" | "terms") => void;
  handleToggle: (index: number) => void;
  handleInputChange: (
    index: number,
    field: keyof CompetitionPrize,
    value: string | number
  ) => void;
  expanded: number | null;
  handleCreateCompetition: () => void;
  getRootProps: () => any;
  getInputProps: () => any;
  preview: string | null;
  selectedFile: File | null;
  loader: boolean;
}) => {
  return (
    <div className="w-full h-screen p-4">
      <div className="flex flex-col border-b border-gray-200 p-2">
        <div className="flex justify-between items-center mx-4">
          <div className="text-2xl font-bold">New Competition</div>
          <div className="flex justify-center items-center gap-2">
            <button className="px-4 py-2 bg-white shadow-md border-1 border-gray-950 text-black rounded-full">
              Cancel
            </button>
            <button
              onClick={handleCreateCompetition}
              disabled={loader}
              className="px-4 py-2 bg-orange-500 shadow-md text-white rounded-full"
            >
              {loader ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 mx-4">
          <div
            onClick={() => setActiveStep("basic")}
            className={`flex cursor-pointer justify-center items-center px-4 py-2 hover:bg-gray-200 rounded-lg font-semibold shadow-sm border-1 border-zinc-700 ${
              activeStep === "basic" ? "bg-gray-200" : ""
            }`}
          >
            <span className="mr-2">
              <LuSettings2 />
            </span>
            <span>Basic Details</span>
          </div>
          <div
            onClick={() => setActiveStep("terms")}
            className={`flex cursor-pointer justify-center items-center px-4 py-2 hover:bg-gray-200 rounded-lg font-semibold shadow-sm border-1 border-zinc-700 ${
              activeStep === "terms" ? "bg-gray-200" : ""
            }`}
          >
            <span className="mr-2">
              <TbShieldQuestion />
            </span>
            <span>Terms</span>
          </div>
          <div
            onClick={() => setActiveStep("prize")}
            className={`flex cursor-pointer justify-center items-center px-4 py-2 hover:bg-gray-200 rounded-lg font-semibold shadow-sm border-1 border-zinc-700 ${
              activeStep === "prize" ? "bg-gray-200" : ""
            }`}
          >
            <span className="mr-2">
              <FaGift />
            </span>
            <span>Prizes</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 p-4 border-r h-screen border-zinc-400">
          <CompetitionSteps
            CompetitionFormData={CompetitionFormData}
            expanded={expanded}
            setCompetitionFormData={setCompetitionFormData}
            step={activeStep}
            handleToggle={handleToggle}
            handleInputChange={handleInputChange}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            preview={preview}
            selectedFile={selectedFile}
          />
        </div>
        <div className="w-1/2 p-4">
          <div className="flex justify-center items-center">
            Competition preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompetition;
