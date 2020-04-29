import React from "react";
import Particles from "react-particles-js";
import FastfoodIcon from "@material-ui/icons/Fastfood";

export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      params={{
        absorbers: [],
        background: {},
        backgroundMask: {
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        detectRetina: true,
        emitters: [],
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            absorbers: [],
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            emitters: [],
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
          },
        },
        particles: {
          collisions: {
            enable: false,
            mode: "bounce",
          },
          color: {
            value: "#ffffff",
          },
          lineLinked: {
            blink: false,
            color: {
              value: "#000",
            },
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "lime",
              },
              enable: false,
            },
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {
              character: {
                fill: false,
                close: true,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                close: true,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                fill: true,
                close: true,
                sides: 5,
              },
              star: {
                fill: true,
                close: true,
                sides: 5,
              },
            },
            image: [
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/apple.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/avocado.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/banana.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/berries.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/cherry.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/grapes.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/lemon.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/orange.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/peach.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/pear.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/pepper.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/plum.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/star.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/strawberry.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/watermelon.png",
                width: 32,
              },
              {
                fill: true,
                close: true,
                height: 32,
                replaceColor: true,
                src:
                  "https://cdn.matteobruni.it/images/particles/fruits/watermelon_slice.png",
                width: 32,
              },
            ],
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 16,
          },
          stroke: {
            color: {
              value: "#000000",
            },
            width: 0,
            opacity: 1,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: true,
        polygon: {
          draw: {
            enable: false,
            stroke: {
              color: {
                value: "#ffffff",
              },
              width: 0.5,
              opacity: 1,
            },
          },
          enable: false,
          inline: {
            arrangement: "one-per-point",
          },
          move: {
            radius: 10,
            type: "path",
          },
          scale: 1,
          type: "none",
          url: "",
        },
      }}
      // {{
      //   particles: {
      //     number: {
      //       value: 1750,
      //       density: {
      //         enable: true,
      //         value_area: 1803.4120608655228
      //       }
      //     },
      //     color: {
      //       value: "#ffffff"
      //     },
      //     shape: {
      //       type: "circle",
      //       stroke: {
      //         width: 2,
      //         color: "#000000"
      //       },
      //       polygon: {
      //         nb_sides: 4
      //       },
      //       image: {
      //         src: "../resources/pic.svg",
      //         width: 100,
      //         height: 100
      //       }
      //     },
      //     opacity: {
      //       value: 0.4008530152163807,
      //       random: false,
      //       anim: {
      //         enable: false,
      //         speed: 1,
      //         opacity_min: 0.1,
      //         sync: false
      //       }
      //     },
      //     size: {
      //       value: 1.5,
      //       random: true,
      //       anim: {
      //         enable: false,
      //         speed: 40,
      //         size_min: 0.1,
      //         sync: false
      //       }
      //     },
      //     line_linked: {
      //       enable: true,
      //       distance: 0,
      //       color: "#ffffff",
      //       opacity: 0.3687847739990702,
      //       width: 0.6413648243462091
      //     },
      //     move: {
      //       enable: true,
      //       speed: 6,
      //       direction: "none",
      //       random: false,
      //       straight: false,
      //       out_mode: "out",
      //       bounce: false,
      //       attract: {
      //         enable: false,
      //         rotateX: 600,
      //         rotateY: 1200
      //       }
      //     }
      //   },
      //   interactivity: {
      //     detect_on: "window",
      //     events: {
      //       onhover: {
      //         enable: true,
      //         mode: "repulse"
      //       },
      //       onclick: {
      //         enable: false,
      //         mode: "bubble"
      //       },
      //       resize: true
      //     },
      //     modes: {
      //       grab: {
      //         distance: 400,
      //         line_linked: {
      //           opacity: 1
      //         }
      //       },
      //       bubble: {
      //         distance: 400,
      //         size: 40,
      //         duration: 2,
      //         opacity: 8,
      //         speed: 3
      //       },
      //       repulse: {
      //         distance: 100,
      //         duration: 0.4
      //       },
      //       push: {
      //         particles_nb: 4
      //       },
      //       remove: {
      //         particles_nb: 2
      //       }
      //     }
      //   },
      //   retina_detect: true
      // }}
    />
  </div>
);
