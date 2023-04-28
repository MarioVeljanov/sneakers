import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40 ">
        <div className="d-flex align-center">
          <img width="40px" height="40px" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width="18px" height="18px" src="/icons/card.svg" />
            <span>1205 рyб.</span>
          </li>
          <li>
            <img width="18px" height="18px" src="/icons/user.svg" />
          </li>
        </ul>
      </header>

      {/* Content */}

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex justify-between">
          <div className="card">
            <img width={"133px"} height={"112px"} src="/img/sneakers/1.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={"11px"} height={"11px"} src="/icons/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={"133px"} height={"112px"} src="/img/sneakers/2.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={"11px"} height={"11px"} src="/icons/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={"133px"} height={"112px"} src="/img/sneakers/3.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={"11px"} height={"11px"} src="/icons/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={"133px"} height={"112px"} src="/img/sneakers/5.jpg" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={"11px"} height={"11px"} src="/icons/plus.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
