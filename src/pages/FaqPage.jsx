import { useTranslation } from "react-i18next";
import Faq from "../components/home-components/Faq";

const FaqPage = () => {
    const { t } = useTranslation();
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center mb-6">{t("faqTitle")}</h1>
      <p className="md:w-7/12 mb-12 mx-auto text-center font-medium text-gray-600">
        {t("faqDes")}
      </p>
      <Faq></Faq>
    </div>
  );
};

export default FaqPage;
