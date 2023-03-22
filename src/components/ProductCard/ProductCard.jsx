import { ProductImage } from "components/ProductImage/ProductImage"


export function ProductCard({ data }) {
    

    return <div key={data.id} className="product-card">
        <ProductImage images={data.photo}/>
        <div>
            <p>{data.name}</p>
            <span>{data.price}</span>
        </div>
    </div>
}

    // <ProductCard data={{
    //     name: "Ромпер з собаками",
    //     id: "id-1",
    //     price: 510,
    //     photo: [
    //         {src:"https://i.ibb.co/Hq1myG9/photo-2023-03-15-19-48-42.jpg", alt:"ромпер"}
    //     ],
    //     category: ["одяг","для найменших"],
    //     description: "Тринитка на флісі. Розмір 62см."
    // } } />