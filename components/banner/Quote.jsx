const Quote = ({ quote }) => {
  return (
    <div className="relative h-full w-full py-12 md:py-18 lg:py-24 px-6 flex flex-col items-center justify-center bg-secondary">
      <div className="hidden sm:block absolute top-[50%] left-0 p-8 lg:p-10 xl:p-12 bg-yellow-500" />
      <div className="hidden sm:block absolute bottom-[50%] right-0 p-8 lg:p-10 xl:p-12 bg-yellow-500" />
      <div className="h-full w-full flex justify-center py-6 md:py-8 lg:py-12 bg-primary z-20">
        <h1 className="text-lg xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Borui text-secondary font-thin text-center">
          {quote}
        </h1>
      </div>
    </div>
  );
};

export default Quote;
