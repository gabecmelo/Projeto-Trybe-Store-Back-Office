import { ProductType, ProductWithId } from '../types';
import '../styles/Product.css';

type Props = {
  handleDelete?: () => void | undefined
  productInfo: ProductWithId | ProductType
};

export default function Product({
  handleDelete = undefined,
  productInfo,
}: Props) {
  const { name, description,
    price, image, tags } = productInfo as ProductWithId;
  const tagsList = tags ? tags.split(',').map((tag) => tag.trim()) : [];

  return (
    <div data-testid="product-container" className="product-container">
      {handleDelete && <button onClick={ handleDelete }>X</button>}
      <img src={ image || 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' } alt={ name } />
      <h3>{name}</h3>
      <h4>
        R$
        {' '}
        {price}
      </h4>
      <ul>
        {tagsList.map((tag) => <li key={ tag }>{tag}</li>)}
      </ul>
      <p>{description}</p>
    </div>
  );
}
