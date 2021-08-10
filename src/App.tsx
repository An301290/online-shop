import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton  } from './App.styles';
import Item from "./Components/Item/Item"; 
import Cart from "./Components/Cart/Cart"; 

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
const [isCartOpen, setIsCartOpen] = useState(false); 
const [cartItems, setCartItems] = useState([] as CartItemType[]); 
const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

 const getTotalItems = (items:CartItemType[] ) => 
 items.reduce((ack:number, item) => ack + item.amount, 0) 

  const handleAddToCart = (clickedItem: CartItemType) => {
setCartItems( prevItem => {
  const isItemInCart =  prevItem.find(item => item.id === clickedItem.id); 
  if(isItemInCart) {
    return prevItem.map(item =>
    item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
    ); 
  }
  return [ ...prevItem, { ...clickedItem, amount:1 }]
}) 
  };  
  const handleRemoveFromCart = () => null; 

  if (isLoading) return <CircularProgress/>;
  if (error) return <div>Somethin went wrong while loading</div>;

  return ( 
  <Wrapper>
    <Drawer anchor="right" open={isCartOpen} onClose={()=> setIsCartOpen(false)}>
     <Cart 
     cartItems={cartItems}
    addToCart={handleAddToCart}
    removeFromCart={handleRemoveFromCart}
    />
    </Drawer>
<StyledButton onClick={() => setIsCartOpen(true)}>
  <Badge badgeContent={getTotalItems(cartItems)} color="error">
     <AddShoppingCartIcon/>
  </Badge>
</StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;


