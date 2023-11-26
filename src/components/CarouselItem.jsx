const CarouselItem = () => {
  return (
    <div className="flex flex-col items-center w-[300px] border shadow-[3px_3px_2px_#a8a8a8] p-[5px] rounded-[5px] border-solid border-[lightgray]">
      <h4 className="w-full text-left text-[x-large] font-semibold">M&P</h4>
      <div className="w-full text-left text-[x-large] font-semibold">
        We make sure to deliver deliberately.
      </div>
      <div className="w-full text-justify bg-[greenyellow] m-[5px] pl-[5px] rounded-[5px]">
        Investment Required: <b>Rs.250000</b>
      </div>
      <button className="w-[150px] justify-center items-center flex bg-[purple] text-white font-semibold m-2.5 p-[5px] rounded-[5px]">
        See More Info
      </button>
    </div>
  );
};

export default CarouselItem;
