// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function displayingNumbers() {
  let minNumber = parseInt(document.getElementById("min-info").value);
  let maxNumber = parseInt(document.getElementById("max-info").value);
  let displayresult = "";
  let result = document.getElementById("display-number");

  if (minNumber > maxNumber) {
    result.innerHTML = "Error! Sorry but your min is greater than your max."
  }

  while (minNumber <= maxNumber) {
    displayresult = displayresult + minNumber + "<br>"
    minNumber = minNumber + 1
    result.innerHTML = displayresult
  }
}