import { useEffect } from 'react';
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

  if (loading) {
    return <Loading />;
  }

  return <section></section>;
};

export default SingleCocktail;
