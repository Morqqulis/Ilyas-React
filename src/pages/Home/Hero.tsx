import { motion } from 'framer-motion'
import bg from '../../assets/Hero/bg.webp'
import CustomSection from '../../components/ui/CustomSection'

const Hero = () => {
  return (
    <CustomSection
      className={`text-white bg-center bg-no-repeat bg-cover h-dvh`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={`flex flex-col justify-center h-full leading-normal`}>
        <motion.h1
          className={`!lg:text-5xl !xl:text-[50px] max-w-[500px] !text-[90px] font-bold`}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: .5 } }}
        >
          <motion.span className={`block mb-2 text-5xl font-normal lg:text-3xl xl:text-4xl`}>
            Привет, я Иван Иванов
          </motion.span>
          frontend- разработчик
        </motion.h1>
      </div>
    </CustomSection>
  )
}

export default Hero
