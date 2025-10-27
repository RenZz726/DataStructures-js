function countDown(targetDate) {
  const target = new Date(targetDate).getTime();

  const timer = setInterval(() => {
    const now = Date.now();
    const rem = target - now;

    if (rem <= 0) {
      clearInterval(timer);
      console.log("Count Down finished");
    }
    const days = Math.floor(rem / (1000 * 60 * 60 * 24));
    const hours = Math.floor(rem / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(rem / (1000 * 60)) % 60;
    const seconds = Math.floor(rem / 1000) % 60;
    console.log(
      `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    );
  }, 1000);
}

countDown("2025-10-28");
