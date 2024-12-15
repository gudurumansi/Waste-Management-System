document.getElementById("upload-btn").addEventListener("click", () => {
    const photo = document.getElementById("photo-upload").files[0];
    if (photo) {
      alert("Photo uploaded successfully!");
      // Integrate backend API for photo upload here
    } else {
      alert("Please select a photo first.");
    }
  });
  
  document.getElementById("find-trader-btn").addEventListener("click", () => {
    // Simulate finding a nearby trader
    const traderDetails = "Trader Name: John Doe\nLocation: Main Street, 5 km away";
    document.getElementById("trader-details").textContent = traderDetails;
  
    // Use geolocation and API for real trader data
    alert("Trader details updated!");
  });