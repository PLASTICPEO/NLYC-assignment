import api from "..";
import { SERVICE } from "./service.enum";
import { ServiceList } from "./service.interface";

export const getServiceList = () => {
  return api.get<ServiceList>(SERVICE.list);
};
