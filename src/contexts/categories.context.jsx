////////////getting data from firesotre//////////////////
import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap();
  });
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

///////////////adding data to firesotre//////////////////
// import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

// export const CategoriesContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   // useEffect(() => {
//   //   addCollectionAndDocuments('categories', SHOP_DATA);
//   // }, []);
//   const value = { products };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
