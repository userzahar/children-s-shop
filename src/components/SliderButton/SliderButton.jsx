
const LEFT_BUTTON_IMAGE = "https://cdn-icons-png.flaticon.com/512/860/860790.png";
const RIGHT_BUTTON_IMAGE = "https://w7.pngwing.com/pngs/475/618/png-transparent-arrow-computer-icons-bar-chart-arrow-angle-chevron-svg-filter-effects.png"
export function SliderButton({ direction, onClick }) {
    const imageSrc = direction === 'left' ? LEFT_BUTTON_IMAGE : RIGHT_BUTTON_IMAGE;
  const altText = direction === 'left' ? 'Previous Slide' : 'Next Slide';

  return (
      <button className={`slider-button slider-button--${direction}`} onClick={onClick} title={altText}>
      <img width="15px" heigth="15px" src={imageSrc} alt="" />
    </button>
  );
}