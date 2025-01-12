export interface IServiceItem {
  id?: number;
  title: string;
  text: string;
  icon: string;
}

const ServiceItem = ({ title, text, icon }: IServiceItem) => {
  return (
    <div className={`w-full max-w-[330px] lg:max-w-full lg:text-center`}>
      <img className={`mb-[30px] lg:mx-auto`} src={icon} alt="Service Icon" width={60} height={60} />
      <h3 className={`text-xl font-semibold mb-[25px]`}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
