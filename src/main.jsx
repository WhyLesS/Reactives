import ReactDOM from 'react-dom/client';
import {restaurants} from '../materials/mock';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='restaurants'>
      Restaurants:
    </div>
    <div className='mainContenet'>
      {/* ------------------0------------------ */}
      <div className='names'> 
        {restaurants[0].name}
        <div className='menu'>
          <h3>Menu:</h3>
          <div className='menuContent'>
            <div>name: {restaurants[0].menu[0].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[0].menu[0].ingredients[0]}</li>
                <li>{restaurants[0].menu[0].ingredients[1]}</li>
              </ul>
            </div>
            <div>price: {restaurants[0].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[0].menu[1].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[0].menu[1].ingredients[0]}</li>
              </ul>
            </div>
            <div>price: {restaurants[0].menu[1].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[0].menu[2].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[0].menu[2].ingredients[0]}</li>
                <li>{restaurants[0].menu[2].ingredients[1]}</li>
              </ul>
            </div>
            <div>price: {restaurants[0].menu[2].price}</div>
          </div>
        </div>

        <div className='reviews'>
          <h3>Reviews:</h3>
          <ul className='reviewsContent'>
            <li>user: {restaurants[0].reviews[0].user}</li>
            <li>rating: {restaurants[0].reviews[0].rating}</li>
            <li>comment: {restaurants[0].reviews[0].text}</li>
          </ul>
          <ul className='reviewsContent'>
            <li>user: {restaurants[0].reviews[1].user}</li>
            <li>rating: {restaurants[0].reviews[1].rating}</li>
            <li>comment: {restaurants[0].reviews[1].text}</li>
          </ul>
        </div>
      </div>

      {/* ------------------1------------------ */}
      <div className='names'> 
        {restaurants[1].name}
        <div className='menu'>
          <h3>Menu:</h3>
          <div className='menuContent'>
            <div>name: {restaurants[1].menu[0].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[1].menu[0].ingredients[0]}</li>
                <li>{restaurants[1].menu[0].ingredients[1]}</li>
                <li>{restaurants[1].menu[0].ingredients[2]}</li>
              </ul>
            </div>
            <div>price: {restaurants[1].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[1].menu[1].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[1].menu[1].ingredients[0]}</li>
                <li>{restaurants[1].menu[1].ingredients[1]}</li>
                <li>{restaurants[1].menu[1].ingredients[2]}</li>
                <li>{restaurants[1].menu[1].ingredients[3]}</li>
              </ul>
            </div>
            <div>price: {restaurants[1].menu[1].price}</div>
          </div>
        </div>
        
        <div className='reviews'>
          <h3>Reviews:</h3>
          <ul className='reviewsContent'>
            <li>user: {restaurants[1].reviews[0].user}</li>
            <li>rating: {restaurants[1].reviews[0].rating}</li>
            <li>comment: {restaurants[1].reviews[0].text}</li>
          </ul>
          <ul className='reviewsContent'>
            <li>user: {restaurants[1].reviews[1].user}</li>
            <li>rating: {restaurants[1].reviews[1].rating}</li>
            <li>comment: {restaurants[1].reviews[1].text}</li>
          </ul>
          <ul className='reviewsContent'>
            <li>user: {restaurants[1].reviews[2].user}</li>
            <li>rating: {restaurants[1].reviews[2].rating}</li>
            <li>comment: {restaurants[1].reviews[2].text}</li>
          </ul>
        </div>
      </div>


      {/* ------------------2------------------ */}
      <div className='names'> 
        {restaurants[2].name}
        <div className='menu'>
          <h3>Menu:</h3>
          <div className='menuContent'>
            <div>name: {restaurants[2].menu[0].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[2].menu[0].ingredients[0]}</li>
              </ul>
            </div>
            <div>price: {restaurants[2].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[2].menu[1].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[2].menu[2].ingredients[0]}</li>
                <li>{restaurants[2].menu[2].ingredients[1]}</li>
              </ul>
            </div>
            <div>price: {restaurants[2].menu[2].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[2].menu[2].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[2].menu[2].ingredients[0]}</li>
              </ul>
            </div>
            <div>price: {restaurants[2].menu[1].price}</div>
          </div>
        </div>

        <div className='reviews'>
          <h3>Reviews:</h3>
          <ul className='reviewsContent'>
            <li>user: {restaurants[2].reviews[0].user}</li>
            <li>rating: {restaurants[2].reviews[0].rating}</li>
            <li>comment: {restaurants[2].reviews[0].text}</li>
          </ul>
        </div>
      </div>


      {/* ------------------3------------------ */}
      <div className='names'> 
        {restaurants[3].name}
        <div className='menu'>
          <h3>Menu:</h3>
          <div className='menuContent'>
            <div>name: {restaurants[3].menu[0].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[3].menu[0].ingredients[0]}</li>
              </ul>
            </div>
            <div>price: {restaurants[3].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[3].menu[1].name}</div>
            <div>
              ingredients:
              <ul className='ingredients'>
                <li>{restaurants[3].menu[1].ingredients[0]}</li>
                <li>{restaurants[3].menu[1].ingredients[1]}</li>
              </ul>
            </div>
            <div>price: {restaurants[3].menu[1].price}</div>
          </div>
        </div>
        
        <div className='reviews'>
          <h3>Reviews:</h3>
          <ul className='reviewsContent'>
            <li>user: {restaurants[3].reviews[0].user}</li>
            <li>rating: {restaurants[3].reviews[0].rating}</li>
            <li>comment: {restaurants[3].reviews[0].text}</li>
          </ul>
          <ul className='reviewsContent'>
            <li>user: {restaurants[3].reviews[1].user}</li>
            <li>rating: {restaurants[3].reviews[1].rating}</li>
            <li>comment: {restaurants[3].reviews[1].text}</li>
          </ul>
        </div>
      </div>
    </div>
    
  </>
)
