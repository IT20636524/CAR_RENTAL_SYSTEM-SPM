import React from 'react'
import { Button } from 'react-bootstrap'

export default function CarReport() {
    return (
        <div>
            <Button className="btn-dashb me-5 rounded " variant="warning" style={{ "width": "300px", "height": "50px", "marginLeft": "900px", "fontSize": "20px", "marginTop": "25px" }}>
                Generate Report
            </Button>
        </div>
    )
}
