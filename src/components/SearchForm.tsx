import { useState } from 'react';
import { useActions } from '../hooks/useActions';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const SearchForm: React.FC = () => {
  const { fetchData } = useActions();
  const [cocktail, setCocktail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCocktail(e.target.value);
    fetchData(`${url}${e.target.value}`);
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' value={cocktail} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
