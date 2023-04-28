import { Link } from 'react-router-dom';
import styleCard from '../Card/Card.module.css'

export default function Card(characters) {
  console.log(characters)
   return (
      <Link to={`/Detail/${characters.id}`} className={styleCard.container}>
         
        <img src={characters.image} alt={characters.name} />
      </Link>
   );
}