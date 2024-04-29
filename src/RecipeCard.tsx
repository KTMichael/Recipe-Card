import omelette from './assets/images/omelette.jpeg';
import { Ingredients, Instructions, Nutrition, Preparation } from './components'

export const RecipeCard = () => {
    return (
      <div className="Recipe-Card">
          <img src={omelette} className="Recipe-Photo" alt="logo" />
          <header className="RecipeCard-Header">
          Simple Omelette Recipe
          </header>
          <div className="Description">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </div>
          <Preparation/>
          <Ingredients/>
          <hr className='Divider-Line'/>
          <Instructions/>
          <hr className='Divider-Line'/>
          <Nutrition/>
      </div>
    );
  }
  