import { CocktailList, SearchForm } from '../components';

const Home: React.FC = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
