const Quote = () => {
  return (
    <div className="h-full w-full py-12 px-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 flex flex-col items-center justify-center">
      <div className="h-full w-full flex justify-center py-12">
        <h1 className="text-6xl font-Borui text-gray-700 font-thin">
          Forget the rules. If you like it, wear it!
        </h1>
      </div>
      <div className="h-full w-full flex justify-center items-center py-4">
        <button className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/80">
          Sneak Out
        </button>
      </div>
    </div>
  );
};

export default Quote;
