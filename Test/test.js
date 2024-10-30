function showExec(id) {
    // Hide all exec details
    document.querySelectorAll('.exec-detail').forEach(detail => {
      detail.style.display = 'none';
    });
  
    // Remove 'active' class from all names
    document.querySelectorAll('.exec-names li').forEach(name => {
      name.classList.remove('active');
    });
  
    // Show selected exec detail
    document.getElementById(id).style.display = 'block';
  
    // Add 'active' class to selected name
    document.querySelector(`.exec-names li[onclick="showExec('${id}')"]`).classList.add('active');
  }
  