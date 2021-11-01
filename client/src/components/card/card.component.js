import React from "react"
import { Button, Image } from "react-bootstrap"
import COIN from "../../images/coin.png"
import "./card.css"


function Card() {
    return(
        <div className="card">
            <div className="card-header">
                <h3>Penjualan Bulan ini</h3>
            </div>
            <div className="card-content">
                <div className="card-body">
                    <div className="dashboard-content-left">
                        <h1>Rp. 23.000.000</h1>
                        <p>Penjualan bulan lalu: Rp. 5.000.000</p>
                        <Button variant="primary">Lihat Penjualan</Button>
                    </div>
                    <div className="dashboard-content-right">
                        <div style={{width: "100%"}}>
                            <Image src={COIN} className="image-responsive" width={60} height={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default Card