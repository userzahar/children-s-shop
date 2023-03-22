import { useEffect } from "react";
import { useState } from "react"
const STOPPER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcKBJgRhvVZCBhXqNsNaP-VSnI5dWil8ZBw&usqp=CAU"

export function ProductCard({ data }) {
    const [photo, setPhoto] = useState('');
    const [alt, setAlt] = useState('');
    useEffect(() => {
        if (data.photo.length === 1) {
        setPhoto(data.photo[0].src)
        setAlt(data.photo[0].alt)
    } else if (data.photo.length > 1) {
        // * робим кнопки слайдера видимими вони будуть міняти setPhoto(data.photo[0][1][2]...)
        setPhoto(data.photo[0].src)
        setAlt(data.photo[0].alt)
    } else {
        setPhoto(STOPPER)
    }
    }, []);

    return <div className="product-card">
        <img src={photo} alt={alt} width="240px"></img>
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