import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";


function Scanner() {

const [scanResult , setScanResult] = useState(null)
const [scannerKey, setScannerKey] = useState(Date.now()); 

function handleClick(){
console.log('click')
    setScanResult(null)
    setScannerKey(Date.now());
}


useEffect(() => {
    if (!scanResult) {
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(success, error);

      function success(result) {
        scanner.clear();
        setScanResult(result);
      }

      function error(err) {
        return err;
      }

      return () => {
        scanner.clear();
      };
    }
  }, [scanResult, scannerKey]);

  return (
    <div>

{scanResult? <><div id='reader' hidden={true}></div><p> Congratulations your barcode is {scanResult}</p>
<button onClick={handleClick}> Go back!</button>
</>



: <div id='reader'> </div>  }

    </div>
  );
}

export default Scanner
