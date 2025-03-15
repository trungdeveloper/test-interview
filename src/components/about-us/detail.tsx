type DetailProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Detail = ({ icon, title, description }: DetailProps) => {
  return (
    <div className="flex gap-x-5">
      <div className="h-10 w-10 flex shrink-0 justify-center bg-[#E3FCFF] rounded-full items-center">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-montserrat font-bold text-2xl leading-[1.88rem]">
          {title}
        </div>
        <div className="font-normal text-sm leading-[140%] text-[#757575]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Detail;
