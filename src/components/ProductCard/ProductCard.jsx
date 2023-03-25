
const STOPPER = "https://media.licdn.com/dms/image/C560BAQGS7sdpNYWnEA/company-logo_200_200/0/1612902438159?e=2147483647&v=beta&t=w1NqDOjYxZIEsMXd2AQQF0IXHmoxmEuP3rYsKG_Vfdk"

export function ProductCard({ data }) {
    const { name, price, photo } = data;
    let srcImg = '';
    let altImg = '';
    if (photo.length === 1) {
        srcImg = photo[0].src
        altImg = photo[0].alt
    } else if (photo.length > 1) {
 // * тут буде слайдер
        srcImg = photo[1].src
        altImg = photo[1].alt
    } else {
        srcImg = STOPPER;
        altImg = '';
    }
    const hendleButton = ({ target }) => {
        if (target.name === 'left') {
            console.log('ліва кнопка')
        }
         else{console.log('права кнопка')}
    }

    return <li className="product-card">
        <img src={srcImg} alt={altImg} width="240px" height="300px"></img>
        {photo.length > 1 && <>
            {<button type="button" onClick={hendleButton} name='left'>left</button>}
            <button type="button" onClick={hendleButton} name='right'>right</button>
        </>}
        <div>
            <p>{name}</p>
            <span>{price} грн</span>
        </div>
    </li>
}

    // <ProductCard data={{
    //     name: "Сенсорні кульки",
    //     id: "id-9",
    //     price: 150,
    //   photo: [
        
    //         {src:"https://content2.rozetka.com.ua/goods/images/big/280916356.jpg", alt:"невалідна картинка"}, 
    //         {src:"https://i.ibb.co/V3CCZN8/photo-2023-03-15-19-48-43-6.jpg", alt:"валідна картинка"}
    // ],
    //     category: ["Іграшки"],
    //     description: ""
    // } } />
    
    //  const [photo, setPhoto] = useState('');
    // const [alt, setAlt] = useState('');
    // const [photoID, setPhotoID] = useState(0);
    // const [showBtn, setShowBtn]=useState(false)
    // useEffect(() => {
    //     if (data.photo.length === 1) {
    //         setPhoto(() => {
    //             if (data.photo[0].src === '')
    //                 return STOPPER;
    //             return data.photo[0].src
    //         })
    //     setAlt(data.photo[0].alt)
    // } else if (data.photo.length > 1) {
    //     setShowBtn(true);
    //     setPhoto(data.photo[0].src)
    //     setAlt(data.photo[0].alt)    
    // } else {
    //     setPhoto(STOPPER)
    // }
    // }, []);
    // useEffect(() => {
    //     setPhoto(data.photo[photoID].src)
    //     setAlt(data.photo[photoID].alt) 
    // },[photoID])

    // const previousSlide = () => {
    // setPhotoID(state=>state - 1);
    // };
    // const nextSlide = () => {
    // setPhotoID(state=>state + 1);
    // };
    