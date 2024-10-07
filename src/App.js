import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const App = () => {
  const [data, setData] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      // Extracting the text property from the result object
      setData(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>QR Code Scanner</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>Scanned Result: {data}</p>
    </div>
  );
};

export default App;
