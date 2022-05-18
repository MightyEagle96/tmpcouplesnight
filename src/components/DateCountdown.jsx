import React from "react";
import { Stack, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function DateCountdown({ size, variant }) {
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: size || 120,
    strokeWidth: 4,
  };

  const renderTime = (dimension, time) => {
    return (
      <div>
        <div className="text-center">
          <Typography variant={variant || "h4"}>{time}</Typography>
        </div>
        <div className="text-center">{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const remainingTime =
    Date.parse(new Date(2022, 4, 28, 16, 0, 0)) / 1000 - Date.now() / 1000;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div>
      <div>
        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <CountdownCircleTimer
            {...timerProps}
            colors="#7E2E84"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#D14081"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#EF798A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime(
                  "minutes",
                  getTimeMinutes(hourSeconds - elapsedTime)
                )}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#218380"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("seconds", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </Stack>
      </div>
    </div>
  );
}
