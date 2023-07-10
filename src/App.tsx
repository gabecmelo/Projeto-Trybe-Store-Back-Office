import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

function App() {
  const [showOrRegisterProducts, setShowOrRegisterProducts] = useState(true);

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
              handleSubmit={ handleSubmit }
          />
          : <ListProducts products={ [] } />
      }
    </div>
  );
}

export default App;
