"use client"
import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import Image from "next/image"

export const HeroSection = () => {
    const [init, setInit] = useState<boolean>(false)

    const options: ISourceOptions = useMemo(() => ({
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": [],
                    "enable": false,
                    "type": "circle"
                },
                "onHover": {
                    "enable": true,
                    "mode": "grab",
                    "parallax": {
                        "enable": true,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "resize": {
                    "delay": 0.5,
                    "enable": true
                }
            },
            "modes": {
                "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                },
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "mix": false,
                    "opacity": 0.8,
                    "size": 40,
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": []
                    }
                },
                "connect": {
                    "distance": 80,
                    "links": {
                        "color": {
                            "value": "#06B6D4"
                        },
                        "opacity": 0.8
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "push": {
                    "default": true,
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": []
                    }
                },
                "slow": {
                    "factor": 3,
                    "radius": 200
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#FFFF00"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                }
            }
        },
        "particles": {
            "bounce": {
                "horizontal": {
                    "value": 1
                },
                "vertical": {
                    "value": 1
                }
            },
            "collisions": {
                "absorb": {
                    "speed": 2
                },
                "bounce": {
                    "horizontal": {
                        "value": 1
                    },
                    "vertical": {
                        "value": 1
                    }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": "#06B6D4",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    }
                }
            },
            "effect": {
                "close": true,
                "fill": false,
                "options": {},
                "type": "repulse"
            },
            "move": {
                "angle": {
                    "offset": 0,
                    "value": 90
                },
                "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                        "x": 3000,
                        "y": 600
                    }
                },
                "center": {
                    "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "value": 0
                    },
                    "enable": false,
                    "options": {}
                },
                "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                    "acceleration": 0,
                    "enable": false
                },
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fill": {}
                },
                "vibrate": false,
                "warp": false
            },
            "number": {
                "density": {
                    "enable": true,
                    "width": 1920,
                    "height": 1080
                },
                "limit": {
                    "mode": "delete",
                    "value": 0
                },
                "value": 100
            },
            "opacity": {
                "value": {
                    "min": 0.1,
                    "max": 0.4
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 3,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
                }
            },
            "reduceDuplicates": false,
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "close": true,
                "fill": true,
                "options": {}
            },
            "size": {
                "value": {
                    "min": 3,
                    "max": 9
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 3,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
                }
            },
            "stroke": {
                "width": 0,
                "color": {
                    "value": "#000"
                }
            },
            "zIndex": {
                "value": 1,
                "opacityRate": 0.5
            }
        },
        "polygon": {
            "enable": false,
            "scale": 1,
            "type": "inline",
            "move": {
                "radius": 10,
                "direction": "none",
                "speed": 1
            },
            "inline": {
                "arrangement": "equidistant",
                "enable": true,
                "scale": 1,
                "radius": 10,
                "position": "relative",
                "move": {
                    "direction": "none",
                    "speed": 1
                },
                "fill": {
                    "color": "#000"
                }
            }
        },
        "style": {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "zIndex": "-1"
        }
    }), [])

    useEffect(() => {
        const initParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine)
            })
            setInit(true)
        }

        initParticles()
    }, [])

    return (
        <div id="home" className="relative w-full pt-12 lg:pt-24 bg-gray-50">
            <div className="absolute w-full h-full">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={options}
                    />
                )}
            </div>
            <div className="mx-auto px-5 md:px-10 xl:px-0 w-full xl:w-2/3 flex flex-col lg:flex-row items-center gap-10">
                <div className="relatice flex-1 z-10">
                    <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold text-center lg:text-left text-zinc-900">
                        Nós cuidamos da sua saúde.
                    </h1>
                    <p className="mt-1 mb-8 text-sm text-center lg:text-left text-zinc-500">
                        Com 32 centros médicos espalhados por todo o Brasil,
                        atendemos desde 2014 mais de 20.000 pacientes. Nossa
                        equipe médica atende as especialidades cardiologia, pediatria,
                        geriatria, neurologia, ginecologia e muitas outras. Nosso corpo
                        médico é altamente especializado, todos os médicos possuem pós-doutorado,
                        certificações e artigos importantes.
                    </p>
                    <button className="mx-auto py-4 px-5 flex justify-center lg:mx-0 lg:block w-full bg-cyan-500 text-base md:text-lg text-center font-semibold text-white transition-opacity duration-300 hover:opacity-75">
                        Falar com um especialista agora
                    </button>
                </div>
                <div className="w-full flex-1">
                    <Image
                        src="/images/hero/hero-image.png"
                        width={800}
                        height={500}
                        alt="Nós cuidamos da sua saúde"
                    />
                </div>
            </div>
        </div>
    )
}