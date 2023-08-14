
if (window.location.href == "http://127.0.0.1:5501/booking.html") {


  const daysContainer = document.querySelector(".days"),
    nextBtn = document.querySelector(".next-btn"),
    prevBtn = document.querySelector(".prev-btn"),
    month = document.querySelector(".month"),
    todayBtn = document.querySelector(".today-btn");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // get current date
  const date = new Date();

  // get current month
  let currentMonth = date.getMonth();

  // get current year
  let currentYear = date.getFullYear();

  // function to render days
  function renderCalendar() {
    // get prev month current month and next month days
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    // update current year and month in header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    // update days html
    let days = "";

    // prev days html
    for (let x = firstDay.getDay(); x > 0; x--) {
      days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
      // check if its today then add today class
      if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        // if date month year matches add today
        days += `<div class="day today">${i}</div>`;
      } else {
        //else dont add today
        days += `<div class="day ">${i}</div>`;
      }
    }

    // next MOnth days
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="day next">${j}</div>`;
    }

    // run this function with every calendar render
    hideTodayBtn();
    daysContainer.innerHTML = days;
  }

  renderCalendar();

  nextBtn.addEventListener("click", () => {
    // increase current month by one
    currentMonth++;
    if (currentMonth > 11) {
      // if month gets greater that 11 make it 0 and increase year by one
      currentMonth = 0;
      currentYear++;
    }
    // rerender calendar
    renderCalendar();
  });

  // prev monyh btn
  prevBtn.addEventListener("click", () => {
    // increase by one
    currentMonth--;
    // check if let than 0 then make it 11 and deacrease year
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  // go to today
  todayBtn.addEventListener("click", () => {
    // set month and year to current
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // rerender calendar
    renderCalendar();
  });

  // lets hide today btn if its already current month and vice versa

  function hideTodayBtn() {
    if (
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      todayBtn.style.display = "none";
    } else {
      todayBtn.style.display = "flex";
    }
  }


  let input1 = 0;
  let input2 = 0;
  let input3 = 0;
  let input4 = 0;
  let input5 = 0;

  document.getElementById('sp1').innerText = input1;
  document.getElementById('sp2').innerText = input2;
  document.getElementById('sp3').innerText = input3;
  document.getElementById('sp4').innerText = input4;
  document.getElementById('sp5').innerText = input5;

  // 
  // add guest
  // 
  // 

  function plus1() {
    let charge1 = 0;

    input1 = input1 + 1;
    document.getElementById('sp1').innerText = input1;



    let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
    let peak_count = (localStorage.getItem("locl_peak"));

    document.getElementById('always').style.display = "none";
    document.getElementById('srilankan-adult').style.display = "";
    document.getElementById('sri-lankan-adult1').innerText = `${input1} SL ADULT`;

    charge1 = input1 * ((4 * normal_hour) + (6 * peak_count));
    document.getElementById('sri-lankan-adult2').innerText = `$${charge1}`;
    localStorage.setItem("x1", charge1);
    let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

    document.getElementById('tt2').innerText = `$${tot}`;




  }


  function min1() {
    if (input1 == 0) {
      input1 = 0;
    } else {
      let charge1 = 0;
      input1 = input1 - 1;
      document.getElementById('sp1').innerText = input1;



      let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
      let peak_count = (localStorage.getItem("locl_peak"));

      document.getElementById('always').style.display = "none";
      document.getElementById('srilankan-adult').style.display = "";
      document.getElementById('sri-lankan-adult1').innerText = `${input1} SL ADULT`;

      charge1 = input1 * ((4 * normal_hour) - (6 * peak_count));
      document.getElementById('sri-lankan-adult2').innerText = `$${charge1}`;
      localStorage.setItem("x1", charge1);
      let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

      document.getElementById('tt2').innerText = `$${tot}`;

    }

  }

  function plus2() {
    let charge2 = 0;
    input2 = input2 + 1;
    document.getElementById('sp2').innerText = input2;



    let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
    let peak_count = (localStorage.getItem("locl_peak"));

    document.getElementById('always').style.display = "none";
    document.getElementById('srilankan-child').style.display = "";
    document.getElementById('sri-lankan-child1').innerText = `${input2} SL CHILD`;

    charge2 = input2 * ((2 * normal_hour) + (3 * peak_count));
    document.getElementById('sri-lankan-child2').innerText = `$${charge2}`;
    localStorage.setItem("x2", charge2);
    let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

    document.getElementById('tt2').innerText = `$${tot}`;

  }


  function min2() {
    if (input2 == 0) {
      input2 = 0;
    } else {
      let charge2 = 0;
      input2 = input2 - 1;
      document.getElementById('sp2').innerText = input2;


      let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
      let peak_count = (localStorage.getItem("locl_peak"));

      document.getElementById('always').style.display = "none";
      document.getElementById('srilankan-child').style.display = "";
      document.getElementById('sri-lankan-child1').innerText = `${input2} SL CHILD`;

      charge2 = input2 * ((2 * normal_hour) - (3 * peak_count));
      document.getElementById('sri-lankan-child2').innerText = `$${charge2}`;
      localStorage.setItem("x2", charge2);
      let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

      document.getElementById('tt2').innerText = `$${tot}`;

    }

  }



  function plus3() {
    let charge3 = 0;
    input3 = input3 + 1;
    document.getElementById('sp3').innerText = input3;


    let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
    let peak_count = (localStorage.getItem("locl_peak"));

    document.getElementById('always').style.display = "none";
    document.getElementById('Foreign-adult').style.display = "";
    document.getElementById('Foreign-adult-1').innerText = `${input3} Foreign adult`;

    charge3 = input3 * ((10 * normal_hour) + (13 * peak_count));
    document.getElementById('Foreign-adult-2').innerText = `$${charge3}`;
    localStorage.setItem("x3", charge3);
    let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

    document.getElementById('tt2').innerText = `$${tot}`;

  }


  function min3() {
    if (input3 == 0) {
      input3 = 0;
    } else {
      let charge3 = 0;
      input3 = input3 - 1;
      document.getElementById('sp3').innerText = input3;


      let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
      let peak_count = (localStorage.getItem("locl_peak"));

      document.getElementById('always').style.display = "none";
      document.getElementById('Foreign-adult').style.display = "";
      document.getElementById('Foreign-adult-1').innerText = `${input3} Foreign adult`;

      charge3 = input3 * ((10 * normal_hour) - (13 * peak_count));
      document.getElementById('Foreign-adult-2').innerText = `$${charge3}`;
      localStorage.setItem("x3", charge3);
      let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

      document.getElementById('tt2').innerText = `$${tot}`;

    }

  }


  function plus4() {
    let charge4 = 0;
    input4 = input4 + 1;
    document.getElementById('sp4').innerText = input4;


    let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
    let peak_count = (localStorage.getItem("locl_peak"));

    document.getElementById('always').style.display = "none";
    document.getElementById('Foreign-child').style.display = "";
    document.getElementById('Foreign-child-1').innerText = `${input4} Foreign Child`;

    charge4 = input4 * ((5 * normal_hour) + (8 * peak_count));
    document.getElementById('Foreign-child-2').innerText = `$${charge4}`;
    localStorage.setItem("x4", charge4);
    let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

    document.getElementById('tt2').innerText = `$${tot}`;

  }


  function min4() {
    if (input4 == 0) {
      input4 = 0;
    } else {
      let charge4 = 0;

      input4 = input4 - 1;
      document.getElementById('sp4').innerText = input4;


      let normal_hour = (localStorage.getItem("final_hour") - localStorage.getItem("locl_peak"));
      let peak_count = (localStorage.getItem("locl_peak"));

      document.getElementById('always').style.display = "none";
      document.getElementById('Foreign-child').style.display = "";
      document.getElementById('Foreign-child-1').innerText = `${input4} Foreign Child`;

      charge4 = input4 * ((5 * normal_hour) + (8 * peak_count));
      document.getElementById('Foreign-child-2').innerText = `$${charge4}`;
      localStorage.setItem("x4", charge4);
      let tot = (parseInt(localStorage.getItem("x1")) + parseInt(localStorage.getItem("x2")) + parseInt(localStorage.getItem("x3")) + parseInt(localStorage.getItem("x4")));

      document.getElementById('tt2').innerText = `$${tot}`;

    }

  }



  function plus5() {
    input5 = input5 + 1;
    document.getElementById('sp5').innerText = input5;
  }


  function min5() {
    if (input5 == 0) {
      input5 = 0;
    } else {
      input5 = input5 - 1;
      document.getElementById('sp5').innerText = input5;
    }

  }
  // 
  // 



  // 
  // time pic
  // 
  // 

  function time() {
    let hour = 0;
    let time_start = 0;
    let time_stop = 0;

    let CB1 = document.getElementById('1stcheck');
    let B1 = document.getElementById('button1');

    let CB2 = document.getElementById('2stcheck');
    let B2 = document.getElementById('button2');

    let CB3 = document.getElementById('3stcheck');
    let B3 = document.getElementById('button3');

    let CB4 = document.getElementById('4stcheck-peak');
    let B4 = document.getElementById('button4');

    let CB5 = document.getElementById('5stcheck-peak');
    let B5 = document.getElementById('button5');

    let CB6 = document.getElementById('6stcheck-peak');
    let B6 = document.getElementById('button6');


    let CB7 = document.getElementById('7stcheck');
    let B7 = document.getElementById('button7');


    let CB8 = document.getElementById('8stcheck');
    let B8 = document.getElementById('button8');


    let CB9 = document.getElementById('9stcheck-peak');
    let B9 = document.getElementById('button9');


    let CB10 = document.getElementById('10stcheck-peak');
    let B10 = document.getElementById('button10');


    let CB11 = document.getElementById('11stcheck-peak');
    let B11 = document.getElementById('button11');








    if (CB1.checked == true) {
      B1.style.backgroundColor = "red";
    } else {
      B1.style.backgroundColor = ""
    }



    if (CB2.checked == true) {
      B2.style.backgroundColor = "red";
    } else {
      B2.style.backgroundColor = ""
    }



    if (CB3.checked == true) {
      B3.style.backgroundColor = "red";
    } else {
      B3.style.backgroundColor = ""
    }



    if (CB4.checked == true) {
      B4.style.backgroundColor = "red";
    } else {
      B4.style.backgroundColor = ""
    }



    if (CB5.checked == true) {
      B5.style.backgroundColor = "red";
    } else {
      B5.style.backgroundColor = ""
    }



    if (CB6.checked == true) {
      B6.style.backgroundColor = "red";
    } else {
      B6.style.backgroundColor = ""
    }



    if (CB7.checked == true) {
      B7.style.backgroundColor = "red";
    } else {
      B7.style.backgroundColor = ""
    }


    if (CB8.checked == true) {
      B8.style.backgroundColor = "red";
    } else {
      B8.style.backgroundColor = ""
    }


    if (CB9.checked == true) {
      B9.style.backgroundColor = "red";
    } else {
      B9.style.backgroundColor = ""
    }

    if (CB10.checked == true) {
      B10.style.backgroundColor = "red";
    } else {
      B10.style.backgroundColor = ""
    }

    if (CB11.checked == true) {
      B11.style.backgroundColor = "red";
    } else {
      B11.style.backgroundColor = ""
    }










    let peak_count = 0;

    if (CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB9.checked == true && CB10.checked == true && CB11.checked == true) {
      peak_count = 6;
    }
    else if (CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB9.checked == true && CB10.checked == true) {
      peak_count = 5;
    }
    else if (CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB9.checked == true) {
      peak_count = 4;
    }
    else if (CB4.checked == true && CB5.checked == true && CB6.checked == true) {
      peak_count = 3;
    }
    else if (CB4.checked == true && CB5.checked == true) {
      peak_count = 2;
    }
    else if (CB4.checked == true) {
      peak_count = 1;
    }




    if (CB5.checked == true && CB6.checked == true &&
      CB9.checked == true && CB10.checked == true && CB11.checked == true) {
      peak_count = 5;
    }
    else if (CB5.checked == true && CB6.checked == true &&
      CB9.checked == true && CB10.checked == true) {
      peak_count = 4;
    }
    else if (CB5.checked == true && CB6.checked == true &&
      CB9.checked == true) {
      peak_count = 3;
    }
    else if (CB5.checked == true && CB6.checked == true) {
      peak_count = 2;
    }
    else if (CB5.checked == true) {
      peak_count = 1;
    }




    if (CB6.checked == true &&
      CB9.checked == true && CB10.checked == true && CB11.checked == true) {
      peak_count = 4;
    }
    else if (CB6.checked == true &&
      CB9.checked == true && CB10.checked == true) {
      peak_count = 3;
    }
    else if (CB6.checked == true &&
      CB9.checked == true) {
      peak_count = 2;
    }
    else if (CB6.checked == true) {
      peak_count = 1;
    }



    if (
      CB9.checked == true && CB10.checked == true && CB11.checked == true) {
      peak_count = 3;
    }
    else if (
      CB9.checked == true && CB10.checked == true) {
      peak_count = 2;
    }
    else if (
      CB9.checked == true) {
      peak_count = 1;
    }


    if (
      CB10.checked == true && CB11.checked == true) {
      peak_count = 2;
    }
    else if (
      CB10.checked == true) {
      peak_count = 1;
    }


    if (
      CB11.checked == true) {
      peak_count = 1;
    }

    localStorage.setItem("locl_peak", peak_count)







    if (CB1.checked == true) {
      hour += 1;
      if (CB2.checked == true) {
        hour += 1;
        if (CB3.checked == true) {
          hour += 1;
          if (CB4.checked == true) {
            hour += 1;
            if (CB5.checked == true) {
              hour += 1;
              if (CB6.checked == true) {
                hour += 1;
                if (CB7.checked == true) {
                  hour += 1;
                  if (CB8.checked == true) {
                    hour += 1;
                    if (CB9.checked == true) {
                      hour += 1;
                      if (CB10.checked == true) {
                        hour += 1;
                        if (CB11.checked == true) {
                          hour += 1;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    else if (CB3.checked == true) {
      hour += 1;
      if (CB4.checked == true) {
        hour += 1;
        if (CB5.checked == true) {
          hour += 1;
          if (CB6.checked == true) {
            hour += 1;
            if (CB7.checked == true) {
              hour += 1;
              if (CB8.checked == true) {
                hour += 1;
                if (CB9.checked == true) {
                  hour += 1;
                  if (CB10.checked == true) {
                    hour += 1;
                    if (CB11.checked == true) {
                      hour += 1;
                    }
                  }
                }
              }
            }
          }
        }


      }
    }

    else if (CB2.checked == true) {
      hour += 1;
      if (CB3.checked == true) {
        hour += 1;
        if (CB4.checked == true) {
          hour += 1;
          if (CB5.checked == true) {
            hour += 1;
            if (CB6.checked == true) {
              hour += 1;
              if (CB7.checked == true) {
                hour += 1;
                if (CB8.checked == true) {
                  hour += 1;
                  if (CB9.checked == true) {
                    hour += 1;
                    if (CB10.checked == true) {
                      hour += 1;
                      if (CB11.checked == true) {
                        hour += 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }

      }
    }

    else if (CB3.checked == true) {
      hour += 1;
      if (CB4.checked == true) {
        hour += 1;
        if (CB5.checked == true) {
          hour += 1;
          if (CB6.checked == true) {
            hour += 1;
            if (CB7.checked == true) {
              hour += 1;
              if (CB8.checked == true) {
                hour += 1;
                if (CB9.checked == true) {
                  hour += 1;
                  if (CB10.checked == true) {
                    hour += 1;
                    if (CB11.checked == true) {
                      hour += 1;
                    }
                  }
                }
              }
            }
          }
        }
      }


    }

    else if (CB4.checked == true) {
      hour += 1;
      if (CB5.checked == true) {
        hour += 1;
        if (CB6.checked == true) {
          hour += 1;
          if (CB7.checked == true) {
            hour += 1;
            if (CB8.checked == true) {
              hour += 1;
              if (CB9.checked == true) {
                hour += 1;
                if (CB10.checked == true) {
                  hour += 1;
                  if (CB11.checked == true) {
                    hour += 1;
                  }
                }
              }
            }
          }
        }



      }
    }

    else if (CB5.checked == true) {
      hour += 1;
      if (CB6.checked == true) {
        hour += 1;
        if (CB7.checked == true) {
          hour += 1;
          if (CB8.checked == true) {
            hour += 1;
            if (CB9.checked == true) {
              hour += 1;
              if (CB10.checked == true) {
                hour += 1;
                if (CB11.checked == true) {
                  hour += 1;
                }
              }
            }
          }



        }
      }

    }

    else if (CB6.checked == true) {
      hour += 1;
      if (CB7.checked == true) {
        hour += 1;
        if (CB8.checked == true) {
          hour += 1;
          if (CB9.checked == true) {
            hour += 1;
            if (CB10.checked == true) {
              hour += 1;
              if (CB11.checked == true) {
                hour += 1;
              }
            }
          }
        }
      }





    }

    else if (CB7.checked == true) {
      hour += 1;
      if (CB8.checked == true) {
        hour += 1;
        if (CB9.checked == true) {
          hour += 1;
          if (CB10.checked == true) {
            hour += 1;
            if (CB11.checked == true) {
              hour += 1;
            }
          }


        }




      }
    }


    else if (CB8.checked == true) {
      hour += 1;
      if (CB9.checked == true) {
        hour += 1;
        if (CB10.checked == true) {
          hour += 1;
          if (CB11.checked == true) {
            hour += 1;
          }
        }
      }
    }



    else if (CB9.checked == true) {
      hour += 1;
      if (CB10.checked == true) {
        hour += 1;
        if (CB11.checked == true) {
          hour += 1;
        }
      }
    }



    else if (CB10.checked == true) {
      hour += 1;
      if (CB11.checked == true) {
        hour += 1;
      }

    }


    else if (CB11.checked == true) {
      hour += 1;
    }


    localStorage.setItem("final_hour", hour);
    let display_hour = `${hour} hrs`
    document.getElementById("du").innerText = display_hour;

    // start and end time 

    if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 7;
      time_stop = 18;
    }
    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 7;
      time_stop = 17;
    }

    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 7;
      time_stop = 16;
    }

    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 7;
      time_stop = 15;
    }

    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true) {
      time_start = 7;
      time_stop = 14;
    }
    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true
    ) {
      time_start = 7;
      time_stop = 13;
    }
    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true
    ) {
      time_start = 7;
      time_stop = 12;
    }
    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true &&
      CB4.checked == true) {
      time_start = 7;
      time_stop = 11;
    }
    else if (CB1.checked == true && CB2.checked == true && CB3.checked == true
    ) {
      time_start = 7;
      time_stop = 10;
    } else if (CB1.checked == true && CB2.checked == true) {
      time_start = 7;
      time_stop = 9;
    }
    else if (CB1.checked == true) {
      time_start = 7;
      time_stop = 8;
    }









    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 8;
      time_stop = 18;
    }
    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 8;
      time_stop = 17;
    }

    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 8;
      time_stop = 16;
    }

    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 8;
      time_stop = 15;
    }

    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true) {
      time_start = 8;
      time_stop = 14;
    }
    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true
    ) {
      time_start = 8;
      time_stop = 13;
    }
    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true && CB5.checked == true
    ) {
      time_start = 8;
      time_stop = 12;
    }
    else if (CB2.checked == true && CB3.checked == true &&
      CB4.checked == true) {
      time_start = 8;
      time_stop = 11;
    }
    else if (CB2.checked == true && CB3.checked == true
    ) {
      time_start = 8;
      time_stop = 10;
    } else if (CB2.checked == true) {
      time_start = 8;
      time_stop = 9;
    }






    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 9;
      time_stop = 18;
    }
    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 9;
      time_stop = 17;
    }

    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 9;
      time_stop = 16;
    }

    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 9;
      time_stop = 15;
    }

    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true) {
      time_start = 9;
      time_stop = 14;
    }
    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true && CB6.checked == true
    ) {
      time_start = 9;
      time_stop = 13;
    }
    else if (CB3.checked == true &&
      CB4.checked == true && CB5.checked == true
    ) {
      time_start = 9;
      time_stop = 12;
    }
    else if (CB3.checked == true &&
      CB4.checked == true) {
      time_start = 9;
      time_stop = 11;
    }
    else if (CB3.checked == true
    ) {
      time_start = 9;
      time_stop = 10;
    }




    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 10;
      time_stop = 18;
    }
    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 10;
      time_stop = 17;
    }

    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 10;
      time_stop = 16;
    }

    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 10;
      time_stop = 15;
    }

    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true &&
      CB7.checked == true) {
      time_start = 10;
      time_stop = 14;
    }
    else if (
      CB4.checked == true && CB5.checked == true && CB6.checked == true
    ) {
      time_start = 10;
      time_stop = 13;
    }
    else if (
      CB4.checked == true && CB5.checked == true
    ) {
      time_start = 10;
      time_stop = 12;
    }
    else if (
      CB4.checked == true) {
      time_start = 10;
      time_stop = 11;
    }




    else if (
      CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 11;
      time_stop = 18;
    }
    else if (
      CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 11;
      time_stop = 17;
    }

    else if (
      CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 11;
      time_stop = 16;
    }

    else if (
      CB5.checked == true && CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 11;
      time_stop = 15;
    }

    else if (
      CB5.checked == true && CB6.checked == true &&
      CB7.checked == true) {
      time_start = 11;
      time_stop = 14;
    }
    else if (
      CB5.checked == true && CB6.checked == true
    ) {
      time_start = 11;
      time_stop = 13;
    }
    else if (
      CB5.checked == true
    ) {
      time_start = 11;
      time_stop = 12;
    }








    else if (
      CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 12;
      time_stop = 18;
    }
    else if (
      CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 12;
      time_stop = 17;
    }

    else if (
      CB6.checked == true &&
      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 12;
      time_stop = 16;
    }

    else if (
      CB6.checked == true &&
      CB7.checked == true && CB8.checked == true) {
      time_start = 12;
      time_stop = 15;
    }

    else if (
      CB6.checked == true &&
      CB7.checked == true) {
      time_start = 12;
      time_stop = 14;
    }
    else if (
      CB6.checked == true
    ) {
      time_start = 12;
      time_stop = 13;
    }





    else if (

      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 13;
      time_stop = 18;
    }
    else if (

      CB7.checked == true && CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 13;
      time_stop = 17;
    }

    else if (

      CB7.checked == true && CB8.checked == true && CB9.checked == true
    ) {
      time_start = 13;
      time_stop = 16;
    }

    else if (

      CB7.checked == true && CB8.checked == true) {
      time_start = 13;
      time_stop = 15;
    }

    else if (

      CB7.checked == true) {
      time_start = 13;
      time_stop = 14;
    }







    else if (

      CB8.checked == true && CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 14;
      time_stop = 18;
    }
    else if (

      CB8.checked == true && CB9.checked == true &&
      CB10.checked == true) {
      time_start = 14;
      time_stop = 17;
    }

    else if (

      CB8.checked == true && CB9.checked == true
    ) {
      time_start = 14;
      time_stop = 16;
    }

    else if (

      CB8.checked == true) {
      time_start = 14;
      time_stop = 15;
    }






    else if (

      CB9.checked == true &&
      CB10.checked == true && CB11.checked == true) {
      time_start = 15;
      time_stop = 18;
    }
    else if (

      CB9.checked == true &&
      CB10.checked == true) {
      time_start = 15;
      time_stop = 17;
    }

    else if (

      CB9.checked == true
    ) {
      time_start = 15;
      time_stop = 16;
    }






    else if (


      CB10.checked == true && CB11.checked == true) {
      time_start = 16;
      time_stop = 18;
    }
    else if (


      CB10.checked == true) {
      time_start = 16;
      time_stop = 17;
    }




    else if (


      CB11.checked == true) {
      time_start = 17;
      time_stop = 18;
    }

    // conve\t tinme to strimnhng

    let time_start_string = "";
    let time_end_string = "";

    if (time_start == 7) {
      time_start_string = "07.00 am";
    }
    if (time_stop == 8) {
      time_end_string = "8.00 am";
    }


    if (time_start == 8) {
      time_start_string = "08.00 am";
    }
    if (time_stop == 9) {
      time_end_string = "9.00 am"
    }


    if (time_start == 9) {
      time_start_string = "9.00 am";
    }
    if (time_stop == 10) {
      time_end_string = "10.00 am"
    }


    if (time_start == 10) {
      time_start_string = "10.00 am";
    }
    if (time_stop == 11) {
      time_end_string = "11.00 am"
    }


    if (time_start == 11) {
      time_start_string = "11.00 am";
    }
    if (time_stop == 12) {
      time_end_string = "12.00 pm"
    }


    if (time_start == 12) {
      time_start_string = "12.00 pm";
    }
    if (time_stop == 13) {
      time_end_string = "1.00 pm"
    }


    if (time_start == 13) {
      time_start_string = "1.00 pm";
    }
    if (time_stop == 14) {
      time_end_string = "2.00 pm"
    }


    if (time_start == 14) {
      time_start_string = "2.00 pm";
    }
    if (time_stop == 15) {
      time_end_string = "3.00 pm"
    }



    if (time_start == 15) {
      time_start_string = "3.00 pm";
    }
    if (time_stop == 16) {
      time_end_string = "4.00 pm"
    }



    if (time_start == 16) {
      time_start_string = "4.00 pm";
    }
    if (time_stop == 17) {
      time_end_string = "5.00 pm"
    }



    if (time_start == 17) {
      time_start_string = "5.00 pm";
    }
    if (time_stop == 18) {
      time_end_string = "6.00 pm"
    }



    let timeString = `${time_start_string} to ${time_end_string}`

    localStorage.setItem('local-ti', timeString)

    document.getElementById('timee').innerText = timeString;






  }

  function next() {


    localStorage.setItem("local-time", document.getElementById('timee').innerText);
    localStorage.setItem("local-du", document.getElementById('du').innerText);






    localStorage.setItem("t-name1", document.getElementById('sri-lankan-adult1').innerText);
    localStorage.setItem("t-name2", document.getElementById('sri-lankan-adult2').innerText);
    localStorage.setItem("t-name3", document.getElementById('sri-lankan-child1').innerText);
    localStorage.setItem("t-name4", document.getElementById('sri-lankan-child2').innerText);


    localStorage.setItem("t-name5", document.getElementById('Foreign-adult-1').innerText);
    localStorage.setItem("t-name6", document.getElementById('Foreign-adult-2').innerText);
    localStorage.setItem("t-name7", document.getElementById('Foreign-child-1').innerText);
    localStorage.setItem("t-name8", document.getElementById('Foreign-child-2').innerText);






    localStorage.setItem("local-tot1", document.getElementById('tt1').innerText);
    localStorage.setItem("local-tot2", document.getElementById('tt2').innerText);





  }
}
if (window.location.href == "http://127.0.0.1:5501/details.html") {


document.getElementById("sri-lankan-adult1").innerHTML = localStorage.getItem("t-name1");
document.getElementById("sri-lankan-adult2").innerHTML = localStorage.getItem("t-name2");
document.getElementById("sri-lankan-child1").innerHTML = localStorage.getItem("t-name3");
document.getElementById("sri-lankan-child2").innerHTML = localStorage.getItem("t-name4");


document.getElementById("Foreign-adult-1").innerHTML = localStorage.getItem("t-name5");
document.getElementById("Foreign-adult-2").innerHTML = localStorage.getItem("t-name6");
document.getElementById("Foreign-child-1").innerHTML = localStorage.getItem("t-name7");
document.getElementById("Foreign-child-2").innerHTML = localStorage.getItem("t-name8");

document.getElementById("tt1").innerHTML = localStorage.getItem("local-tot1");
document.getElementById("tt2").innerHTML = localStorage.getItem("local-tot2");


document.getElementById("timee").innerHTML = localStorage.getItem("local-time");
document.getElementById("du").innerHTML = localStorage.getItem("local-du");



// store form data
function sub()
{
  let name = document.getElementById("name").value;
  
  let number = document.getElementById("number").value;
  let mail = document.getElementById("em").value;
  

  localStorage.setItem("details-name", name);
  localStorage.setItem("details-no", number);
  localStorage.setItem("details-e", mail);

}




}




if (window.location.href == "http://127.0.0.1:5501/config.html") {


document.getElementById("name1").innerHTML = localStorage.getItem("details-name");
document.getElementById("Contact1").innerHTML = localStorage.getItem("details-no");
document.getElementById("email1").innerHTML = localStorage.getItem("details-e");
document.getElementById("date-com").innerHTML = localStorage.getItem("date");
document.getElementById("timee").innerHTML = localStorage.getItem("local-time");
document.getElementById("du").innerHTML = localStorage.getItem("local-du");
document.getElementById("tt2").innerHTML = localStorage.getItem("local-tot2");


}