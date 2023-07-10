import Product from './Product';
import '../styles/RegisterProduct.css';
import { ProductType } from '../types';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  listProducts: ProductType
  handleDelete: (product: any) => void
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit, handleChange, listProducts, handleDelete } = props;
  const { name, description, image, tags, price } = listProducts;

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ handleSubmit }>
          <label htmlFor="name">
            Nome
            <input
              onChange={ handleChange }
              name="name"
              value={ name }
              type="text"
              id="name"
              required
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              onChange={ handleChange }
              name="description"
              value={ description }
              type="text"
              id="description"
              required
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              onChange={ handleChange }
              name="price"
              type="number"
              value={ price }
              id="price"
              required
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              onChange={ handleChange }
              name="image"
              value={ image }
              type="text"
              id="image"
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              onChange={ handleChange }
              name="tags"
              value={ tags }
              type="text"
              id="tags"
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product
          handleDelete={ handleDelete }
          productInfo={ listProducts }
        />
      </div>
    </main>
  );
}
