import React from "react";
import {
  CompetitionFormData,
  CompetitionPrize,
} from "@/types/competition/competition";
import {icons} from "@/utils/imports/config";
const {IoIosArrowForward,IoIosArrowDown,CiImageOn} = icons;

const competitionSteps = ({
  step,
  CompetitionFormData,
  setCompetitionFormData,
  handleToggle,
  handleInputChange,
  expanded,
  getRootProps,
  getInputProps,
  preview,
  selectedFile
}: {
  step: "basic" | "tasks" | "prize" | "terms";
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
  handleToggle: (index: number) => void;
  handleInputChange: (
    index: number,
    field: keyof CompetitionPrize,
    value: string | number
  ) => void;
  expanded: number | null;
  getRootProps: () => any;
  getInputProps: () => any;
  preview: string | null;
  selectedFile: File | null;
}) => {
  return (
    <div className="w-full p-4">
      {step === "basic" && (
        <BasicDetails
          CompetitionFormData={CompetitionFormData}
          setCompetitionFormData={setCompetitionFormData}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          preview={preview}
          selectedFile={selectedFile}
        />
      )}
      {step === "prize" && (
        <Prize
          CompetitionFormData={CompetitionFormData}
          setCompetitionFormData={setCompetitionFormData}
          handleToggle={handleToggle}
          handleInputChange={handleInputChange}
          expanded={expanded}
        />
      )}
      {step === "terms" && (
        <Terms
          CompetitionFormData={CompetitionFormData}
          setCompetitionFormData={setCompetitionFormData}
        />
      )}
    </div>
  );
};

export default competitionSteps;

const BasicDetails = ({
  CompetitionFormData,
  setCompetitionFormData,
  getRootProps,
  getInputProps,
  preview,
  selectedFile
}: {
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
  getRootProps: () => any;
  getInputProps: () => any;
  preview: string | null;
  selectedFile: File | null;
}) => {
  return (
    <div className="w-full flex flex-col justify-start">
      <div className="w-full flex flex-col justify-center">
        Fill in the basic details of the competition
      </div>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col justify-center gap-1 mb-4">
          <label
            htmlFor="competitionName"
            className="font-semibold text-gray-700 "
          >
            Name
          </label>
          <input
            type="text"
            id="competitionName"
            placeholder="my competition"
            name="competitionName"
            value={CompetitionFormData.competitionName}
            onChange={(e) =>
              setCompetitionFormData({
                ...CompetitionFormData,
                competitionName: e.target.value,
              })
            }
            className="p-2 border-2 border-zinc-400 rounded-md"
          />
        </div>
         <div className="w-full flex sm:flex-row flex-col sm:gap-4 gap-2 pb-4 mb-4 border-b">
         {
          preview ? (
            <div className="w-1/4 flex justify-center items-center">
              <img
                className="inline-block h-20 w-20 rounded-full"
              src={
                preview ||
                "/images/defaultProfilePic.png"
              }
                alt={selectedFile?.name || ""}
              />
            </div>
          ) : (
            <div className="w-1/4 flex justify-center items-center">
              <CiImageOn className="text-4xl" />
              </div>
            )
         }
            
            <div className="w-full flex border justify-center rounded-xl">
              <div
                {...getRootProps()}
                className="flex flex-col justify-center gap-2 p-4 cursor-pointer w-full"
              >
                <img
                  src="/images/drop file.svg"
                  alt="verified"
                  className="h-16 w-16 self-center "
                />

                <label
                  htmlFor="file-upload"
                  className="flex justify-center items-center gap-2 text-[#475467]"
                >
                  <span className="text-[#FFB604] font-semibold">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </label>
                {/* Hidden file input */}
                <input
                  {...getInputProps()}
                  id="file-upload"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        <div className="w-full flex flex-col justify-center gap-1 mb-4">
          <label
            htmlFor="competitionDescription"
            className="font-semibold text-gray-700 "
          >
            Description
          </label>
          <textarea
            id="competitionDescription"
            name="competitionDescription"
            placeholder="my competition description"
            value={CompetitionFormData.competitionDescription}
            onChange={(e) =>
              setCompetitionFormData({
                ...CompetitionFormData,
                competitionDescription: e.target.value,
              })
            }
            className="w-full p-2 border-2 border-zinc-400 rounded-md"
          />
        </div>
        <div className="w-full flex justify-between items-center gap-4 mb-2">
          <div className="w-full flex flex-col justify-center gap-1">
            <label
              htmlFor="competitionStartDate"
              className="font-semibold text-gray-700 "
            >
              Start Date
            </label>
            <input
              type="date"
              id="competitionStartDate"
              name="competitionStartDate"
              value={CompetitionFormData.competitionStartDate}
              onChange={(e) =>
                setCompetitionFormData({
                  ...CompetitionFormData,
                  competitionStartDate: e.target.value,
                })
              }
              className="p-2 border-2 border-zinc-400 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col justify-center gap-1">
            <label
              htmlFor="competitionEndDate"
              className="font-semibold text-gray-700 "
            >
              End Date
            </label>
            <input
              type="date"
              id="competitionEndDate"
              name="competitionEndDate"
              value={CompetitionFormData.competitionEndDate}
              onChange={(e) =>
                setCompetitionFormData({
                  ...CompetitionFormData,
                  competitionEndDate: e.target.value,
                })
              }
              className="p-2 border-2 border-zinc-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tasks = ({
  CompetitionFormData,
  setCompetitionFormData,
}: {
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
}) => {
  return (
    <div>
      <div>tasks</div>
    </div>
  );
};

