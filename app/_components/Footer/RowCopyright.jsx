import styles from "./RowCopyright.module.css";
const CopyrightHolder = (now) => (
  <>
    <div
      className={`${styles.footerCopyright} flex flex-wrap justify-center content-center items-center`}
    >
      &copy; {new Date().getFullYear()} hydronic heating Service Melbourne. All
      Rights Reserved.
    </div>
  </>
);
export default CopyrightHolder;
