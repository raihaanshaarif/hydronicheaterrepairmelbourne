import styles from "./Telephone.module.css";
export default function Telephone() {
  return (
    <div className={`${styles.tel__holder} whitespace-nowrap relative`}>
      <span className={`${styles.tel__text} md-max:hidden`}>
        Need Help Now? Call Us!
      </span>
      <a
        href="tel:0405133761"
        className={`${styles.tel__tel} flex`}
        title="Сall me 0405133761"
        aria-label={`Сall me 0405133761`}
      >
        <i
          className={`${styles.tel__icon} icon-25453 relative inline-block`}
        ></i>
        0405133761
      </a>
    </div>
  );
}
