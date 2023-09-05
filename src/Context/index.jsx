import {createContext, useEffect, useState} from 'react';

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = ()  => setIsProductDetailOpen(true);
    const closeProductDetail = ()  => setIsProductDetailOpen(false);


    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = ()  => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = ()  => setIsCheckoutSideMenuOpen(false);


    //product Detail Show Product
    const [productToShow, setProductToShow] = useState({});

    const [cartProducts, setCartProducts] = useState([]);

    const [order, setOrder] = useState([]);

    //Api
    const [items, setItems] = useState(null);

    const [filteredItems, setFilteredItems] = useState(null);


    const [searchByTitle, setSearchByTitle] = useState(null);


    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() =>{

        try {

            fetch('https://api.escuelajs.co/api/v1/products')
                /*     fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')*/
                .then(response => response.json())
                .then(data => setItems(data))


        }catch (error)
        {
            return 'Error';
        }

    },[]);

    const filteredItemByTitle = (items,searchByTitle)  => {

        return items?.filter(item  => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    };

    const filteredItemByCategory = (items,searchByCategory )  => {

        return items?.filter(item  => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    };

    const filteredBy = (searchType,items,searchByTitle,searchByCategory) =>{

        if (searchType==='BY_TITLE'){
            return filteredItemByTitle(items,searchByTitle);
        }

        if (searchType==='BY_CATEGORY'){
            return filteredItemByCategory(items,searchByCategory);
        }

        if (searchType==='BY_TITLE_AND_CATEGORY'){
            return filteredItemByCategory(items,searchByCategory).filter(item => item.title.toLowerCase()
                .includes(searchByTitle.toLowerCase()));
        }

        if (!searchType){
            return items;
        }
    }


    useEffect(() =>{

        if (searchByTitle && searchByCategory){
            setFilteredItems(filteredBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        }

        if (searchByTitle && !searchByCategory){
            setFilteredItems(filteredBy('BY_TITLE',items,searchByTitle,searchByCategory))
        }

        if (!searchByTitle && searchByCategory){
            setFilteredItems(filteredBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        }

        if (!searchByTitle && !searchByCategory){
            setFilteredItems(filteredBy(null,items,searchByTitle,searchByCategory))
        }
    },[items,searchByTitle,searchByCategory]);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
       
    );
}