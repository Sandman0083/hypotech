import React from "react"

function Footer(){
    var d = new Date().getFullYear()
    return(
        <div>

            <footer className="foot">
            <hr></hr>
            © {d} SuperHypoTech Solutions. All Rights Reserved.
            </footer>
        </div>
    )
}

export default Footer