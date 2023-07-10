import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType } from './types';

const INITIAL_STATE = {
  name: '',
  price: undefined,
  description: '',
  tags: '',
  image: '',
} as ProductType;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

function App() {
  const [listProducts, setListProducts] = useState(INITIAL_STATE);
  const [showOrRegisterProducts, setShowOrRegisterProducts] = useState(true);

  const handleChange = ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setListProducts({
      ...listProducts,
      [name]: value,
    });
  };

  const handleClick = ({ target }: any) => {
    const content = target.textContent;
    return content === 'Cadastrar' ? setShowOrRegisterProducts(true)
      : setShowOrRegisterProducts(false);
  };

  return (
    <div className="app">
      <header>
        <button onClick={ handleClick }>Cadastrar</button>
        <button onClick={ handleClick }>Ver produtos</button>
      </header>
      {
        showOrRegisterProducts
          ? <RegisterProduct
              handleChange={ handleChange }
              handleSubmit={ handleSubmit }
          />
          : <ListProducts products={ [] } />
      }
    </div>
  );
}

export default App;
