import { useEffect } from 'react';
import './App.css'
import { Helmet } from 'react-helmet';


function App() {


  function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1)

    } else {
      document.addEventListener("DOMContentLoaded", fn)
    }
  }

  domReady(function () {
    let myqr = document.getElementById('qrResult')
    let lastResult, countResults = 0

    function onScanSuccess(decodeText, decodeResult) {
      if (decodeText !== lastResult) {
        ++countResults;
        lastResult = decodeText;

        alert("Qr: " + decodeText, decodeResult)

        myqr.innerHTML = `you scan ${countResults} : ${decodeText}`

      }

    }

    let htmlscanner = new Html5QrcodeScanner(
      "qrReader", { fps: 10, qrbox: 250 })

    htmlscanner.render(onScanSuccess)

  })


  return (
    <>
      <Helmet>
        <script src='https://unpkg.com/html5-qrcode'></script>

      </Helmet>

      <div id='qrResult'>
        <h1>Scan qr</h1>
        <div id='qrReader'>

        </div>
      </div>

    </>
  )
}

export default App
