import styles from "./PromoAside.module.css";
const PromoAside = ({ dataTitle, dataTelefon, dataText }) => {
  return (
    <a
      href="tel:0405133761"
      className={`${styles.promo__aside} block relative bg-no-repeat bg-right text-center lazyload`}
      data-bg="../images/services/promo_bgmap.png"
      title="Сall me 0405133761"
      aria-label={`Сall me 0405133761`}
    >
      {dataTitle ? (
        <h3 className={`${styles.promo__aside_title}`}>{dataTitle}</h3>
      ) : null}
      {dataText ? <p>{dataText}</p> : null}
      {dataTelefon ? (
        <address>
          <span className="icon-25453 relative"></span> {dataTelefon}
        </address>
      ) : null}
    </a>
  );
};
export default PromoAside;
