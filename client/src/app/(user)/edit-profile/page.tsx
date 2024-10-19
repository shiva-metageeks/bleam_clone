"use client";
import React, { useEffect, useState } from "react";
import EditProfile from "@/components/user/editProfile";
import { useGetCurrentUser, useUpdateUser } from "@/hooks/user";
import { User } from "@/gql/graphql";
import { editFormType } from "@/types/user/user";

const EditUserProfilePage = () => {
  const { mutate: updateUser } = useUpdateUser();
  const { user } = useGetCurrentUser();
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
  console.log("editForm", editForm);

  const handleUpdateUser = () => {
    setLoader(true);
    updateUser(
      {
        name: editForm.name,
        email: editForm.email,
        bio: editForm.bio,
        profileImageUrl: editForm.profileImageUrl,
      },
      {
        onSuccess: () => {},
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
      loader={loader}
    />
  );
};

export default EditUserProfilePage;
