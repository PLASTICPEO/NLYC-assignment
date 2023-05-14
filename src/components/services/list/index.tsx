import { ServiceListPropTypes } from "./list.types";

const ServiceList: React.FC<ServiceListPropTypes> = ({
  serviceList,
  sidebarText,
  title,
  description,
}) => {
  return (
    <>
      <div className="xl:flex xl:flex-wrap grid grid-cols-1 xl:h-auto h-screen w-full mb-8">
        <div className="text-sm  xl:w-full xl:h-[20%]  xl:pl-[10%] xl:pb-2.5 p-3 flex xl:justify-end justify-center  flex-col ">
          <p className="font-bold">{title}</p>
          <p>--</p>
          <p>{description}</p>
        </div>
        <div className="bg-[#CDC152] xl:w-[10%] flex jusify-center items-center">
          <p className="xl:rotate-[-90deg] font-bold m-auto">{sidebarText}</p>
        </div>
        <div className=" bg-[#161616] p-3 xl:w-[90%]">
          <ul className="grid xl:grid-cols-3 relative">
            {serviceList.map((listitems, index) => {
              return (
                <li
                  className="text-white font-roboto text-sm xl:h-32 xl:w-64 leading-4 m-3 font-light flex flex-col tracking-widest "
                  key={index}
                >
                  <span className="mb-1 text-white text-base font-normal leading-7 ">
                    {listitems.title}
                  </span>
                  {listitems.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
