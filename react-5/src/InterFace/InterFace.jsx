import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { PRODUCTS } from "../data";
import Result from "../Result/Result";

const InterFace = () => {

  const [answer, setAnswer] = useState('')

  const searchProduct = (product) => {
    if (PRODUCTS.fruits.includes(product)){
      setAnswer(product + 'is a fruit!')
    } else if (PRODUCTS.vegetables.includes(product)){
      setAnswer(product + 'is a vegetable')
    } else{
      setAnswer('Product is neither fruit or vegetable!')
    }
  }

  return(
    <div>
      <SearchBox onSearch={searchProduct} />
      <Result answer={answer}/>
    </div>
  )

}

export default InterFace;