import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const minuteOptions = [
  0, 5, 10, 15, 20, 25,
  30, 35, 40, 45, 50, 55,
];

const TimePicker = ({
  selectedTime,
  onSelect,
}) => {
  const getCurrentValues = () => {
    if (!selectedTime) {
      return {
        hour: 9,
        minute: 0,
        period: "AM",
      };
    }

    const [hour24, minute] =
      selectedTime.split(":").map(Number);

    const period =
      hour24 >= 12 ? "PM" : "AM";

    let hour12 =
      hour24 % 12;

    if (hour12 === 0) {
      hour12 = 12;
    }

    return {
      hour: hour12,
      minute,
      period,
    };
  };

  const {
    hour,
    minute,
    period,
  } = getCurrentValues();

  const updateTime = (
    newHour,
    newMinute,
    newPeriod
  ) => {
    let hour24 =
      newHour % 12;

    if (newPeriod === "PM") {
      hour24 += 12;
    }

    const formattedHour =
      String(hour24).padStart(2, "0");

    const formattedMinute =
      String(newMinute).padStart(2, "0");

    onSelect(
      `${formattedHour}:${formattedMinute}`
    );
  };

  const previousHour = () => {
    const nextHour =
      hour === 1
        ? 12
        : hour - 1;

    updateTime(
      nextHour,
      minute,
      period
    );
  };

  const nextHour = () => {
    const nextHourValue =
      hour === 12
        ? 1
        : hour + 1;

    updateTime(
      nextHourValue,
      minute,
      period
    );
  };

  const selectMinute = (newMinute) => {
    updateTime(
      hour,
      newMinute,
      period
    );
  };

  const changePeriod = (newPeriod) => {
    updateTime(
      hour,
      minute,
      newPeriod
    );
  };

  const getPosition = (index) => {
    const angle =
      index * 30 - 90;

    const radius = 105;
    const radians =
      (angle * Math.PI) / 180;

    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  const selectedMinute =
    (Math.round(minute / 5) * 5) % 60;

  const selectedIndex =
    minuteOptions.indexOf(selectedMinute);

  const activeIndex =
    selectedIndex === -1
      ? 0
      : selectedIndex;

  return (
    <div
      className="
        h-full
        min-h-[560px]
        rounded-[26px]
        bg-white
        border
        border-black/10
        p-5
        sm:p-6
        text-black
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.15em]
          font-semibold
          text-black/45
        "
      >
        Select Time
      </p>

      <div
        className="
          mt-4
          flex
          items-start
          gap-4
        "
      >
        <div
          className="
            text-5xl
            md:text-6xl
            font-light
            tracking-tight
          "
        >
          <span className="text-black/35">
            {String(hour).padStart(2, "0")}
          </span>

          <span className="text-black">
            :
            {String(minute).padStart(2, "0")}
          </span>
        </div>

        <div
          className="
            flex
            flex-col
            gap-1
            mt-1
          "
        >
          <button
            type="button"
            onClick={() => changePeriod("AM")}
            className={`
              text-lg
              font-semibold
              transition-colors

              ${
                period === "AM"
                  ? "text-[#FF914D]"
                  : "text-black/35"
              }
            `}
          >
            AM
          </button>

          <button
            type="button"
            onClick={() => changePeriod("PM")}
            className={`
              text-lg
              font-semibold
              transition-colors

              ${
                period === "PM"
                  ? "text-[#FF914D]"
                  : "text-black/35"
              }
            `}
          >
            PM
          </button>
        </div>
      </div>

      <div
        className="
          mt-8
          flex
          items-center
          justify-end
          gap-3
        "
      >
        <button
          type="button"
          onClick={previousHour}
          aria-label="Previous hour"
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            text-black/45
            hover:bg-[#FFF9F5]
            hover:text-black
            transition-all
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextHour}
          aria-label="Next hour"
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            text-black/45
            hover:bg-[#FFF9F5]
            hover:text-black
            transition-all
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        className="
          relative
          mx-auto
          mt-2
          w-[270px]
          h-[270px]
          max-w-full
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-2
            h-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#FF914D]
            z-20
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[2px]
            bg-[#FF914D]
            origin-left
            z-10
          "
          style={{
            width: "105px",
            transform: `rotate(${activeIndex * 30 - 90}deg)`,
          }}
        />

        {minuteOptions.map((minuteValue, index) => {
          const position =
            getPosition(index);

          const active =
            minuteValue === selectedMinute;

          return (
            <button
              key={minuteValue}
              type="button"
              onClick={() => selectMinute(minuteValue)}
              className={`
                absolute
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                font-semibold
                transition-all
                duration-200

                ${
                  active
                    ? `
                      bg-[#FF914D]
                      text-black
                      shadow-[0_8px_25px_rgba(255,145,77,0.35)]
                    `
                    : `
                      text-black/75
                      hover:bg-[#FFF9F5]
                    `
                }
              `}
              style={{
                left: `calc(50% + ${position.x}px - 22px)`,
                top: `calc(50% + ${position.y}px - 22px)`,
              }}
            >
              {String(minuteValue).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <div
        className="
          mt-5
          border-t
          border-black/10
          pt-5
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-[0.1em]
            text-black/35
          "
        >
          Selected time
        </span>

        <span
          className="
            text-sm
            font-bold
            text-[#FF914D]
          "
        >
          {String(hour).padStart(2, "0")}
          :
          {String(minute).padStart(2, "0")}
          {" "}
          {period}
        </span>
      </div>
    </div>
  );
};

export default TimePicker;
