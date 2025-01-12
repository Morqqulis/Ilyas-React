import CustomSection from '../../components/ui/CustomSection'
import CustomTitle from '../../components/ui/CustomTitle'

const aboutTexts = [
  {
    id: 1,
    text: 'Приветствую всех на своём сайте! Меня зовут Иван, я из Киева. Занимаюсь фронтенд-разработкой более года. До разработки занимался нелюбимым делом, ходил на нелюбимую работу, не мог понять за что взяться, чтобы дело приносило удовольствие и деньги, пока не наткнулся на один интересный курс.',
  },
  {
    id: 2,
    text: 'С тех пор прошел огонь, воду и медные трубы. Учёба давалась по-разному: где-то легче, где-то сложнее.  Каждодневная работа над навыками и усердие, с которым я подходил к обучению, уже через несколько месяцев принесли плоды - я взял первый заказ на фрилансе. С отзывами клиентов и примерами работ можно ознакомиться ниже.',
  },
]

const About = () => {
  return (
    <CustomSection id={'about'}>
      <CustomTitle className={`mb-14`} text={'Обо мне'} />
      <div className={`flex flex-col gap-7`}>
        {aboutTexts.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </CustomSection>
  )
}

export default About
