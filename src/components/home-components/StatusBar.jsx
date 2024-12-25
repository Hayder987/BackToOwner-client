import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const StatusBar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <motion.div 
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="bg-blue-600 py-12 ">
        <div className="container mx-auto grid gap-10 grid-cols-2 lg:grid-cols-4">
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">{t('statusHeading1')}</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
              {t('statusDesc1')}
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">{t('statusHeading2')}</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
            {t('statusDesc2')}
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">{t('statusHeading3')}</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
            {t('statusDesc3')}
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">{t('statusHeading4')}</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
            {t('statusDesc4')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatusBar;
