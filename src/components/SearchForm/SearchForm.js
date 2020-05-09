import React, {useState} from 'react';
import './SearchForm.css';
import Button from '../Utility/Button';

const SearchForm = () => {
  const [locationSearch, setLocationSearch] = useState('');

  const onChangeHandler = e => {
    setLocationSearch(e.target.value)
  }

  const submitSearchHandler = e => {
    e.preventDefault();
    fetch('http://localhost:5000/maps')
      .then(res => console.log(res))
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={submitSearchHandler}>
                <label className="SearchLabel" htmlFor="location">Or search: </label>

        <input className="SearchInput" type="text" name="location" onChange={onChangeHandler}/>
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}

export default SearchForm
