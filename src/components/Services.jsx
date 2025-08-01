import ServicesCard from "./ServicesCard";
import { faLaptop, faDesktop, faPlateWheat } from "@fortawesome/free-solid-svg-icons";

const servicesObject = [
  {
    serviceId: 1,
    icon: faLaptop,
    serviceName: "Web Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure error fugiat ad cum exercitationem atque, animi soluta, ducimus voluptatem aperiam quisquam ut beatae tempora voluptate omnis, modi ipsa rem!",
  },
  {
    serviceId: 2,
    icon: faDesktop,
    serviceName: "Desktop Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure error fugiat ad cum exercitationem atque, animi soluta, ducimus voluptatem aperiam quisquam ut beatae tempora voluptate omnis, modi ipsa rem!",
  },
  {
    serviceId: 3,
    icon: faPlateWheat,
    serviceName: "API Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure error fugiat ad cum exercitationem atque, animi soluta, ducimus voluptatem aperiam quisquam ut beatae tempora voluptate omnis, modi ipsa rem!",
  }
];

const Services = () => (
  <div className="p-5 md:p-20">
    <p className="text-sm text-red-500">MY SERVICES</p>
    <p className="text-2xl font-semibold">What I Do</p>
    <div className="flex gap-5 mt-3">
      {
        servicesObject.map((service) => 
            <ServicesCard key={service.serviceId } icon={service.icon} serviceName={service.serviceName} description={service.description}/>
        )
      }
    </div>
  </div>
);

export default Services;
