import { motion } from 'framer-motion'
import IconCode from '../../assets/Services/1.svg'
import IconDev from '../../assets/Services/2.svg'
import IconChat from '../../assets/Services/3.svg'
import CustomSection from '../../components/ui/CustomSection'
import CustomTitle from '../../components/ui/CustomTitle'
import ServiceItem, { IServiceItem } from '../../components/ui/ServiceItem'
const serviceItems: IServiceItem[] = [
  {
    id: 1,
    title: 'Вёрстка проектов',
    text: 'Сделаю качественную вёрстку вашего  проекта по предоставленному макету или примеру',
    icon: IconCode,
  },
  {
    id: 2,
    title: 'Посадка на CMS',
    text: 'Интегрирую ваш проект в одну из популярных CMS',
    icon: IconDev,
  },
  {
    id: 3,
    title: 'Поддержка сайта',
    text: 'Гарантирую поддержку вашего сайта на протяжениии 30 дней после сдача проекта',
    icon: IconChat,
  },
]

const Service = () => {
  return (
    <CustomSection id={'services'}>
      <CustomTitle className={`mb-[60px] lg:text-center`} text={'Услуги'} />
      <motion.div
        className={`flex w-full flex-wrap items-start justify-between gap-5 lg:flex-col`}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring' }}
      >
        {serviceItems.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </motion.div>
    </CustomSection>
  )
}

export default Service
