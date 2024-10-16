export const userLogout = ({ redirectTo,router }: { redirectTo: string,router:any }) => {
  localStorage.removeItem("_hypd_token");
  router.push(redirectTo);
};
