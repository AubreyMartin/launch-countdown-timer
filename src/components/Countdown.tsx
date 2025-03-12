import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(864000); // Example: 1-day countdown (in seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h1>We’re launching soon</h1>
      <div className="displaybox">
        <div className="test">
          <div className="time-box">
            <span>{days}</span>
          </div>
          <div className="oval left"></div>
          <div className="oval right"></div>
        </div>

        <div className="test">
          <div className="time-box">
            <span>{hours}</span>
          </div>
          <div className="oval left"></div>
          <div className="oval right"></div>
        </div>
        <div className="test">
          <div className="time-box">
            <span>{minutes}</span>
          </div>
          <div className="oval left"></div>
          <div className="oval right"></div>
        </div>

        <div className="test">
          <div className="time-box">
            <span>{seconds}</span>
          </div>
          <div className="oval left"></div>
          <div className="oval right"></div>
        </div>
      </div>

      <div className="socialbox">
        <button className="social-btn">
          <img src="images/icon-facebook.svg" alt="Facebook" />
        </button>
        <button className="social-btn">
          <img src="images/icon-pinterest.svg" alt="Pinterest" />
        </button>
        <button className="social-btn">
          <img src="images/icon-instagram.svg" alt="Instagram" />
        </button>
      </div>
    </div>
  );
};

export default Countdown;
