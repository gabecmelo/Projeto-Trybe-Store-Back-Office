import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { INITIAL_STATE } from './states';
import { ProductType, ProductWithId } from './types';

function App() {
  const [showOrRegisterProducts, setShowOrRegisterProducts] = useState<boolean>(true);
  const [listProducts, setListProducts] = useState<ProductType>(INITIAL_STATE);
  const [SubmittedProducts, setSubmittedProducts] = useState<ProductWithId[]>([]);
  const [id, setId] = useState(1);

  const handleDelete = (removeById: string | number) => {
    const removedProducts = SubmittedProducts
      .filter((product) => product.id !== removeById);
    setSubmittedProducts(removedProducts);
  };

  const handleChange = ({ target }:
  React.ChangeEvent<
  HTMLInputElement |
  HTMLSelectElement |
  HTMLTextAreaElement>) => {
    const { name, type } = target;

    let value;
    if (type === 'number') {
      value = (target as HTMLInputElement).valueAsNumber;
    } else {
      value = target.value;
    }
    setListProducts({
      ...listProducts,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setId(id + 1);

    const newProduct = {
      id,
      ...listProducts,
    };

    setSubmittedProducts([
      ...SubmittedProducts,
      newProduct,
    ]);

    setListProducts(INITIAL_STATE);
  };

  const handleClick = ({ target }: any) => {
    const content = target.textContent;
    return content === 'Cadastrar'
      ? setShowOrRegisterProducts(true)
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
              listProducts={ listProducts }
              handleSubmit={ handleSubmit }
          />
          : <ListProducts handleDelete={ handleDelete } products={ SubmittedProducts } />
      }
    </div>
  );
}

export default App;
