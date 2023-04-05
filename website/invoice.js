const previewInvoice = () => {
  // Show invoice preview
  window.print();
};

function solarSelect() {
  if (document.getElementById("solar-pannel").value == "sunBurn") {
    document.getElementById("item-price").innerHTML = "200";
  } else if (document.getElementById("solar-pannel").value == "select") {
    document.getElementById("item-price").innerHTML = " ";
  }
  total();
}

omvormerPrice = document.getElementById("omvormer-price").innerHTML

function omvormerSelect() {
  if (document.getElementById("omvormer").value == "select") {
    document.getElementById("omvormer-price").innerHTML = " ";
  } else if (document.getElementById("omvormer").value == "2000") {
    document.getElementById("omvormer-price").innerHTML = "400";
  } else if (document.getElementById("omvormer").value == "5000") {
    document.getElementById("omvormer-price").innerHTML = "600";
  } else if (document.getElementById("omvormer").value == "6000") {
    document.getElementById("omvormer-price").innerHTML = "800";
  } else if (document.getElementById("omvormer").value == "8000") {
    document.getElementById("omvormer-price").innerHTML = "1000";
  } else if (document.getElementById("omvormer").value == "12000") {
    document.getElementById("omvormer-price").innerHTML = "1500";
  } 
  total();
}

function materialPP() {
  document.getElementById("material-pp").innerHTML = 50*document.getElementById("panel-amount").value;
  total();
}

function to3Phase(checkbox) {
  if (checkbox.checked){
    document.getElementById("3-phase-price").innerHTML = 800;
  } else {
        document.getElementById("3-phase-price").innerHTML = 0;
  }
  total();
}

function total() {
  document.getElementById("total").innerHTML = 1000 + ((Number(document.getElementById("item-price").innerHTML) * document.getElementById("panel-amount").value) + Number(document.getElementById("omvormer-price").innerHTML) + Number(document.getElementById("material-pp").innerHTML) + Number(document.getElementById("3-phase-price").innerHTML));
}

//save data to storage
var data = [];

function fillData() {
  //clear the last data
  data = [];
  //make oe adress line
  var adress = (document.getElementById("billed-to-address").value + " " + document.getElementById("billed-to-zip").value + " " + document.getElementById("billed-to-city").value);
  
  data.push(document.getElementById("billed-to-name").value);
  data.push(document.getElementById("invoice-date").value);
  data.push(adress);
  data.push(document.getElementById("billed-to-email").value);
  data.push(document.getElementById("solar-pannel").value);
  data.push(document.getElementById("panel-amount").value);
  data.push("SB" + document.getElementById("omvormer").value);
  data.push(document.getElementById("3-phase").value);
  data.push("NuLL");
}


function save() {
  fillData();
  sessionStorage.setItem(sessionStorage.length, data);
}
