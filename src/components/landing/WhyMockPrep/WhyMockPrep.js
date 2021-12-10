import React from 'react'
import "./WhyMockPrep.css"
import { sellingPointers } from '../../../constant/data'

export default function WhyMockPrep () {
    return (
        <div>
            <h2 className="headline" style={{marginTop:"10vh"}}>Why MockPrep ?</h2>
                    <section className="sell-pointer">
                        {sellingPointers.map(pointer => (
                            <section  className="pointer" key={pointer.id}>
                                <p className="point"> <i className={pointer.icon}></i>{pointer.text}</p>
                            </section>
                        ))}
                    </section>
        </div>
    )
}
