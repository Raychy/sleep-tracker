export function diff(start, end) {
     if (start && end) {
          start = start.split(":");
          end = end.split(":");
          var startDate = new Date(0, 0, 0, start[0], start[1], 0).getHours();
          var endDate = new Date(0, 0, 0, end[0], end[1], 0).getHours();
          // console.log(endDate, startDate);
          var hourDiff = endDate - startDate;
          if (hourDiff < 0) {
               hourDiff = 24 + hourDiff;
          }
          return hourDiff
     }
     else{
          return 0
     }
}

