const Quote = ({ quote }) => {
  return (
    <div className="relative h-full w-full py-24 px-6 flex flex-col items-center justify-center bg-secondary">
      <div className="absolute top-[50%] left-0 p-12 bg-yellow-500" />
      <div className="absolute bottom-[50%] right-0 p-12 bg-yellow-500" />
      <div className="h-full w-full flex justify-center py-12 bg-primary">
        <h1 className="text-6xl font-Borui text-secondary font-thin text-center">
          {quote}
        </h1>
      </div>
    </div>
  );
};

export default Quote;
