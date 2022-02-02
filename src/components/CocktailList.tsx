import { useEffect } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { Cocktail, Loading } from '.';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailList: React.FC = () => {
  const { fetchData } = useActions();
  const { loading, error, data } = useSelector(
    (state) => state.cocktailsReducer
  );

  useEffect(() => {
    fetchData(`${url}ma`);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || data.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {data.map((item: any) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
