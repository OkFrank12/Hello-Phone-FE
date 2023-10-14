import { useQuery } from "@tanstack/react-query";
import { readAllContacts } from "../api/contactAPI";

export const useReadAllContacts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: readAllContacts,
  });

  return { data, isLoading };
};
