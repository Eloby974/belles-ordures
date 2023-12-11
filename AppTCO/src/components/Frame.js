import React from 'react';

const Frame = () => {
  return (
    <iframe
      src="https://data.tco.re/explore/embed/dataset/meteo-des-decheteries/map/?dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6Im1ldGVvLWRlcy1kZWNoZXRlcmllcyIsIm9wdGlvbnMiOnt9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoiY29sdW1uIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoibGF0Iiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzY2YzJhNSJ9XSwieEF4aXMiOiJ0aXRyZSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIifV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9&location=8,-20.00432,55.73639&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=true"
      width="400"
      height="300"
      frameborder="0"
      allowfullscreen>
    </iframe>
  );
};

export default Frame;