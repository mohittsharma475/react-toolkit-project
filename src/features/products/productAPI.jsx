import axios from "axios";

const productAPICall = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/products"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default productAPICall;
