import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetProductCategory,
  getProductCategories,
  getProductCategoriesStatus,
} from "../../feature/categoriesSlice";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from './../../components/Loader/Loader';
import ProductList from './../../components/ProductList/ProductList';

const CategoryProductPage = () => {
  const dispatch = useDispatch();

  const { category } = useParams();
  const categoryProducts = useSelector(getProductCategories);
  const categoryProductsStatus = useSelector(getProductCategoriesStatus);

  console.log(categoryProducts);




  useEffect(() => {
    dispatch(fetProductCategory(category));
  }, [dispatch, category]);

  return <div className="container">
    <div className=''>
      <div className=''>
        <h3 className="text-orange-500 text-4xl mt-6">See our <span className='text-capitalize'>{category.replace("-", " ")}</span></h3>
      </div>

      {
        categoryProductsStatus === STATUS.SUCCEEDED ? <Loader /> : <ProductList products={categoryProducts.products} />
      }
    </div>
  </div>;
};

export default CategoryProductPage;