const Prize = ({
  CompetitionFormData,
  setCompetitionFormData,
  handleToggle,
  handleInputChange,
  expanded,
}: {
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
  handleToggle: (index: number) => void;
  handleInputChange: (
    index: number,
    field: keyof CompetitionPrize,
    value: string | number
  ) => void;
  expanded: number | null;
}) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-start items-center mb-4">
        Add the prizes of the competition. Prizes are the rewards that the
        participants can win.
      </div>

      {/* Accordion for each prize */}
      {[1, 2, 3].map((prize, index) => (
        <div key={index} className="w-full flex flex-col mb-4">
          <div
            className={`font-semibold text-gray-700 rounded-md shadow-md cursor-pointer hover:bg-zinc-200 flex justify-between items-center px-4 py-2 ${expanded === index ? "bg-zinc-200" : ""} `}
            onClick={() => handleToggle(index)}
          >
            <div>{`${prize}st Rank Prize`}</div>
            <div>{expanded === index ? <IoIosArrowDown />:<IoIosArrowForward />}</div>
          </div>

          {expanded === index && (
            <div className="w-full flex flex-col justify-center gap-4 mt-2 p-4">
              <div className="w-full">
                <label
                  htmlFor={`competitionPrize${prize}Title`}
                  className="font-semibold text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id={`competitionPrize${prize}Title`}
                  name={`competitionPrize${prize}Title`}
                  value={
                    CompetitionFormData.competitionPrize[index]?.title || ""
                  }
                  onChange={(e) =>
                    handleInputChange(index, "title", e.target.value)
                  }
                  className= "w-full px-4 py-2 border-2 border-zinc-400 rounded-md"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor={`competitionPrize${prize}Description`} 
                  className="font-semibold text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id={`competitionPrize${prize}Description`}
                  name={`competitionPrize${prize}Description`}
                  value={
                    CompetitionFormData.competitionPrize[index]
                      ?.description || ""
                  }
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                  className= "w-full px-4 py-2 border-2 border-zinc-400 rounded-md"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor={`competitionPrize${prize}Points`}
                  className="font-semibold text-gray-700"
                >
                  points
                </label>
                <input
                  type="text"
                  id={`competitionPrize${prize}Points`}
                  name={`competitionPrize${prize}Points`}
                  value={
                    CompetitionFormData.competitionPrize[index]?.points ||
                    ""
                  }
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "points",
                      parseInt(e.target.value, 10)
                    )
                  }
                  className= "w-full px-4 py-2 border-2 border-zinc-400 rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Terms = ({
  CompetitionFormData,
  setCompetitionFormData,
}: {
  CompetitionFormData: CompetitionFormData;
  setCompetitionFormData: (data: CompetitionFormData) => void;
}) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-center items-center mb-2">
        Add the terms and conditions of the competition.terms and conditions are
        the rules that the participants must agree to before they can
        participate in the competition.
      </div>
      <div className="w-full flex flex-col justify-center gap-1 mb-2">
        <label
          htmlFor="competitionTerms"
          className="font-semibold text-gray-700 "
        >
          Terms
        </label>
        <textarea
          id="competitionTerms"
          name="competitionTerms"
          placeholder="my competition terms"
          value={CompetitionFormData.competitionTerms}
          onChange={(e) =>
            setCompetitionFormData({
              ...CompetitionFormData,
              competitionTerms: e.target.value,
            })
          }
          className="w-full p-2 border-2 border-zinc-400 rounded-md"
        />
      </div>
    </div>
  );
};
