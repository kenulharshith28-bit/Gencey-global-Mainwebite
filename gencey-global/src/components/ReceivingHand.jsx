const ReceivingHand = ({
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        w-[330px]
        md:w-[390px]
        ${className}
      `}
    >
      <svg
        viewBox="0 0 430 230"
        className="w-full h-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* =====================================
              SKIN GRADIENT
          ===================================== */}

          <linearGradient
            id="handSkin"
            x1="80"
            y1="80"
            x2="350"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor="#FFB28E"
            />

            <stop
              offset="40%"
              stopColor="#FF956B"
            />

            <stop
              offset="75%"
              stopColor="#F87950"
            />

            <stop
              offset="100%"
              stopColor="#E95F3A"
            />
          </linearGradient>


          {/* top highlight */}

          <linearGradient
            id="handHighlight"
            x1="150"
            y1="70"
            x2="250"
            y2="150"
          >
            <stop
              offset="0%"
              stopColor="#FFD1BB"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#FF9C76"
              stopOpacity="0"
            />
          </linearGradient>


          {/* sleeve */}

          <linearGradient
            id="sleeveGradient"
            x1="340"
            y1="80"
            x2="415"
            y2="170"
          >
            <stop
              offset="0%"
              stopColor="#B56BFF"
            />

            <stop
              offset="50%"
              stopColor="#8948DB"
            />

            <stop
              offset="100%"
              stopColor="#6630B6"
            />
          </linearGradient>


          {/* cuff */}

          <linearGradient
            id="cuffGradient"
            x1="330"
            y1="90"
            x2="350"
            y2="165"
          >
            <stop
              offset="0%"
              stopColor="#DDF5FF"
            />

            <stop
              offset="100%"
              stopColor="#A4D8E8"
            />
          </linearGradient>


          {/* soft shadow */}

          <filter
            id="handShadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="170%"
          >
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="12"
              floodColor="#E86B45"
              floodOpacity="0.18"
            />
          </filter>


          {/* blur highlight */}

          <filter id="softBlur">
            <feGaussianBlur
              stdDeviation="7"
            />
          </filter>
        </defs>



        {/* =====================================
            SHADOW UNDER HAND
        ===================================== */}

        <ellipse
          cx="225"
          cy="191"
          rx="145"
          ry="15"
          fill="#000000"
          opacity="0.07"
          filter="url(#softBlur)"
        />



        {/* =====================================
            MAIN HAND
        ===================================== */}

        <g filter="url(#handShadow)">

          {/* ===================================
              PALM + WRIST
          =================================== */}

          <path
            d="
              M127 113

              C150 105
                174 100
                201 97

              C220 94
                238 83
                257 80

              C277 77
                296 84
                312 92

              C328 100
                341 110
                354 119

              L352 166

              C323 163
                297 163
                272 166

              C242 170
                220 179
                194 181

              C168 183
                145 176
                122 166

              C105 159
                90 152
                75 144

              Z
            "
            fill="url(#handSkin)"
          />



          {/* ===================================
              INDEX / LONG FINGER
          =================================== */}

          <path
            d="
              M135 112

              C113 109
                91 103
                66 96

              L29 85

              C17 82
                9 87
                8 96

              C7 104
                13 111
                23 115

              L93 144

              C109 150
                124 151
                140 146

              Z
            "
            fill="url(#handSkin)"
          />



          {/* finger highlight */}

          <path
            d="
              M29 91

              C50 96
                78 105
                105 114
            "
            fill="none"
            stroke="#FFD3C1"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.45"
          />



          {/* ===================================
              THUMB
          =================================== */}

          <path
            d="
              M180 104

              C194 89
                209 75
                228 68

              C244 62
                256 65
                264 74

              C271 82
                267 91
                257 97

              C242 105
                229 111
                213 119

              Z
            "
            fill="url(#handSkin)"
          />



          {/* thumb light */}

          <path
            d="
              M197 95
              C216 76
                236 70
                249 76
            "
            fill="none"
            stroke="#FFD3C1"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.5"
          />



          {/* ===================================
              PALM TOP HIGHLIGHT
          =================================== */}

          <path
            d="
              M115 125

              C160 116
                190 113
                222 106

              C249 100
                274 95
                303 105

              C275 110
                251 120
                224 128

              C187 139
                151 140
                115 125
            "
            fill="url(#handHighlight)"
            opacity="0.55"
          />



          {/* ===================================
              PALM BOTTOM SHADOW
          =================================== */}

          <path
            d="
              M80 143

              C113 160
                145 174
                181 175

              C214 176
                242 164
                270 161

              C289 159
                313 160
                350 164

              C314 170
                291 171
                269 171

              C243 171
                217 185
                187 187

              C146 189
                112 173
                80 153

              Z
            "
            fill="#E75F3D"
            opacity="0.18"
          />

        </g>



        {/* =====================================
            CUFF
        ===================================== */}

        <path
          d="
            M340 86
            L362 87

            L360 171
            L338 169

            Z
          "
          fill="url(#cuffGradient)"
        />



        {/* cuff shine */}

        <path
          d="
            M345 91
            L351 91
            L349 166
            L343 166
            Z
          "
          fill="white"
          opacity="0.45"
        />



        {/* =====================================
            PURPLE SLEEVE
        ===================================== */}

        <path
          d="
            M358 84

            L407 87

            C415 87
              419 92
              419 100

            L415 164

            C414 172
              410 176
              402 176

            L356 171

            Z
          "
          fill="url(#sleeveGradient)"
        />



        {/* sleeve highlight */}

        <path
          d="
            M367 91

            C380 91
              394 92
              406 94

            L404 161

            C390 160
              378 159
              366 157

            Z
          "
          fill="#B978FF"
          opacity="0.17"
        />

      </svg>
    </div>
  );
};


export default ReceivingHand;