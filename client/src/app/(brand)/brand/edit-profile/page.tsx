"use client";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "@/components/brand/editProfile";
import { useGetCurrentBrand, useUpdateBrand } from "@/hooks/brand/brand";
import { Brand } from "@/gql/graphql";
import { editFormType } from "@/types/user/brand";
import toast from "react-hot-toast";
import { getUploadUrl, uploadImageToS3 } from "@/utils/helper/aws/s3";
import { useDropzone } from "react-dropzone";
import configEnv from "@/utils/imports/configEnv";
import { useRouter } from "next/navigation";

const EditBrandProfilePage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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
  const { mutate: updateBrand } = useUpdateBrand();
  const { brand } = useGetCurrentBrand();
  console.log("brand", brand);
  const [editForm, setEditForm] = useState<editFormType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    profileImageUrl: "",
    organizationName: "",
    website: "",
  });
  const [loader, setLoader] = useState(false);
  // console.log("editForm", editForm);
  const handleUpdateBrand = async () => {
    const { name, bio, organizationName, website } = editForm;

    if (selectedFile && (selectedFile.size > 2* 1024 * 1024 || !selectedFile.type.includes("image/jpeg" || "image/png" || "image/jpg"))) {
      toast.error("Please upload a valid .jpeg, .png, .jpg file. File size should be less than 2MB.");
      return;
    }
    setLoader(true);
  
    const presignedUrl: string | null = await getUploadUrl(
      brand?.email as string,
      selectedFile?.type as string
    );
    console.log("presignedUrl", presignedUrl);

    if(!presignedUrl){
      toast.error("Failed to upload image . please try again after some times");
      return;
    }

    const isUploaded = await uploadImageToS3(presignedUrl, selectedFile as File);
    if(!isUploaded){
      toast.error("Failed to upload image . Please try again later");
      return;
    }

    const newProfileImageUrl = `${configEnv.S3_BUCKET_URL}/${brand?.email}`;

    updateBrand(
      { name, bio, organizationName, website, profileImageUrl: newProfileImageUrl },
      {
        onSuccess: () => {
          toast.success("Brand updated successfully");
          router.push("/brand/profile");
        },
        onError: () => {
          toast.error("Brand updated failed");
        },
      }
    );
    setLoader(false);
  };

  useEffect(() => {
    if (brand) {
      setEditForm({
        ...editForm,
        name: brand.name ?? "",
        email: brand.email ?? "",
        bio: brand.bio ?? "",
        profileImageUrl: brand.profileImageUrl ?? "",
        organizationName: brand.organizationName ?? "",
        website: brand.website ?? "",
      });
    }
  }, [brand]);
  return (
    <EditProfile
      brand={brand as Brand}
      handleUpdateBrand={handleUpdateBrand}
      editForm={editForm}
      setEditForm={setEditForm}
      selectedFile={selectedFile}
      loader={loader}
      preview={preview}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
    />
  );
};

export default EditBrandProfilePage;
