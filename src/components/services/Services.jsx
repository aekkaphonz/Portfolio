import React, { useState } from 'react'
import "./services.css"

const Services = () => {

    const[toggleState, setToggleState] =useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }


  return (
    <section className="services section" id="services">
         <h2 className="section__title">Work</h2>
         <span className="section__subtitle">I'm looking for a position</span>

         <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                    Frontend <br/> Developer</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>View More<i 
                className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times
                         services__modal-close"></i>

                         <h3 className="services__modal-title">
                         Frontend Developer</h3>

                         <p className="services__modal-description">
                         Fourth-year Frontend Developer with a passion for creating responsive, 
                         user-friendly websites. Eager to contribute skills to innovative projects.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I align web design with brand identity.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I create prototypes for testing user experience.
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                    Backend <br/> Developer</h3>
                </div>

                <span onClick={()=> toggleTab(2)} className="services__button ">View More <i 
                className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times
                         services__modal-close"></i>

                         <h3 className="services__modal-title">Backend Developer</h3>

                         <p className="services__modal-description">
                         Fourth-year student seeking an internship in Backend Development. Familiar with server-side logic,
                          database management, and API integration. 
                          Eager to learn and contribute to scalable, secure systems.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I design and implement server-side logic.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I manage and optimize databases.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I integrate third-party APIs and services.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I ensure application security and data protection.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I develop and maintain server infrastructure.
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                    Software <br/> Tester</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(3)}>View More <i 
                className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times
                         services__modal-close"></i>

                         <h3 className="services__modal-title">
                         Software Tester</h3>

                         <p className="services__modal-description">
                         Fourth-year student seeking a Software Testing internship. 
                         Skilled in test cases, bug tracking, and quality assurance. 
                         Ready to contribute to high-quality software delivery.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I create and run test cases.

                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I track and report bugs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I perform manual and automated tests.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I collaborate to fix defects.

                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I ensure software quality and performance.
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Services