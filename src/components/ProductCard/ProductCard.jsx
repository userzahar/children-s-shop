
export function ProductCard ({children,productName,productPrice}) {
    return <div className="product-card">
        {children} 
        <div>
            <p>{productName}</p>
            <span>{productPrice}</span>
        </div>
    </div>
}


    // <ProductCard productName={"Рукавички"} productPrice={'0.33грн'}>
    //   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcKBJgRhvVZCBhXqNsNaP-VSnI5dWil8ZBw&usqp=CAU" alt="" />
    //   </ProductCard>