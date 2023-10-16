/* eslint-disable react/prop-types */
import styles from "./Carousel.module.css";

/**
 * Renders an individual carousel component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.id - The id of the carousel
 * @param {JSX.Element} props.props - The children of the carousel
 * @returns {JSX.Element} - The rendered carousel item component.
 */
const Carousel = ({ id, props }) => {
  const handleClickScrollLeft = (e) => {
    const carousel = document.getElementById(e);
    if (carousel) {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleClickScrollRight = (e) => {
    const carousel = document.getElementById(e);
    if (carousel) {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.carousel__container}>
      <button
        className={styles.carousel__button__left}
        onClick={() => handleClickScrollLeft(id)}
      >
        <img className={styles.carousel__button__img} src="assets/icons/left-arrow.svg" alt="arrow" />
      </button>
      <div id={id} className={styles.carousel}>
        {props}
      </div>
      <button
        className={styles.carousel__button__right}
        onClick={() => handleClickScrollRight(id)}
      >
        <img className={styles.carousel__button__img} src="assets/icons/right-arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Carousel;
