// command dibawah berfungsi untuk membuat fungsi agar waktu muncul
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = timeString + " WIB";
  }
  setInterval(updateTime, 1000);
  updateTime();

  // command dibawah berfungsi ketika id = penerbangan, ditekan maka akan menampilakn pesan "Mohon maaf sedang dalam maintenance" 
  document.getElementById("penerbangan").addEventListener("click", function() {
    alert("Mohon maaf sedang dalam maintenance");
  });

  // command dibawah berfungsi ketika id = Bookbttn, ditekan maka akan menampilakn pesan "Mohon maaf sedang dalam maintenance"
  document.getElementById("Bookbttn").addEventListener("click", function() {
    alert("Mohon maaf sedang dalam maintenance");
  });

  // command dibawah berfungsi ketika id = Bookbttn1, ditekan maka akan menampilakn pesan "Mohon maaf sedang dalam maintenance"
  document.getElementById("Bookbttn1").addEventListener("click", function() {
    alert("Mohon maaf sedang dalam maintenance");
  });