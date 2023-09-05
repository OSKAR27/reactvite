import Layout from "../../Components/Layout/index.jsx";
import OrdersCard from "../../Components/OrdersCard/index.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Context/index.jsx";


function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1> My Orders</h1>
            </div>

            {
                context.order.map((order,index)  =>(
                    <Link  key={index} to={`/my_orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }

        </Layout>
    )
}

export default MyOrders

