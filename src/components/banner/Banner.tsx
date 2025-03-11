import CountdownTimer from "./Coundown";

function Banner() {
  const targetDate = new Date("2025-04-30T00:00:00"); // Pick some date

  return (
    <div className="flex flex-col items-center justify-between text-[80px] gap-[21px]">
      <div className="font-playfair text-white font-black">
        We’re Getting Ready
      </div>
      <div className="font-playfair">
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}

export default Banner;
