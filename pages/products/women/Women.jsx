import Product from "../../../components/product/Product";
import Filters from "../men/Filters";

const Women = ({ productsArray }) => {
  return (
    <div className="h-full w-full py-12 px-6 border-t mt-4">
      <div className="h-full w-full flex justify-start p-4 px-6">
        <h1 className="text-5xl font-Gruppo uppercase">Women's</h1>
      </div>
      <div className="h-full w-full flex flex-row">
        <Filters productsArray={productsArray} />
        <div className="w-full lg:w-4/5 py-12 px-6">
          <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {productsArray.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
