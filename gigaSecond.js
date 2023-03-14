/*
Your task is to determine the date and time one gigasecond after a certain date.

A gigasecond is one thousand million seconds. That is a one with nine zeros after it.

If you were born on January 24th, 2015 at 22:00 (10:00:00pm), then you would be a gigasecond old on October 2nd, 2046 at 23:46:40 (11:46:40pm).
*/

const gigasecond = (date) => {
  const givenDateInSeconds = date.getTime() / 1000
  const dateAfterAGigaSecond = givenDateInSeconds + 1000000000
  const resultDate = new Date(dateAfterAGigaSecond * 1000)
  return resultDate
};
