import bg from '../../assets/Hero/bg.webp'
import CustomSection from '../../components/ui/CustomSection'

const Hero = () => {
  return (
    <CustomSection id={'hero'}
      className={`h-dvh bg-cover bg-center bg-no-repeat text-white`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={`flex h-full flex-col justify-center leading-normal`}>
        <h1 className={`max-w-[530px] text-[90px] font-bold !leading-[1.4] md:leading-[1.4] lg:text-5xl`}>
          <span className={`!lg:text-3xl mb-2 block text-5xl font-normal xl:text-4xl`}>Привет, я Иван Иванов</span>
          frontend- разработчик
        </h1>
      </div>
    </CustomSection>
  )
}

export default Hero
