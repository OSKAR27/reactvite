import {XMarkIcon} from "@heroicons/react/24/solid/index.js";

const OrderCard = props => {
    // eslint-disable-next-line react/prop-types
    const {id,tittle,imageUrl,price,handleDelete} = props;

    let renderXMarkIcon;

    if (handleDelete){
        renderXMarkIcon = <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer'
                                     onClick={ ()  =>  handleDelete(id)}
        ></XMarkIcon>
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={tittle}/>
                    <p className='text-sm font-light'>
                        {tittle}
                    </p>
                </figure>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                {
                    renderXMarkIcon
                }
            </div>
        </div>
    )
}

export default OrderCard