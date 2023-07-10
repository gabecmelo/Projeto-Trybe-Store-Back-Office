import React, { useState } from 'react';
import Product from './Product';
import '../styles/RegisterProduct.css';

import { ProductType } from '../types';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

const INITIAL_STATE = {
  nameProduct: '',
  price: undefined,
  description: '',
  tags: '',
  image: '',
} as ProductType;

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;
  const [listProducts, setListProducts] = useState(INITIAL_STATE);
  const { nameProduct, description, price } = listProducts;

  const handleChange = ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setListProducts({
      ...listProducts,
      [name]: value,
    });
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ handleSubmit }>
          <label htmlFor="name">
            Nome
            <input
              onChange={ handleChange }
              name="nameProduct"
              value={ nameProduct }
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
              value={ price }
              type="number"
              id="price"
              required
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input onChange={ handleChange } name="image" type="text" id="image" />
          </label>
          <label htmlFor="tags">
            Tags
            <input onChange={ handleChange } name="tags" type="text" id="tags" />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ listProducts } />
      </div>
    </main>
  );
}
