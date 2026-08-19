import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const CalendarPicker = ({
  selectedDate,
  onSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (selectedDate) {
      const [year, month] = selectedDate.split("-").map(Number);
      return new Date(year, month - 1, 1);
    }

    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const firstWeekday = firstDayOfMonth.getDay();

    const days = [];

    for (let i = firstWeekday - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month, -i),
        currentMonth: false,
      });
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day += 1) {
      days.push({
        date: new Date(year, month, day),
        currentMonth: true,
      });
    }

    while (days.length < 42) {
      const nextDay =
        days.length - (firstWeekday + daysInMonth) + 1;

      days.push({
        date: new Date(year, month + 1, nextDay),
        currentMonth: false,
      });
    }

    return days;
  }, [currentMonth]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const isSameDate = (dateA, dateB) => {
    return (
      dateA.getFullYear() === dateB.getFullYear() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getDate() === dateB.getDate()
    );
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;

    return formatDate(date) === selectedDate;
  };

  const isPastDate = (date) => {
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    return compareDate < today;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((previousMonth) => {
      return new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() - 1,
        1
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((previousMonth) => {
      return new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() + 1,
        1
      );
    });
  };

  return (
    <div
      className="
        h-full
        min-h-[560px]
        rounded-[26px]
        border
        border-black/10
        bg-white
        p-5
        sm:p-6
        text-black
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePreviousMonth}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-black/10
            bg-[#F7F7F7]
            text-black/55
            transition-colors
            hover:border-[#FF914D]/35
            hover:bg-[#FFF9F5]
            hover:text-black
          "
        >
          <ChevronLeft size={18} />
        </button>

        <h3 className="text-lg font-semibold text-black">
          {monthLabel}
        </h3>

        <button
          type="button"
          onClick={handleNextMonth}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-black/10
            bg-[#F7F7F7]
            text-black/55
            transition-colors
            hover:border-[#FF914D]/35
            hover:bg-[#FFF9F5]
            hover:text-black
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="
              text-center
              text-sm
              font-medium
              text-black/45
            "
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {calendarDays.map((item) => {
          const disabled = isPastDate(item.date);
          const selected = isSelected(item.date);
          const todayMatch = isSameDate(item.date, today);
          const dateValue = formatDate(item.date);

          return (
            <button
              key={dateValue}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(dateValue)}
              className={`
                h-11
                w-full
                rounded-xl
                text-sm
                transition-all
                duration-200

                ${
                  selected
                    ? "bg-[#FF914D] text-black font-semibold shadow-[0_8px_22px_rgba(255,145,77,0.22)]"
                    : item.currentMonth
                      ? "text-black hover:bg-[#FFF9F5]"
                      : "text-black/28 hover:bg-[#FFF9F5]"
                }

                ${
                  disabled
                    ? "cursor-not-allowed opacity-25 hover:bg-transparent"
                    : ""
                }

                ${
                  todayMatch && !selected
                    ? "border border-[#FF914D]/40"
                    : ""
                }
              `}
            >
              {item.date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPicker;
