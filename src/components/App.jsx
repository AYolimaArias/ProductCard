/*import pokemons from "../data/pokemons.json";
import productsDB from "../data/products.json";*/
import CounterApp from "./CounterApp";
import PokemonApp from "./PokemonApp";
import ShoppingCartApp from "./ShoppingCartApp";


function App() {
  //console.log(pokemons);
  return (
    <main>
      <div className="section">
        <div className="container">
          <div className="article-container">
            <article className="article">
              <div className="content">
                <h1>React Components</h1>
                <p>
                  Team c13w09t09: Julio Granda, Angélica Arias, Judith Huisa
                </p>
                <h2>Counter</h2>
                <p>
                  El código proporciona una implementación de una aplicación de
                  contador en React. Se utiliza el hook useState para manejar el
                  estado del contador, inicializándolo en 0. La función
                  handleCounter se encarga de actualizar el estado del contador;
                  si recibe un valor indefinido, reinicia el contador a 0, de lo
                  contrario, incrementa o decrementa el contador según el valor
                  recibido. La interfaz gráfica de la aplicación, definida en el
                  JSX retornado por la función CounterApp, muestra el valor
                  actual del contador y presenta seis botones con diferentes
                  funcionalidades: incrementar el contador en 1 o 10, reiniciar
                  el contador, aplicar un cambio aleatorio entre -20 y 20, y
                  decrementar el contador en 1 o 10. Cada botón está asociado a
                  la función handleCounter y pasa un valor específico como
                  argumento para controlar el comportamiento del contador. El
                  estilo y la estructura de la aplicación están definidos por
                  clases CSS, facilitando una presentación clara y organizada de
                  los componentes.
                </p>
                <div>
                  <CounterApp />
                </div>
                <h2>Filter</h2>
                <p>
                  El componente PokemonApp es una interfaz interactiva que
                  despliega una colección de tarjetas, cada una representando un
                  Pokémon del archivo pokemons.json. Cada tarjeta muestra la
                  imagen, nombre y tipos del Pokémon. En la parte superior, hay
                  un menú desplegable (&lt; select &gt;) que permite filtrar los
                  Pokémon por tipo. Este menú se genera dinámicamente a partir
                  de los tipos disponibles en el archivo de datos, asegurando
                  que cualquier nuevo tipo agregado sea automáticamente incluido
                  como opción. Al seleccionar un tipo, como &quot; bug &quot;,
                  la interfaz actualiza la lista de tarjetas mostrando solo
                  aquellos Pokémon que corresponden al tipo seleccionado. Este
                  comportamiento hace que PokemonApp sea una herramienta
                  dinámica y útil para explorar y filtrar Pokémon basándose en
                  sus tipos.
                </p>
                <PokemonApp />
                <h2>Shopping Cart</h2>
                <p>asdasduellos Pokémon que corresponden al tipo seleccionado. Este
                  comportamiento hace que PokemonApp sea una herramienta
                  dinámica y útil para explorar y filtrar Pokémon basándose en
                  sus tipos.
                </p>
                <ShoppingCartApp />
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
