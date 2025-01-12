import image from '../../assets/Skills/me.jpg'
import CustomSection from '../../components/ui/CustomSection'
import CustomTitle from '../../components/ui/CustomTitle'
import SkillLine, { ISkillLine } from '../../components/ui/SkillLine'

const skillNames: ISkillLine[] = [
  {
    name: 'HTML',
    value: 90,
  },
  {
    name: 'CSS',
    value: 90,
  },
  {
    name: 'JS',
    value: 80,
  },
]

const Skills = () => {
  return (
    <CustomSection className={`bg-[#F6F6F8]`}>
      <CustomTitle className={`mb-14`} text={'Навыки'} />
      <div className={`flex items-center justify-between gap-2.5 xl:flex-col xl:items-center xl:gap-5`}>
        <img src={image} alt="Human Image" width={415} height={450} />

        <div className={`flex w-full basis-[665px] flex-col gap-[85px] xl:gap-10`}>
          {skillNames.map((skillName) => (
            <SkillLine value={skillName.value} name={skillName.name} key={skillName.name} />
          ))}
        </div>
      </div>
    </CustomSection>
  )
}

export default Skills
