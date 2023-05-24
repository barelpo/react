import { useState } from "react";

const SearchBox = ({onSearch}) => {

  const [searchVal, setSearchVal] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    onSearch(searchVal)
    setSearchVal('')

  }

  return(
    <form onSubmit={(event) => handleSubmit(event)}>
      
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchVal}
        onChange={(event) => setSearchVal(event.target.value)}/>
      <button type="submit">Check</button>

    </form>
  )

}

export default SearchBox;