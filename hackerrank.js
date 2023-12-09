function staircase(n) {
  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      output += " ";
    }
    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    // new line
    output += "\n";
  }
  // log the final result
  console.log(output);
}
// staircase(6)

function timeConversion(s) {
  let hour = s.substring(0, 2);
  let timeFormat = s.substring(2, 8);
  // if midnight
  if (hour === 12 && s.indexOf("AM") !== -1) {
    return "00" + timeFormat;
  }
  // if afternoon
  if (hour === 12 && s.indexOf("PM") !== -1) {
    return time + timeFormat;
  }
  // if hour is from 1 to 11PM, ad 12 to the time
  if (hour < 12 && s.indexOf("PM") !== -1) {
    return 12 + hour + timeFormat;
  } else {
    // if hour is from 1 to 11 AM
    if (hour < 10) {
      // ifnumber is less than 10, add a zero in front
      return "0" + hour + timeFormat;
    } else {
      // if number is greater than 9, just add rest of the string
      return hour + timeFormat;
    }
  }
}
// console.log(timeConversion("07:05:45PM"))

function timeConversion1(s) {
  const time = s.slice(0, 8).split(":");
  time[0] =
    s.indexOf("PM") > -1
      ? time[0] == 12
        ? "12"
        : Number(time[0]) + 12
      : time[0] == 12
      ? "00"
      : time[0];
  return time.join(":");
}
// console.log(timeConversion1("07:05:45PM"))

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0
  let orangeCount = 0
  
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t){
      appleCount++
    }
  }
  
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] >= s && b + oranges[j] <= t){
      orangeCount++
    }
  }

  console.log(appleCount)
  console.log(orangeCount)
  
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
