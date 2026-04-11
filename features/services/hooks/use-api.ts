import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getServicesInfo,
  getStaffInfo,
  createService,
  createStaff,
} from "../api/api";
import { Services, Staff } from "../types/types";

export const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => getServicesInfo(),
    refetchOnMount: true,
  });
};

export const useGetStaff = () => {
  return useQuery({
    queryKey: ["staff"],
    queryFn: () => getStaffInfo(),
  });
};

export const useCreateServices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (serviceData: Services) => createService(serviceData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
  });
};

export const useCreateStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (staffDetails: Staff) => createStaff(staffDetails),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
  });
};
