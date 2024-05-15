import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
          <div className="embed-responsive embed-responsive-21by9">
              <iframe
                  className="embed-responsive-item"
                  title="location title"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4479.836172920029!2d98.68092938265252!3d3.6172889298753437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031321f52b3b349%3A0x8e02e53e0be9d8be!2sJl.%20Gunung%20Krakatau%2C%20Glugur%20Darat%20I%2C%20Kec.%20Medan%20Tim.%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1714804128367!5m2!1sid!2sid"
              ></iframe>
          </div>
      </div>
        {/* End google-map */}
    </>
  );
};

export default Map;
