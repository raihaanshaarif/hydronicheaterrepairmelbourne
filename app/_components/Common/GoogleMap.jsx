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
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.645199706158!2d145.25504947663677!3d-38.032050146546254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61110421af639%3A0x4be85ee3b86b4b0d!2s12%20The%20Fairway%2C%20Hampton%20Park%20VIC%203976%2C%20Australia!5e0!3m2!1sen!2sbd!4v1756899736567!5m2!1sen!2sbd"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  </>
);
export default GoogleMap;
