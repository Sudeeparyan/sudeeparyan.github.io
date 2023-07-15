// import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar navbar-fixed-top" style={{ backgroundColor: 'rgb(0, 153, 153)' }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <a><div className="div-block-4"></div></a> */}
                        <a className="navbar-brand" href="#" style={{ fontFamily: "Georgia", color: 'black' }}><div className="div-block-4" style={{marginTop:'-8px'}}></div></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#aboutme" style={{ color: 'black', fontFamily: "Georgia" }}> About</a></li>
                        <li><a href="#education" style={{ color: 'black', fontFamily: "Georgia" }}>Education</a></li>
                        <li><a href="#skills" style={{ color: 'black', fontFamily: "Georgia" }}>Skills</a></li>
                        <li><a href="#projects" style={{ color: 'black', fontFamily: "Georgia" }}>Projects</a></li>
                        <li><a href="#contact" style={{ color: 'black', fontFamily: "Georgia" }}>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div id="aboutme" >
                <div className="container" style={{ height: '675px' }}>


                    <div className="row jumbotron" style={{ marginTop: '140px' }}>
                        {/* <div className="col-md-6 bar" ><img src="https://i.postimg.cc/K85vVP8R/My-Photo.jpg" className="img-rounded" id="Myphoto" alt="Myphoto" border="0" style={{ height: '400px' }} /></div> */}
                        <div className="col-md-6 bar" >
                            <span style={{ fontSize: '60px', fontFamily: "Papyrus" }}>Hi there!</span>
                            <p style={{ fontSize: '22px', fontFamily: "Lucida Console" }}>
                                Seeking opportunity as an entry-level
                                engineer, in a challenging environment
                                that builds up an excellent career, while
                                shouldering higher responsibilities and by
                                utilising acquired skills so as to contribute
                                to the value of the organisation by focusing
                                on Web Development and Micro
                                Controllers related areas.
                            </p></div>
                    </div>
                </div>
            </div>
            {/* education */}
            <div id="education">
                <h1 className="headline" >Education</h1>
                <div className='container' >
                    <div className='row work-info'>
                        <div className='col-md-6 work-left'>
                            <h4>
                                2019 - 2023
                            </h4>
                        </div>
                        <div className='col-md-6 work-right'>
                            <span className='glyphicon glyphicon-education'></span>
                            <h5>
                                Bachelor of Technology
                            </h5>
                            <p>
                                Institute : Amrita Vishwa Vidyapeetham
                            </p>
                            <p>
                                Course : Electrical and Electronics Engineering
                            </p>
                            <p>
                                CGPA : 7.9/10 
                            </p>
                        </div>
                    </div>
                    <div className='row work-info'>
                        <div className='col-md-6 work-left'>
                            <h4>
                                2019 - 2021
                            </h4>
                        </div>
                        <div className='col-md-6 work-right'>
                            <span className='glyphicon glyphicon-education'></span>
                            <h5>
                                Higher Secondary Education
                            </h5>
                            <p>
                                Institute : Sri Chaitanya Institutions, Vijayawada
                            </p>
                            <p>
                                Percentage : 97.5
                            </p>
                        </div>
                    </div>
                    <div className='row work-info'>
                        <div className='col-md-6 work-left'>
                            <h4>
                                2018 - 2019
                            </h4>
                        </div>
                        <div className='col-md-6 work-right'>
                            <span className='glyphicon glyphicon-education'></span>
                            <h5>
                                Secondary Education
                            </h5>
                            <p>
                                Institute : Sri Chaitanya High School, Vijayawada
                            </p>
                            <p>
                                CGPA : 10
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills">
                <h1 className="headline" >Skills</h1>
                <div className="row" style={{ lineHeight: '150px' }} >
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/VY1tnLS/C.png" className="skillimage" alt="C" height={100} width={100} border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/HgfZcw6/C.png" className="skillimage" alt="C++" height={100} width={100} border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/RhBG12S/python.png" className="skillimage" alt="python" border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/KrwRwFg/html.png" className="skillimage" alt="html" border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/f16bwzq/css.png" className="skillimage" alt="css" border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/sPYRrrM/react.png" className="skillimage" alt="react" border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.postimg.cc/mrvWcZsr/Java-Script.png" className="skillimage" alt="javascript" height={100} width={100} border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/vBDRGjK/node.png" className="skillimage" alt="node" border="0" /></div>
                    <div className="col-md-4 bar" ><img src="https://i.ibb.co/Sf2yRn8/mongo.png" className="skillimage" alt="mongo" border="0" /></div>
                </div>
            </div>
            <div id="projects">
                <h1 className="headline" >ProJects</h1>
                {/* slidebar */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="500000">

                    <ol className="carousel-indicators" style={{display:'none'}}>
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>


                    <div className="carousel-inner projectmain">
                        {/* main slide and first slide,dont remove item active */}
                        <div className="item active" data-interval="false">
                        <div>
                                <p className="projectname" >Self-Driving Rover Jul ’22 - Nov ’22</p>
                                {/* <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <p className='projectobjective'>• Objective: Implementation of self driving rover with Raspberry pi,which is
                                    able to detect its path and also able to move in the given lane.</p>
                                <p className='projecttools'>• Tools or techniques used : Raspberry Pi 3b+,NVIDIA’s CNN model, Ultrasonic
                                    sensor,Pi camera,DC motors.</p>
                            </div>
                        </div>

                        {/* <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >SD-Cart Dec ’22 - Present</p>
                                <p className='projectobjective'>• Objective: A Clone veh2sion of Amazon.</p>
                                <p className='projecttools'>• Tools or techniques used: HTML, CSS, Bootstrap, JavaScript, React, Nodejs,
                                    MongoDB, Express, Heroku.</p>
                                <p className='projectoutcome'>• Outcome: Designed a E-commerce web page.</p>
                            </div>
                        </div> */}

                        {/* <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Sudoku Solver May ’23 - Jun ’23</p>
                                <p className='projectobjective'>• Objective: 9*9 Sudoku Solver using Back Tracking Algorithm.</p>
                                <p className='projecttools'>• Tools or techniques used: HTML, CSS, JavaScript, Back Tracking
                                    Algorithm.</p>
                                <p className='projectoutcome'>• Outcome:- Solves partial 9*9 sudoku using back tracking algoritham .</p>
                            </div>
                        </div> */}

                        <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Sequential and Simultaneous LED Illumination Loop Mar ’23 - Apr ’23</p>
                                <p className='projectobjective'>• Objective: Developed an LED animation system to showcase sequential
                                    and simultaneous illumination patterns, creating an engaging visual
                                    display.</p>
                                <p className='projecttools'>• Tools or techniques used: PIC18F452, Proteus, MPLAB.</p>
                                <iframe className="projectdoc" src="https://drive.google.com/file/d/1v2uEV9IVVCU_uvMRYzxULiWWljCBFsek/preview?usp=embed_googleplus"  width="300px" height="300px" allowfullscreen></iframe>
                            </div>
                        </div>  
                        <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Real-Time Fast Fourier Transform (FFT) Analysis Mar ’23 - Apr ’23</p>
                                <p className='projectobjective'>• Objective: Obtaining amplitude vs frequency graph of any audio signal
                                    using real time Fast Fourier Transform (FFT).</p>
                                <p className='projecttools'>• Tools or techniques used: Arduino UNO, Sound Sensor, Arduino IDE,
                                    MATLAB.</p>
                                <iframe className="projectdoc" src="https://drive.google.com/file/d/1WkMPUVcaB30_-6SQAfOxwMXrmQtvmT4f/preview?usp=embed_googleplus" width="300px" height="300px" allowfullscreen></iframe>
                            </div>
                        </div>
                        {/* <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Self-Driving Rover Jul ’22 - Nov ’22</p>
                                <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p className='projectobjective'>• Objective: Implementation of self driving rover with Raspberry pi,which is
                                    able to detect its path and also able to move in the given lane.</p>
                                <p className='projecttools'>• Tools or techniques used : Raspberry Pi 3b+,NVIDIA’s CNN model, Ultrasonic
                                    sensor,Pi camera,DC motors.</p>
                            </div>
                        </div> */}
                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div id="contact">
                <h1 className="headline" >Contact</h1>

                <div className="container" >
                    <div className='row'style={{marginTop:'10px'}}>
                        <div className='col-md-6'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.96565998386!2d78.45949881466605!3d14.714533589730038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb389efd41ca6ad%3A0xd21e447105818ff3!2sAF%20APARTMENT!5e0!3m2!1sen!2sin!4v1660049458028!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                        <div className='col-md-6'>
                            <div>
                                <p style={{ fontSize: "20px", color: 'white' }}>AF-107, R.T.P.P, V.V.Reddy
                                    Nagar, Yerraguntla(MDL), Kadapa(district)
                                    AndhraPradesh(St), India. PIN CODE : 516312</p>
                                <p>
                                    <span style={{ fontSize: "20px", color: 'white' }}>Mobile : +91 9493574757</span>&nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "20px", color: 'white' }}>E-mail : <a href="sudeeparyang@gmail.com" target="_blank" style={{ fontFamily: "Roboto Condensed", fontSize: "20px", color: 'white' }} >sudeeparyang@gmail.com</a></span>
                                </p>
                            </div>
                            <div id="socialnetwork" style={{ marginTop: '-6px' }}>
                                {/* <a href="https://github.com/SuvardhanDileep" target="_blank"><img src="https://i.postimg.cc/D0jsHk21/Github.png" height="30px" width="30px" alt="Github" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/feed/" target="_blank"><img src="https://i.postimg.cc/L6vrbqkP/Linkdin-Icon.png" heigth="30px" width="30px" alt="Linkedin" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://twitter.com/home" target="_blank"><img src="https://i.postimg.cc/PqDVTND2/Twitter-Icon.png" height="30px" width="34" alt="Twitter" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.facebook.com/" target="_blank"><img src="https://i.postimg.cc/mDZYqq2T/Facebook-icon.png" height="30px" width="30px" alt="Facebook" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.instagram.com/" target="_blank"><img src="https://i.postimg.cc/4yPzXRw8/Instagram-Icon.png" heigth="30px" width="30px" alt="Instagram" /></a>&nbsp;&nbsp;&nbsp;&nbsp; */}
                            </div>
                            <div className="contactform" style={{ marginTop: '12px' }}>
                                <form>
                                    <input type="text" name="Name" placeholder='Name' required></input>
                                    <input className="email" name="Email" placeholder='Email' required></input>
                                    <input className="phone" name="Phone" placeholder='Phone' required></input>
                                    <textarea className="message" name='Message' placeholder='Message' required></textarea>
                                    <input type="submit" value="SUBMIT"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                    <h2>&copy; Sudeep Aryan Website</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
