"use client";
import React, { useCallback, useEffect, useState } from "react";
import EditProfile from "@/components/user/editProfile";
import { useGetCurrentUser, useUpdateUser } from "@/hooks/user";
import { User } from "@/gql/graphql";
import { editFormType } from "@/types/user/user";
import { getUploadUrl, uploadImageToS3 } from "@/utils/helper/aws/s3";
import { useDropzone } from "react-dropzone";
import configEnv from "@/utils/imports/configEnv";
import {toast} from "react-hot-toast"

const EditUserProfilePage = () => {
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
  const { mutate: updateUser } = useUpdateUser();
  const { user } = useGetCurrentUser();
  console.log("user", user);
  const [editForm, setEditForm] = useState<editFormType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    profileImageUrl: "",
    username: "",
  });
  const [loader, setLoader] = useState(false);
  // console.log("editForm", editForm);

  const handleUpdateUser = async () => {
    const {name,email,bio,profileImageUrl} = editForm;

    if (selectedFile && (selectedFile.size > 2* 1024 * 1024 || !selectedFile.type.includes("image/jpeg" || "image/png" || "image/jpg"))) {
      toast.error("Please upload a valid .jpeg, .png, .jpg file. File size should be less than 2MB.");
      return;
    }

    setLoader(true);
    const presignedUrl: string | null = await getUploadUrl(
      user?.email as string,
      selectedFile?.type as string
    );

    if(!presignedUrl){
      toast.error("Failed to upload image . please try again after some times");
      return;
    }

  const isUploaded = await uploadImageToS3(presignedUrl, selectedFile as File);
    if(!isUploaded){
      toast.error("Failed to upload image . Please try again later");
      return;
    }

    const newProfileImageUrl = `${configEnv.S3_BUCKET_URL}/${user?.email}`;

    updateUser(
      {
       name,email,bio,profileImageUrl:newProfileImageUrl
      },
      {
        onSuccess: () => {
          toast.success("User updated successfully");
        },
        onError: (error) => {
          console.log("error", error);
        },
      }
    );
    setLoader(false);
  };

  useEffect(() => {
    if (user) {
      setEditForm({
        ...editForm,
        name: user.name ?? "",
        email: user.email ?? "",
        bio: user.bio ?? "",
        profileImageUrl: user.profileImageUrl ?? "",
        username: user.username ?? "",
      });
    }
  }, [user]);
  return (
    <EditProfile
      user={user as User}
      handleUpdateUser={handleUpdateUser}
      editForm={editForm}
      setEditForm={setEditForm}
      selectedFile={selectedFile}
      setSelectedFile={setSelectedFile}
      isDragActive={isDragActive}
      loader={loader}
      preview={preview}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
    />
  );
};

export default EditUserProfilePage;
