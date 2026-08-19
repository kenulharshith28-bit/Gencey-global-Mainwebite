import { useState } from "react";
import {
  Users,
  Clock3,
  BadgeDollarSign,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(1500);

  const automationRate = 0.5;

  const monthlyManualHours = teamSize * hoursPerWeek * 4;
  const estimatedHoursSaved = monthlyManualHours * automationRate;
  const estimatedSavings = estimatedHoursSaved * hourlyCost;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-LK").format(Math.round(value));
  };

  return (
    <section
      id="roi"
      className="
        relative
        overflow-hidden
        py-28
        md:py-36
      "
    >
      {/* Background base */}
      <div className="absolute inset-0 roi-mesh-bg" />
      <div className="absolute inset-0 roi-grid-overlay opacity-40" />

      {/* Decorative blur blobs */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#FF914D]/20
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          right-[-80px]
          top-[20%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#FF914D]/15
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          left-[30%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#FF914D]/14
          blur-[110px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="
              glass-soft-badge
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
              text-[#FF914D]
            "
          >
            <Sparkles size={16} />
            See The Impact
          </div>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              text-black
            "
          >
            What could automation
            <span className="text-[#FF914D]"> save your business?</span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-black/60
            "
          >
            Adjust the values below to explore how reducing repetitive
            manual work could translate into time and operational savings.
          </p>
        </div>

        {/* Main layout */}
        <div
          className="
            mt-16
            grid
            items-stretch
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* LEFT PANEL */}
          <div
            className="
              glass-panel
              relative
              overflow-hidden
              rounded-[32px]
              p-7
              md:p-10
            "
          >
            {/* inner highlight */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-28
                bg-gradient-to-b
                from-white/50
                to-transparent
              "
            />

            <CalculatorSlider
              icon={<Users size={20} />}
              title="Team Size"
              description="People involved in repetitive operational tasks"
              value={teamSize}
              min={1}
              max={50}
              step={1}
              suffix="people"
              onChange={setTeamSize}
            />

            <div className="my-9 h-px bg-black/10" />

            <CalculatorSlider
              icon={<Clock3 size={20} />}
              title="Manual Work Per Week"
              description="Average repetitive work per team member"
              value={hoursPerWeek}
              min={1}
              max={40}
              step={1}
              suffix="hours"
              onChange={setHoursPerWeek}
            />

            <div className="my-9 h-px bg-black/10" />

            <CalculatorSlider
              icon={<BadgeDollarSign size={20} />}
              title="Average Hourly Cost"
              description="Approximate hourly operational cost"
              value={hourlyCost}
              min={500}
              max={5000}
              step={100}
              prefix="LKR "
              onChange={setHourlyCost}
            />
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              glass-panel-dark
              relative
              overflow-hidden
              rounded-[32px]
              p-8
              md:p-10
              text-white
              flex
              flex-col
            "
          >
            {/* orange glow */}
            <div
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-[#FF914D]
                opacity-20
                blur-[100px]
              "
            />

            {/* shine */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_28%,transparent_70%,rgba(255,145,77,0.08))]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#FF914D]
                  text-black
                "
              >
                <TrendingUp size={23} />
              </div>

              <p
                className="
                  mt-8
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/45
                "
              >
                Estimated Monthly Savings
              </p>

              <div
                className="
                  mt-3
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                  text-[#FF914D]
                "
              >
                LKR {formatCurrency(estimatedSavings)}
              </div>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-white/65
                "
              >
                Based on approximately 50% of repetitive manual work being
                reduced through automation.
              </p>
            </div>

            {/* mini stat cards */}
            <div
              className="
                relative
                z-10
                mt-10
                grid
                grid-cols-2
                gap-4
              "
            >
              <ResultCard
                value={formatCurrency(estimatedHoursSaved)}
                label="Hours Saved / Month"
              />

              <ResultCard
                value={`${Math.round(automationRate * 100)}%`}
                label="Estimated Automation"
              />
            </div>

            <a
              href="#contact"
              className="
                relative
                z-10
                mt-auto
                pt-10
              "
            >
              <div
                className="
                  rounded-full
                  bg-[#FF914D]
                  px-6
                  py-4
                  text-center
                  font-bold
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Talk About Your Automation →
              </div>
            </a>

            <p
              className="
                relative
                z-10
                mt-5
                text-xs
                leading-relaxed
                text-white/35
              "
            >
              This calculator provides an illustrative estimate only.
              Actual savings depend on processes, implementation and
              business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CalculatorSlider = ({
  icon,
  title,
  description,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange,
}) => {
  return (
    <div>
      <div
        className="
          flex
          flex-col
          gap-4
          justify-between
          sm:flex-row
          sm:items-center
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              glass-soft-badge
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-[#FF914D]
            "
          >
            {icon}
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">{title}</h3>
            <p className="mt-1 text-sm text-black/45">{description}</p>
          </div>
        </div>

        <div
          className="
            glass-soft-badge
            shrink-0
            rounded-xl
            px-4
            py-2
            font-bold
            text-black
          "
        >
          {prefix}
          {value.toLocaleString()}
          {suffix && ` ${suffix}`}
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="gg-range mt-7"
      />

      <div
        className="
          mt-2
          flex
          justify-between
          text-xs
          text-black/35
        "
      >
        <span>
          {prefix}
          {min.toLocaleString()}
        </span>

        <span>
          {prefix}
          {max.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

const ResultCard = ({ value, label }) => {
  return (
    <div
      className="
        glass-mini-card
        rounded-2xl
        p-5
      "
    >
      <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-white/45">{label}</p>
    </div>
  );
};

export default ROICalculator;