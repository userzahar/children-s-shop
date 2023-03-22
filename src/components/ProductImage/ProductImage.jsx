const STOPPER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcKBJgRhvVZCBhXqNsNaP-VSnI5dWil8ZBw&usqp=CAU"
export const ProductImage = ({images}) => {
        if(images.length === 0) {
        return <img src={STOPPER} alt=""/>
        }
        else if(images.length === 1) {
        return <img src={images[0].src} alt={images[0].alt}/>
        }
        else {
        return <div>чи працює</div>
}
}
// return <SliderCard images={images} />