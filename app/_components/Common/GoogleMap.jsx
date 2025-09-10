import styles from "./GoogleMap.module.css";
const GoogleMap = () => (
  <>
    <div
      id="map"
      className={`lazyload relative ${styles.map} bg-cover bg-center`}
      data-bg="../images/map-footer.jpg"
    >
      <iframe
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        title="Google maps"
        loading="lazy"
        className="lazyload size-full outline-none"
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.926485260907!2d145.1133003766326!3d-37.93214784081445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b3d8224a0af%3A0x79ba4175339b3119!2s5%20Frank%20Ave%2C%20Clayton%20South%20VIC%203169%2C%20Australia!5e0!3m2!1sen!2sbd!4v1757501532649!5m2!1sen!2sbd"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  </>
);
export default GoogleMap;
