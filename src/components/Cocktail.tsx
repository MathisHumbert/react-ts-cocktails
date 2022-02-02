import { Link } from 'react-router-dom';

interface Props {
  id: string;
  img: string;
  name: string;
  glass: string;
  alcoholic: string;
}

const Cocktail = ({ id, img, name, glass, alcoholic }: Props) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
