import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const featuresData = [
  {
    icon: (
      <FaShippingFast
        color="gray"
        className="text-4xl md:text-5xl lg:text-6xl"
      />
    ),
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders over $100",
  },
  {
    icon: (
      <MdOutlineSupportAgent
        className="text-4xl md:text-5xl lg:text-6xl"
        color="gray"
      />
    ),
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your inquiries and needs.",
  },
  {
    icon: (
      <TbTruckReturn
        className="text-4xl md:text-5xl lg:text-6xl"
        color="gray"
      />
    ),
    title: "Money back",
    description: "Our Money-Back Guarantee ensures your satisfaction.",
  },
];

const Features = () => {
  return (
    <div className="h-full w-full p-2 md:p-4 lg:p-6">
      <div className="h-full w-full py-12 px-4 md:px-6 border-t grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 text-center font-Gruppo">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center space-y-2 py-6 md:py-10 lg:py-12"
          >
            {feature.icon}
            <span className="uppercase tracking-wider text-[12px] md:text-lg font-extrabold">
              {feature.title}
            </span>
            <span className="max-w-sm text-gray-600 font-extrabold text-[11px] md:text-[14px] xl:text-lg">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
