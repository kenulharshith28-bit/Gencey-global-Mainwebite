import { useEffect, useRef } from "react";

const vertexShaderSource = `#version 300 es
precision highp float;

in vec4 position;

void main() {
  gl_Position = position;
}
`;

const fragmentShaderSource = `#version 300 es

precision highp float;

out vec4 O;

uniform vec2 resolution;
uniform float time;

#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898,78.233));
  p += dot(p,p + 34.56);

  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3. - 2. * f);

  float
    a = rnd(i),
    b = rnd(i + vec2(1,0)),
    c = rnd(i + vec2(0,1)),
    d = rnd(i + 1.);

  return mix(
    mix(a,b,u.x),
    mix(c,d,u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float t = .0;
  float a = 1.;

  mat2 m = mat2(
    1., -.5,
    .2, 1.2
  );

  for (int i = 0; i < 5; i++) {
    t += a * noise(p);

    p *= 2. * m;

    a *= .5;
  }

  return t;
}

float clouds(vec2 p) {
  float d = 1.;
  float t = .0;

  for (float i = .0; i < 3.; i++) {
    float a =
      d *
      fbm(
        i * 10. +
        p.x * .2 +
        .2 * (1. + i) * p.y +
        d +
        i * i +
        p
      );

    t = mix(t,d,a);

    d = a;

    p *= 2. / (i + 1.);
  }

  return t;
}

void main(void) {
  vec2 uv =
    (FC - .5 * R) / MN;

  vec2 st =
    uv * vec2(2,1);

  vec3 col =
    vec3(0);

  float bg =
    clouds(
      vec2(
        st.x + T * .5,
        -st.y
      )
    );

  uv *=
    1. -
    .3 *
    (
      sin(T * .2) * .5 +
      .5
    );

  for (float i = 1.; i < 12.; i++) {
    uv +=
      .1 *
      cos(
        i *
        vec2(
          .1 + .01 * i,
          .8
        ) +
        i * i +
        T * .5 +
        .1 * uv.x
      );

    vec2 p =
      uv;

    float d =
      length(p);

    col +=
      .00125 /
      d *
      (
        cos(
          sin(i) *
          vec3(1,2,3)
        ) +
        1.
      );

    float b =
      noise(
        i +
        p +
        bg * 1.731
      );

    col +=
      .002 *
      b /
      length(
        max(
          p,
          vec2(
            b * p.x * .02,
            p.y
          )
        )
      );

    col =
      mix(
        col,
        vec3(
          bg * .25,
          bg * .137,
          bg * .05
        ),
        d
      );
  }

  O = vec4(col,1);
}
`;

const AnimatedShaderBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const gl =
      canvas.getContext("webgl2");

    if (!gl) {
      console.warn(
        "WebGL2 is not supported."
      );

      return;
    }

    const compileShader = (
      type,
      source
    ) => {
      const shader =
        gl.createShader(type);

      gl.shaderSource(
        shader,
        source
      );

      gl.compileShader(shader);

      if (
        !gl.getShaderParameter(
          shader,
          gl.COMPILE_STATUS
        )
      ) {
        console.error(
          gl.getShaderInfoLog(
            shader
          )
        );

        gl.deleteShader(
          shader
        );

        return null;
      }

      return shader;
    };


    const vertexShader =
      compileShader(
        gl.VERTEX_SHADER,
        vertexShaderSource
      );


    const fragmentShader =
      compileShader(
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
      );


    if (
      !vertexShader ||
      !fragmentShader
    ) {
      return;
    }


    const program =
      gl.createProgram();


    gl.attachShader(
      program,
      vertexShader
    );


    gl.attachShader(
      program,
      fragmentShader
    );


    gl.linkProgram(
      program
    );


    if (
      !gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )
    ) {
      console.error(
        gl.getProgramInfoLog(
          program
        )
      );

      return;
    }


    gl.useProgram(
      program
    );


    const vertices =
      new Float32Array([
        -1, 1,
        -1, -1,
        1, 1,
        1, -1,
      ]);


    const buffer =
      gl.createBuffer();


    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      buffer
    );


    gl.bufferData(
      gl.ARRAY_BUFFER,
      vertices,
      gl.STATIC_DRAW
    );


    const positionLocation =
      gl.getAttribLocation(
        program,
        "position"
      );


    gl.enableVertexAttribArray(
      positionLocation
    );


    gl.vertexAttribPointer(
      positionLocation,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );


    const resolutionLocation =
      gl.getUniformLocation(
        program,
        "resolution"
      );


    const timeLocation =
      gl.getUniformLocation(
        program,
        "time"
      );


    const resize = () => {
      const parent =
        canvas.parentElement;

      if (!parent) return;

      const rect =
        parent.getBoundingClientRect();


      const dpr =
        Math.min(
          window.devicePixelRatio ||
            1,
          1.5
        );


      canvas.width =
        rect.width * dpr;


      canvas.height =
        rect.height * dpr;


      canvas.style.width =
        `${rect.width}px`;


      canvas.style.height =
        `${rect.height}px`;


      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );
    };


    resize();


    const resizeObserver =
      new ResizeObserver(
        resize
      );


    if (
      canvas.parentElement
    ) {
      resizeObserver.observe(
        canvas.parentElement
      );
    }


    let animationFrame;


    const render = (
      now
    ) => {
      gl.clearColor(
        0,
        0,
        0,
        1
      );


      gl.clear(
        gl.COLOR_BUFFER_BIT
      );


      gl.useProgram(
        program
      );


      gl.uniform2f(
        resolutionLocation,
        canvas.width,
        canvas.height
      );


      gl.uniform1f(
        timeLocation,
        now * 0.001
      );


      gl.drawArrays(
        gl.TRIANGLE_STRIP,
        0,
        4
      );


      animationFrame =
        requestAnimationFrame(
          render
        );
    };


    animationFrame =
      requestAnimationFrame(
        render
      );


    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      resizeObserver.disconnect();

      gl.deleteBuffer(
        buffer
      );

      gl.deleteProgram(
        program
      );

      gl.deleteShader(
        vertexShader
      );

      gl.deleteShader(
        fragmentShader
      );
    };
  }, []);


  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        h-full
        w-full
        pointer-events-none
      "
    />
  );
};


export default AnimatedShaderBackground;