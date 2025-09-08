//Import Database
import { socials } from "../../_dataGeneralSite/dataSocials";
//Import styles
import styles from "./Socials.module.css";
const Socials = ({ wrapperClass, titleData, titleClass }) => {
  if (!socials) return null;
  return (
    <>
      <div className={`${styles.social} ${wrapperClass || ""}`}>
        <div
          className={`social__title whitespace-nowrap ${
            titleClass || "ttsubtitle"
          }`}
        >
          {titleData || "Follow us"}
        </div>
        <ul className={`inline-flex`}>
          {socials.map(({ id, icon, path, title, ariaLabel }) => (
            <li key={id}>
              <a
                href={path}
                className={`inline-flex justify-center items-center relative`}
                target="_blank"
                rel="noreferrer noopener"
                title={title}
                aria-label={`${ariaLabel} ${title}`}
              >
                {icon ? <i className={`${icon}`} aria-hidden="true" /> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Socials;
