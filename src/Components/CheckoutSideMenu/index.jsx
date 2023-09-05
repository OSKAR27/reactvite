import './style.css';
import {XMarkIcon} from "@heroicons/react/24/solid";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Context/index.jsx";
import OrderCard from "../OrderCard/index.jsx";
import {totalPrice} from "../../utils/index.jsx";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id)  => {
        const filteredProduct = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProduct);
    };


    const handleCheckOut = ()  => {
        //creamos la orden
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        //Agregamos la orden con las demas ordenes
        context.setOrder([...context.order,orderToAdd]);

        //Limpiamos orden actual
        context.setCartProducts([]);

        context.setSearchByTitle(null);
    };

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-sidemenu flex flex-col fixed right-0 border border-black rounded
         bg-white`}>

            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'> My Order</h2>
                <div >
                    <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer'
                               onClick={()=> context.closeCheckoutSideMenu()}
                    ></XMarkIcon>
                </div>
            </div>


            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />))
                }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center md-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)} </span>
                </p>
                <Link to='/my_orders/last'>
                    <button
                        className='w-full bg-black py-3 text-white rounded-lg'
                        onClick={()=> handleCheckOut()}> Checkout</button>
                </Link>

            </div>

        </aside>
    );
}

export default CheckoutSideMenu