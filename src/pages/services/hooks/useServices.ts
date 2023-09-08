import { useEffect, useState } from "react";
import { getServiceList } from "../../../api/service";
import { ServiceItems } from "../../../api/service/service.interface";

export const useServices = () => {
  const [serviceList, setServiceList] = useState<ServiceItems>([]);
  const [title, setTitle] = useState<string>("");
  const [sidebarText, setSidebarText] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    getServiceList().then((response) => {
      console.log(response);
      setServiceList(response.data.data.items);
      setTitle(response.data.data.title);
      setSidebarText(response.data.data.sidebar_text);
      setDescription(response.data.data.description);
    });
  }, []);

  return { serviceList, title, sidebarText, description };
};
