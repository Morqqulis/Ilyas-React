export interface ISkillLine {
  name: string;
  value: number;
}

const SkillLine = ({ name, value }: ISkillLine) => {
  return (
    <div className={`flex items-center gap-0.5 md:flex-col md:gap-2 xl:justify-center`}>
      <span className={`min-w-[64px] text-lg font-semibold uppercase`}>{name}</span>
      <div className={`grey w-full max-w-[600px] bg-[#DBDBED]`}>
        <span className={`block h-[32px] bg-blue`} style={{ width: `${value}%` }}></span>
      </div>
    </div>
  );
};

export default SkillLine;
