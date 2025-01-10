import { useTranslation } from "react-i18next";
import faqImg from "../../assets/images/faq2.jpg";
import { motion } from "motion/react";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mb-20 lg:mb-28 rounded-lg overflow-hidden bg-white px-6 py-10">
      {/* faq section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* img */}
        <motion.div 
         whileInView={{ x: [-200, 0],  }}
         transition={{ duration: 1.5 }}
         viewport={{ once: false, amount: 0.5 }}
        className="lg:w-1/2 flex overflow-hidden justify-center items-center">
          <img src={faqImg} alt="" className="w-full h-full rounded-lg max-h-full object-cover" />
        </motion.div>
        {/* text */}
        <motion.div
        whileInView={{ y: [-200, 0],  }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
         className="lg:w-1/2 overflow-hidden  px-6 py-10">
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('FaqQ1')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA1")}</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('FaqQ1')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA1")}</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ2')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA2")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ3')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA3")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ4')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA4")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ5')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA5")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ6')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA6")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {t('faqQ7')}
            </div>
            <div className="collapse-content">
              <p>{t("faqA7")}</p>
            </div>
          </div>
          
          
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
