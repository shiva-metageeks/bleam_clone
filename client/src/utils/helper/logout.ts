import { useQueryClient } from "@tanstack/react-query";
export const userLogout = async ({ redirectTo,router}: { redirectTo: string,router:any }) => {
  localStorage.removeItem("_hypd_token");
  localStorage.removeItem("_hypd_user_type");
  

  router.push(redirectTo);
};
