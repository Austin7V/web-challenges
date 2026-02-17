import { getAllProducts } from "../../../services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const products = getAllProducts(id);
  /*   const product = products.find((product) => product.id === id); */
  response.status(200).json(products);
}
