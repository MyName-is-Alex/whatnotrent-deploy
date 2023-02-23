export const prefix =
  process.env.NODE_ENV === "development"
    ? "https://localhost:7043/api"
    : "https://webapp-230221130957.azurewebsites.net/api";
const productPrefix = "product";
const registrationPrefix = "auth";

export const ApiRoutes = {
  PageProducts: (pageNumber, categoryId, sortBy, sortDirection) =>
    `${prefix}/${productPrefix}/infinite/${pageNumber}/${categoryId}/${sortBy}/${sortDirection}`,

  PageProductsSearched: (
    pageNumber,
    categoryId,
    sortBy,
    sortDirection,
    searchStr
  ) =>
    `${prefix}/${productPrefix}/infinite/${pageNumber}/${categoryId}/${sortBy}/${sortDirection}/${searchStr}`,

  Product: (productId) => `${prefix}/${productPrefix}/${productId}`,

  FormInfo: `${prefix}/${productPrefix}/get-form-info`,
  AddProduct: `${prefix}/${productPrefix}/add-product`,
  Login: `${prefix}/${registrationPrefix}/login`,
  Register: `${prefix}/${registrationPrefix}/register`,
  UpdateUser: `${prefix}/${registrationPrefix}/update`,
  UserInfo: `${prefix}/${registrationPrefix}/user-info`,
};
