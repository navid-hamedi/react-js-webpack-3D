/**
 *  THIS IS ONLY USED FOR TESTING SERVER SIDE PHP SCRIPTS
 */

import React, { useEffect } from "react";

function PhpTest () {

    useEffect(() => {
        fetch('http://localhost/react-js-webpack-base/server/public/connect.php')
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, []);

    return (
        <div className="php">
            <p>PHP</p>
        </div>
    );
}

export default PhpTest;