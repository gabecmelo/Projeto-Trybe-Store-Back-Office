import React from 'react';
// import Product from './Product';
import '../styles/RegisterProduct.css';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit, handleChange } = props;

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ handleSubmit }>
          <label htmlFor="name">
            Nome
            <input onChange={ handleChange } type="text" id="name" required />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" required />
          </label>
          <label htmlFor="price">
            Preço
            <input type="number" id="price" required />
          </label>
          <label htmlFor="image">
            Imagem
            <input type="text" id="image" />
          </label>
          <label htmlFor="tags">
            Tags
            <input type="text" id="tags" />
          </label>
          <button type="submit">Salvar</button>
        </form>
        {/* <Product productInfo={} /> */}
      </div>
    </main>
  );
}
