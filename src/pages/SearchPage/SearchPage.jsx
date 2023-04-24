import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, fetchSearchProducts, getSearchProducts, getSearchProductsStatus } from "../../feature/searchSlice";
import { useParams } from "react-router-dom";
import Loader from './../../components/Loader/Loader';
import ProductList from './../../components/ProductList/ProductList';
import { STATUS } from './../../utils/status';


const SearchPage = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useParams();

  const searchProducts = useSelector(getSearchProducts)
  const searchProductsStatus = useSelector(getSearchProductsStatus)

  useEffect(() => {
    dispatch(clearSearch())
    dispatch(fetchSearchProducts(searchTerm))
  }, [searchTerm])

  if (searchProducts.length === 0) {
    return (
      <div className='container' style={{
        minHeight: "70vh"
      }}>
        <div className='text-orange-600 h-[100vh] text-[30px] flex items-center justify-center'>
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }



  return <div>
    <main>
      <div className='search-content bg-whitesmoke'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3 className="text-[25px] text-orange-600 ">Search results:</h3>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products={searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  </div>;
};

export default SearchPage;
