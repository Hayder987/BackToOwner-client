import ServiceCard from "./ServiceCard";
import found from "../../assets/logo/found.png";
import notifiction from "../../assets/logo/notification.png";
import report from "../../assets/logo/report.png";

const OurServices = () => {
  return (
    <div className="mb-20 lg:mb-28 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <p className="md:w-8/12 mb-12 mx-auto text-center font-medium text-gray-600">
        BackToOwner provides a simple and secure way to reconnect lost items
        with their rightful owners. From reporting lost items to listing found
        belongingsour platform offers tailored tools to ensure your search is
        quick, effective, and community-driven. With automated matching and easy
        communication, we make finding whats lost easier than ever.
      </p>
      <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          logo={found}
          title={"Lost Item Reporting"}
          desc={
            "Allow users to quickly report lost items by uploading details like title, description, location, and photos. Provide categorized options to make searching easier (e.g., electronics, wallets, documents, etc"
          }
        ></ServiceCard>
        <ServiceCard
          logo={notifiction}
          title={"Found Item Listing"}
          desc={
            "Let users list found items to help reunite them with their rightful owners. Include location-based tagging to connect nearby users. Allow attaching images for better identification."
          }
        ></ServiceCard>
        <ServiceCard
          logo={report}
          title={"Item Match Notifications"}
          desc={
            "Automatically notify users when a found item matches their lost item listing. Use keywords, dates, and locations for intelligent matching.Enable secure messaging between users to facilitate "
          }
        ></ServiceCard>
      </div>
      
    </div>
  );
};

export default OurServices;
