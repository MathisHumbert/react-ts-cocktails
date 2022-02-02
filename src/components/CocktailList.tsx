import { useSelector } from '../hooks/useTypedSelector';

const CocktailList: React.FC = () => {
  const data = useSelector((state) => state.cocktailsReducer);

  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
    </section>
  );
};

export default CocktailList;
