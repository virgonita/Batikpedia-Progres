//Popup Detail Kelas
document.addEventListener("DOMContentLoaded", function() {
    const detailButtons = document.querySelectorAll(".detail-button");
    const popupKelas = document.getElementById("popup");
    const closeButtonKelas = document.getElementById("close-button");
    const classTitle = document.getElementById("class-title");
    const classLocation = document.getElementById("class-location");
    const classSesi = document.getElementById("class-sesi");
    const classTime = document.getElementById("class-time");
    const classLink = document.getElementById("class-link");
    const classImage = document.getElementById("class-image");
  
    detailButtons.forEach(button => {
        button.addEventListener("click", function() {
            const image = button.parentElement.previousElementSibling;
            const info = image.getAttribute("data-info").split("|");
                classTitle.textContent = info[0];
                classLocation.textContent = info[1];
                classSesi.textContent = info[2];
                classTime.textContent = info[3];
                classLink.textContent = info[4];
                classImage.src = image.src;
                popupKelas.style.display = "block";
        });
    });
  
    closeButtonKelas.addEventListener("click", function() {
        popupKelas.style.display = "none";
    });
});
//End of Popup Detail Kelas

// Popup Filter
document.addEventListener('DOMContentLoaded', () => {
    const appliedFiltersDiv = document.getElementById('appliedFilters');
    const selectedFilters = JSON.parse(localStorage.getItem('selectedFilters')) || [];

        document.getElementById('filterButton').addEventListener('click', function() {
            document.getElementById('filterPopup').style.display = 'block';
        });
    
        document.getElementById('closePopup').addEventListener('click', function() {
            document.getElementById('filterPopup').style.display = 'none';
        });

    if (selectedFilters.length === 0) {
            appliedFiltersDiv.innerHTML = '<p>Tidak ada filter yang diterapkan.</p>';
        } else {
            selectedFilters.forEach(filter => {
                const filterDetail = document.createElement('p');
                filterDetail.textContent = filter;
                appliedFiltersDiv.appendChild(filterDetail);
            });
        }
    });
    function clearFilters() {
        const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
            filterCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
    }

    function applyFilters() {
        const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
        const selectedFilters = [];
            filterCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedFilters.push(checkbox.value);
                }
            });

            // Store the selected filters in localStorage
            localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));

            // Redirect to the details page
            window.location.href = 'details.html';
        }
// End Popup Filter Beranda

document.addEventListener('DOMContentLoaded', function() {
    // Contoh data yang diambil dari pop-up
    const filterData = ["Filter 1", "Filter 2", "Filter 3"];

    // Menambahkan data ke #appliedFilters
    const appliedFiltersContainer = document.getElementById('appliedFilters');
    filterData.forEach(function(filter) {
        const filterItem = document.createElement('div');
        filterItem.className = 'filter-item';
        filterItem.textContent = filter;
        appliedFiltersContainer.appendChild(filterItem);
    });
});