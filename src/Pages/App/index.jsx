import {useRoutes,BrowserRouter} from "react-router-dom";
import Home from "../Home/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
import './App.css'
import {Navbar} from "../../Components/Navbar/index.jsx";
import {ShoppingCartProvider} from "../../Context/index.jsx";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/index.jsx";
import { ErrorBoundary } from 'react-error-boundary'

// eslint-disable-next-line react/prop-types
function MyFallbackComponent({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

const AppRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/clothes', element: <Home/>},
        {path: '/electronics', element: <Home/>},
        {path: '/furniture', element: <Home/>},
        {path: '/toys', element: <Home/>},
        {path: '/others', element: <Home/>},
        {path: '/my_order', element: <MyOrder/>},
        {path: '/my_orders', element: <MyOrders/>},
        {path: '/my_orders/last', element: <MyOrder/>},
        {path: '/my_orders/:id', element: <MyOrder/>},
        {path: '/my_account', element: <MyAccount/>},
        {path: '/sign_in', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ]);
}

const  App  = () => {

  return (

      <ErrorBoundary
          FallbackComponent={MyFallbackComponent}
          onReset={() => {
              // reset the state of your app here
          }}
          resetKeys={['someKey']}
      >
          <ShoppingCartProvider>
              <BrowserRouter>
                  <AppRoutes />
                  <Navbar />
                  <CheckoutSideMenu />
              </BrowserRouter>
          </ShoppingCartProvider>
      </ErrorBoundary>
  )
}

export default App
