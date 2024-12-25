import ServiceCard from "./ServiceCard";
import found from "../../assets/logo/found.png";
import notifiction from "../../assets/logo/notification.png";
import report from "../../assets/logo/report.png";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-20 lg:mb-28 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">{t('serviceHeading')}</h1>
      <p className="md:w-8/12 mb-12 mx-auto text-center font-medium text-gray-600">
       {t('serviceDesc')}
      </p>
      <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          logo={found}
          title={`${t('serviceCardTitle1')}`}
          desc={`${t('serviceCardDesc1')}`}
        ></ServiceCard>
        <ServiceCard
          logo={notifiction}
          title={`${t('serviceCardTitle2')}`}
          desc={`${t('serviceCardDesc2')}`}
        ></ServiceCard>
        <ServiceCard
          logo={report}
          title={`${t('serviceCardTitle3')}`}
          desc={`${t('serviceCardDesc3')}`}
        ></ServiceCard>
      </div>
      
    </div>
  );
};

export default OurServices;
