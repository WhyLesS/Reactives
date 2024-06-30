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
          Menu:
          <div className='menuContent'>
            <div>name: {restaurants[0].menu[0].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[0].menu[0].ingredients[0]}</div>
                <div>{restaurants[0].menu[0].ingredients[1]}</div>
              </div>
            </div>
            <div>price: {restaurants[0].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[0].menu[1].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[0].menu[1].ingredients[0]}</div>
              </div>
            </div>
            <div>price: {restaurants[0].menu[1].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[0].menu[2].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[0].menu[2].ingredients[0]}</div>
                <div>{restaurants[0].menu[2].ingredients[1]}</div>
              </div>
            </div>
            <div>price: {restaurants[0].menu[2].price}</div>
          </div>
        </div>

        <div className='reviews'>
          Reviews:
          <div className='reviewsContent'>
            <div>user: {restaurants[0].reviews[0].user}</div>
            <div>rating: {restaurants[0].reviews[0].rating}</div>
            <div>comment: {restaurants[0].reviews[0].text}</div>
          </div>
          <div className='reviewsContent'>
            <div>user: {restaurants[0].reviews[1].user}</div>
            <div>rating: {restaurants[0].reviews[1].rating}</div>
            <div>comment: {restaurants[0].reviews[1].text}</div>
          </div>
        </div>
      </div>

      {/* ------------------1------------------ */}
      <div className='names'> 
        {restaurants[1].name}
        <div className='menu'>
          Menu:
          <div className='menuContent'>
            <div>name: {restaurants[1].menu[0].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[1].menu[0].ingredients[0]}</div>
                <div>{restaurants[1].menu[0].ingredients[1]}</div>
                <div>{restaurants[1].menu[0].ingredients[2]}</div>
              </div>
            </div>
            <div>price: {restaurants[1].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[1].menu[1].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[1].menu[1].ingredients[0]}</div>
                <div>{restaurants[1].menu[1].ingredients[1]}</div>
                <div>{restaurants[1].menu[1].ingredients[2]}</div>
                <div>{restaurants[1].menu[1].ingredients[3]}</div>
              </div>
            </div>
            <div>price: {restaurants[1].menu[1].price}</div>
          </div>
        </div>
        
        <div className='reviews'>
          Reviews:
          <div className='reviewsContent'>
            <div>user: {restaurants[1].reviews[0].user}</div>
            <div>rating: {restaurants[1].reviews[0].rating}</div>
            <div>comment: {restaurants[1].reviews[0].text}</div>
          </div>
          <div className='reviewsContent'>
            <div>user: {restaurants[1].reviews[1].user}</div>
            <div>rating: {restaurants[1].reviews[1].rating}</div>
            <div>comment: {restaurants[1].reviews[1].text}</div>
          </div>
          <div className='reviewsContent'>
            <div>user: {restaurants[1].reviews[2].user}</div>
            <div>rating: {restaurants[1].reviews[2].rating}</div>
            <div>comment: {restaurants[1].reviews[2].text}</div>
          </div>
        </div>
      </div>


      {/* ------------------2------------------ */}
      <div className='names'> 
        {restaurants[2].name}
        <div className='menu'>
          Menu:
          <div className='menuContent'>
            <div>name: {restaurants[2].menu[0].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[2].menu[0].ingredients[0]}</div>
              </div>
            </div>
            <div>price: {restaurants[2].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[2].menu[1].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[2].menu[2].ingredients[0]}</div>
                <div>{restaurants[2].menu[2].ingredients[1]}</div>
              </div>
            </div>
            <div>price: {restaurants[2].menu[2].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[2].menu[2].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[2].menu[2].ingredients[0]}</div>
              </div>
            </div>
            <div>price: {restaurants[2].menu[1].price}</div>
          </div>
        </div>

        <div className='reviews'>
          Reviews:
          <div className='reviewsContent'>
            <div>user: {restaurants[2].reviews[0].user}</div>
            <div>rating: {restaurants[2].reviews[0].rating}</div>
            <div>comment: {restaurants[2].reviews[0].text}</div>
          </div>
        </div>
      </div>


      {/* ------------------3------------------ */}
      <div className='names'> 
        {restaurants[3].name}
        <div className='menu'>
          Menu:
          <div className='menuContent'>
            <div>name: {restaurants[3].menu[0].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[3].menu[0].ingredients[0]}</div>
              </div>
            </div>
            <div>price: {restaurants[3].menu[0].price}</div>
          </div>

          <div className='menuContent'>
            <div>name: {restaurants[3].menu[1].name}</div>
            <div>
              ingredients:
              <div className='ingredients'>
                <div>{restaurants[3].menu[1].ingredients[0]}</div>
                <div>{restaurants[3].menu[1].ingredients[1]}</div>
              </div>
            </div>
            <div>price: {restaurants[3].menu[1].price}</div>
          </div>
        </div>
        
        <div className='reviews'>
          Reviews:
          <div className='reviewsContent'>
            <div>user: {restaurants[3].reviews[0].user}</div>
            <div>rating: {restaurants[3].reviews[0].rating}</div>
            <div>comment: {restaurants[3].reviews[0].text}</div>
          </div>
          <div className='reviewsContent'>
            <div>user: {restaurants[3].reviews[1].user}</div>
            <div>rating: {restaurants[3].reviews[1].rating}</div>
            <div>comment: {restaurants[3].reviews[1].text}</div>
          </div>
        </div>
      </div>
    </div>
    
  </>
)
