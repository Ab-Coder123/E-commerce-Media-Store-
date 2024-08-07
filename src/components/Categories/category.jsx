import React, { useEffect, useState } from 'react';
import Filterproducts from '../../modules/Filter-products/Filterproducts';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Filterproducts filterproducts={categories} />
      {/*بتاعه ال الكاتيجوري  Api  هنا هو بقا غمل فانكشم اسمها كاتيجوري فيها ال  */}
    </>
  );
};

export default Category;
