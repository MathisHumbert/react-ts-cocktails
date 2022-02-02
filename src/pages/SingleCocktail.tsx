import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Loading } from '../components';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktail: React.FC = () => {
  const { fetchData } = useActions();
  const { loading, data } = useSelector((state) => state.cocktailsReducer);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`${url}${id}`);
  }, [id]);

  if (loading || data.length < 1) {
    return <Loading />;
  }

  const { img, name, glass, alcoholic, instructions, ingredients, category } =
    data[0];

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {alcoholic}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {ingredients.map((item: string | null, index: number) => {
              return <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
