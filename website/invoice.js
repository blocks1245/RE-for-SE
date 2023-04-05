const generateInvoice = () => {
    // Get input values
    const customerName = document.getElementById("customer-name").value;
    const customerEmail = document.getElementById("customer-email").value;
    const invoiceDate = document.getElementById("invoice-date").value;
    const invoiceNumber = document.getElementById("invoice-number").value;
    const itemName = document.getElementById("item-name").value;
    const itemPrice = document.getElementById("item-price").value;
    const itemQuantity = document.getElementById("item-quantity").value;
  
    // Calculate total amount
    const totalAmount = itemPrice * itemQuantity;
  
    // Update invoice details in HTML
    document.getElementById("customer-name-display").textContent = customerName;
    document.getElementById("customer-email-display").textContent = customerEmail;
    document.getElementById("invoice-date-display").textContent = invoiceDate;
    document.getElementById("invoice-number-display").textContent = invoiceNumber;
    document.getElementById("item-name-display").textContent = itemName;
    document.getElementById("item-price-display").textContent = itemPrice;
    document.getElementById("item-quantity-display").textContent = itemQuantity;
    document.getElementById("total-display").textContent = totalAmount;
  
    // Show preview button
    document.getElementById("preview-btn").style.display = "block";
};
  
  const previewInvoice = () => {
    // Show invoice preview
    window.print();
};
  
  const generatePdf = () => {
    // Get invoice HTML content
    const invoiceHtml = document.getElementById("invoice-box").innerHTML;
  
    // Create new window
    const pdfWindow = window.open("", "PRINT", "height=600,width=800");
  
    // Write invoice HTML to new window
    pdfWindow.document.write(
      '<html><head><title>Invoice</title>',
      '<link rel="stylesheet" href="styles.css">',
      '</head><body>',
      invoiceHtml,
      '</body></html>'
    );
  
    // Close new window after PDF is generated
    setTimeout(() => {
      pdfWindow.print();
      pdfWindow.close();
    }, 1000);
  };
  

function solarSelect() {
  if (document.getElementById("solar-pannel").value == "sunBurn") {
    document.getElementById("item-price").innerHTML = "&euro; 200";
  } else if (document.getElementById("solar-pannel").value == "select") {
    document.getElementById("item-price").innerHTML = "Selecteer paneel";
  }
}

function omvormerSelect() {
  if (document.getElementById("omvormer").value == "select") {
    document.getElementById("omvormer-price").innerHTML = "Selecteer paneel";
  } else if (document.getElementById("omvormer").value == "2000") {
    document.getElementById("omvormer-price").innerHTML = "&euro; 400";
  } else if (document.getElementById("omvormer").value == "5000") {
    document.getElementById("omvormer-price").innerHTML = "&euro; 600";
  } else if (document.getElementById("omvormer").value == "6000") {
    document.getElementById("omvormer-price").innerHTML = "&euro; 800";
  } else if (document.getElementById("omvormer").value == "8000") {
    document.getElementById("omvormer-price").innerHTML = "&euro; 1000";
  } else if (document.getElementById("omvormer").value == "12000") {
    document.getElementById("omvormer-price").innerHTML = "&euro; 1500";
  } 
}
