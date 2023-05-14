import ServiceList from "../../components/services/list";
import { useServices } from "./hooks/useServices";

const Services = () => {
  const { serviceList, sidebarText, title, description } = useServices();

  return (
    <div className="min-h-screen  bg-[#E5E5E5] flex justify-center items-center">
      <ServiceList
        serviceList={serviceList}
        sidebarText={sidebarText}
        title={title}
        description={description}
      />
    </div>
  );
};

export default Services;
