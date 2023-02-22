const prefix = "https://localhost:7043/api";
const productPrefix = "product";

export const ApiRoutes = {
  PageProducts: `${prefix}/${productPrefix}/infinite/:pageNumber/:categoryId/:sortBy/:sortDirection`,
  PageProductsSearched: `${prefix}/${productPrefix}/infinite/:pageNumber/:categoryId/:sortBy/:sortDirection/:searchStr`,
  Product: `${prefix}/${productPrefix}/:productId`,
  FormInfo: `${prefix}/${productPrefix}/get-form-info`,
  AddProduct: `${prefix}/${productPrefix}/add-product`,
};
