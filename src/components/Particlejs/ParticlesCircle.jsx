import React from 'react';
import Particles from "react-tsparticles";

export const ParticlesCircle = (props) => {
    return (
        <Particles
                id="tsparticles"
                init={props.particlesInit}

                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 30,
                            "density": {
                                "enable": false,
                                "value_area": 300
                            }
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                              },
                              image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100
                              }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 2,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 130,
                            "color": "#ffffff",
                            "opacity": 1,
                            "width": 1,
                            condensed_mode: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600
                              }
                        },

                        "interactivity": {
                            detect_on: "canvas",
                            events: {
                              onhover: {
                                enable: false
                              },
                              onclick: {
                                enable: false
                              },
                              resize: true
                            }
                            },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "retina_detect": true,
                    
                }}
            />
    );
}