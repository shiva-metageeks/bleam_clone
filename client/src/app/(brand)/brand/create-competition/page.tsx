"use client";
import React, { useCallback, useState } from "react";
import CreateCompetition from "@/components/competition/create-competition";
import {
  CompetitionFormData,
  CompetitionPrize,
} from "@/types/competition/competition";
import { useCreateCompetition } from "@/hooks/competition/competition";
import { toast } from "react-hot-toast";
import { getUploadUrl, uploadImageToS3 } from "@/utils/helper/aws/s3";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import configEnv from "@/utils/imports/configEnv";
import { useGetCurrentBrand } from "@/hooks/brand/brand";

const CreateCompetitionPage = () => {
  const { mutate: createCompetition } = useCreateCompetition();
  const { brand } = useGetCurrentBrand();
  console.log("brand", brand);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    });
    setSelectedFile(filesWithPreview[0]);
    setPreview(filesWithPreview[0].preview);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxFiles: 1,
  });

  const [competitionFormData, setCompetitionFormData] =
    useState<CompetitionFormData>({
      competitionName: "",
      competitionDescription: "",
      competitionImageUrl: "",
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

  const handleCreateCompetition = async () => {
    console.log(competitionFormData);

    if (
      competitionFormData.competitionName === "" ||
      competitionFormData.competitionDescription === ""
    ) {
      toast.error("Please provide basic details");
      return;
    }

    if (
      competitionFormData.competitionStartDate === "" ||
      competitionFormData.competitionEndDate === ""
    ) {
      toast.error("Please provide start and end dates");
      return;
    }

    if (
      competitionFormData.competitionPrize.some(
        (prize) =>
          prize.title === "" || prize.description === "" || prize.points === 0
      )
    ) {
      toast.error("Please provide prizes");
      return;
    }

    if (competitionFormData.competitionTerms === "") {
      toast.error("Please provide terms and conditions");
      return;
    }

    if (
      competitionFormData.competitionStartDate >=
      competitionFormData.competitionEndDate
    ) {
      toast.error("Start date should be less than end date");
      return;
    }

    const presignedUrl: string | null = await getUploadUrl(
      `${brand?.email}/${selectedFile?.name}`,
      selectedFile?.type as string
    );

    if (!presignedUrl) {
      toast.error("Failed to upload image . please try again after some times");
      return;
    }
    console.log("presignedUrl", presignedUrl);

    const isUploaded = await uploadImageToS3(
      presignedUrl,
      selectedFile as File
    );
    if (!isUploaded) {
      toast.error("Failed to upload image . Please try again later");
      return;
    }

    const newProfileImageUrl = `${configEnv.S3_BUCKET_URL}/${brand?.email}/${selectedFile?.name}`;
    console.log("newProfileImageUrl", newProfileImageUrl);

    createCompetition(
      {
        description: competitionFormData.competitionDescription,
        name: competitionFormData.competitionName,
        startDate: competitionFormData.competitionStartDate as string,
        endDate: competitionFormData.competitionEndDate as string,
        imageUrl: newProfileImageUrl,
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
        },
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
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      preview={preview}
      selectedFile={selectedFile}
      loader={loader}
    />
  );
};

export default CreateCompetitionPage;
