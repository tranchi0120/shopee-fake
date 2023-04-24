import React, { useCallback, useEffect, useRef } from "react";
import HeaderSlider from "../../components/Slider/Slider";
import ProductList from "../../components/ProductList/ProductList";
import Loader from "./../../components/Loader/Loader";
import { useSelector } from "react-redux";
import {
  fectAllProduct,
  getAllProductStatus,
  getAllProducts,
} from "../../feature/productSice";
import { useDispatch } from "react-redux";
import { STATUS } from "../../utils/status";
import { getAllCategories } from "../../feature/categoriesSlice";

const Home = () => {
  const categories = useSelector(getAllCategories);

  const products = useSelector(getAllProducts);

  const productStatus = useSelector(getAllProductStatus);
  const dispatch = useDispatch();

  let limit = 20;
  useEffect(() => {
    dispatch(fectAllProduct(limit));
  }, [limit]);

  let catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );

  let catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );
  let catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );
  let catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );

  const limitRef = useRef(limit);

  const handleSeemore = useCallback(() => {
    {
      limitRef.current += 10;
      // console.log(limitRef.current);
      dispatch(fectAllProduct(limitRef.current));
    }
  }, []);

  return (
    <main>
      <HeaderSlider />
      <div>
        <div className="container">
          <div
            className="w-full bg-white p-6
           text-gray-500 font-medium border-l-8
            border-orange-600 shadow-2xl mt-16 text-[20px]"
          >
            <h3>SEE OUR PRODUCT</h3>
          </div>
          {productStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <ProductList products={products} />
          )}

          <button
            className="w-[120px] h-[50px] bg-orange-600 
          flex items-center justify-center mx-auto my-8
           text-white hover:text-orange-500 transition-all 
           hover:bg-gray-200"
            onClick={() => handleSeemore()}
          >
            See more
          </button>

          <div className="categories-item">
            <div
              className="w-full bg-white p-6
           text-gray-500 font-medium border-l-8
            border-orange-600 shadow-2xl mt-16 text-[20px]"
            >
              <h3>{categories[0]}</h3>
            </div>
            <ProductList products={catProductsOne} />
          </div>

          <div className="categories-item">
            <div
              className="w-full bg-white p-6
           text-gray-500 font-medium border-l-8
            border-orange-600 shadow-2xl mt-16 text-[20px]"
            >
              <h3>{categories[1]}</h3>
            </div>
            <ProductList products={catProductsTwo} />

          </div>

          <div className="categories-item">
            <div
              className="w-full bg-white p-6
           text-gray-500 font-medium border-l-8
            border-orange-600 shadow-2xl mt-16 text-[20px]"
            >
              <h3>{categories[2]}</h3>
            </div>
            <ProductList products={catProductsThree} />
          </div>

          <div className="categories-item">
            <div
              className="w-full bg-white p-6
           text-gray-500 font-medium border-l-8
            border-orange-600 shadow-2xl mt-16 text-[20px]"
            >
              <h3>{categories[3]}</h3>
            </div>
            <ProductList products={catProductsFour} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
