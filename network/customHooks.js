"use client";
const { useQuery } = require("@tanstack/react-query");
import { getProfile } from "./apiCalls";

export const useGetProfile = ({ username }) => {
  return useQuery({
    queryKey: ["get-profile", username],
    queryFn: () => getProfile({ username }),
  });
};
