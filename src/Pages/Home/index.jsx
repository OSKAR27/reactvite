import Layout from "../../Components/Layout/index.jsx";
import Card from "../../Components/Card/index.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {useContext} from "react";

function Home() {
    const context = useContext(ShoppingCartContext);

    const renderViews = () =>{
        if (context.searchByTitle?.length>0)
        {
            return ( context.filteredItems?.map(item => (
                <Card key={item.id} data={item}/>
            )))
        }

        if (context.searchByTitle?.length>0 && context.filteredItems?.length===0){
            return (<div>
                We Don´t Have Anything
            </div>)
        }

        return (
            context.items?.map(item => (
                <Card key={item.id} data={item}/>
            ))
        )
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-2'>
                <h1 className='font-medium text-xl'> Exclusive Products</h1>

            </div>
            <input type="text" placeholder='Search a Product'
                   className='border border-black rounded-lg w-96 p-2 mb-4 focus:outline-none'
                   onChange={(event)=>{context.setSearchByTitle(event.target.value) }}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                   renderViews()
                }
            </div>
            <ProductDetail/>
        </Layout>

    )
}

export default Home

