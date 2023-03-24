import { SliderButton } from "components/SliderButton/SliderButton";
import { useEffect } from "react";
import { useState } from "react"

const STOPPER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcKBJgRhvVZCBhXqNsNaP-VSnI5dWil8ZBw&usqp=CAU"

export function ProductCard({ data }) {
    const [photo, setPhoto] = useState('');
    const [alt, setAlt] = useState('');
    const [photoID, setPhotoID] = useState(0);
    const [showBtn, setShowBtn]=useState(false)
    useEffect(() => {
        if (data.photo.length === 1) {
            setPhoto(() => {
                if (data.photo[0].src === '')
                    return STOPPER;
                return data.photo[0].src
            })
        setAlt(data.photo[0].alt)
    } else if (data.photo.length > 1) {
        setShowBtn(true);
        setPhoto(data.photo[0].src)
        setAlt(data.photo[0].alt)    
    } else {
        setPhoto(STOPPER)
    }
    }, []);
    useEffect(() => {
        setPhoto(data.photo[photoID].src)
        setAlt(data.photo[photoID].alt) 
    },[photoID])

    const previousSlide = () => {
    setPhotoID(state=>state - 1);
    };
    const nextSlide = () => {
    setPhotoID(state=>state + 1);
    };
    
    
    return <li className="product-card">
        <img src={photo} alt={alt} width="240px" height="300px"></img>
        {showBtn && <>
            <SliderButton direction="left" onClick={previousSlide} />
            <SliderButton direction="right" onClick={nextSlide} />
        </>}
        <div>
            <p>{data.name}</p>
            <span>{data.price} грн</span>
        </div>
    </li>
}

    <ProductCard data={{
        name: "Сенсорні кульки",
        id: "id-9",
        price: 150,
      photo: [
        
            {src:"https://content2.rozetka.com.ua/goods/images/big/280916356.jpg", alt:"невалідна картинка"}, 
            {src:"https://i.ibb.co/V3CCZN8/photo-2023-03-15-19-48-43-6.jpg", alt:"валідна картинка"}
    ],
        category: ["Іграшки"],
        description: ""
    } } />