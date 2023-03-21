
export function ProductCard ({productImage,productName,productPrice}) {
    return <div className="product-card">
        <img src={productImage} alt="" /> 
        <div>
            <p>{productName}</p>
            <span>{productPrice}</span>
        </div>
    </div>
}


    // <ProductCard productName={"Рукавички"} productPrice={'0.33грн'} productImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcKBJgRhvVZCBhXqNsNaP-VSnI5dWil8ZBw&usqp=CAU'} />