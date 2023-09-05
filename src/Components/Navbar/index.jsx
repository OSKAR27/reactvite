import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {ShoppingCartIcon} from "@heroicons/react/24/solid/index.js";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'

    return (
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
          <ul className="flex  items-center gap-3 ">
              <li className="font-semibold text-lg">
                  <NavLink
                      to='/'>
                      Shopi
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/'
                      onClick={() => context.setSearchByCategory()}
                      className={({isActive}) =>
                      isActive ? activeStyle : undefined}>
                      All
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/clothes'
                      onClick={() => context.setSearchByCategory('clothes')}
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      Clothes
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/electronics'
                      onClick={() => context.setSearchByCategory('electronics')}
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      Electronics
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/furniture'
                      onClick={() => context.setSearchByCategory('furniture')}
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      Furniture
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/toys'
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      Toys
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/others'
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      Others
                  </NavLink>
              </li>
          </ul>
          <ul className="flex  items-center gap-3">
              <li className="text-black/60">
                  oscar@gmail.com
              </li>
              <li>
                  <NavLink
                      to='/my_orders'
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      My Orders
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/my_account'
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      MyAccount
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to='/sign_in'
                      className={({isActive}) =>
                          isActive ? activeStyle : undefined}
                  >
                      SignIn
                  </NavLink>
              </li>
              <li className='flex justify-center'>
                  <ShoppingCartIcon className='h-6 w-6 text-black-500'></ShoppingCartIcon>
                  <div>  {context.cartProducts.length}</div>

              </li>
          </ul>
      </nav>
    );
}

export {Navbar};