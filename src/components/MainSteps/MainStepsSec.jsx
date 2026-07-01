import React from 'react'
import "./mainsteps.css"
import lineImg from "../../assets/icon/line.png"

export default function MainStepsSec() {
  return (
    <section className='MainStepsSec container'>
        <h1>
            Main Steps
        </h1>
        <h2>
            Online learning process
        </h2>
        <ul className="stepsList">
            <li>
                <h3>01 <img src={lineImg} alt="" /></h3>
                <h4>Watching online video lectures</h4>
                <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
            </li>
            <li>
                <h3>02 <img src={lineImg} alt="" /></h3>
                <h4>Passing test</h4>
                <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.</p>
            </li>
            <li>
                <h3>03 <img src={lineImg} alt="" /></h3>
                <h4>Curator’s feedback</h4>
                <p>Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</p>
            </li>
            <li>
                <div className='spepListNumber'>
                    <h3>04</h3>
                </div>
                <h4>Corrections if needed</h4>
                <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
            </li>
        </ul>
    </section>
  )
}
