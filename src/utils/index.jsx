//product es un arreglo
export const totalPrice = (products) => {
    let sum = 0;

    Array.isArray(products) ?
        products.forEach(product => sum+=product.price)
        : null

    return sum;

}