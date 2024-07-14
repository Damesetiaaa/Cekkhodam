document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        addKhodamToTable(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'Khodam Jin', image: '/jin.jpeg'},
    {name: 'Khodam Malaikat', image: '/malaikat.jpeg'},
    {name: 'Khodam Raja Macan', image: '/macan.jpeg'},
    {name: 'Khodam Harimau Putih', image: '/harimauputih.jpeg'},
    {name: 'Khodam Buaya Putih', image: '/buaya.jpeg'},
    {name: 'Khodam Ular Naga', image: '/ularnaga.jpg'},
    {name: 'Khodam Nyi Roro Kidul', image: '/roro.jpeg'},
    {name: 'Khodam Dewa Zeus', image: '/zeus.jpeg'}
];

// Function to hash the name and map it to an index
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function getKhodamByName(name) {
    const index = Math.abs(hashCode(name)) % khodams.length;
    return khodams[index];
}

function addKhodamToTable(name) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const khodam = getKhodamByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = khodam.image;
    image.alt = khodam.name;
    image.style.width = '200px'; // Atur ukuran gambar sesuai kebutuhan
    imageCell.appendChild(image);

    const khodamNameCell = document.createElement('td');
    khodamNameCell.textContent = khodam.name;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(khodamNameCell);

    // Add new row to the top of the table body
    tableBody.insertBefore(row, tableBody.firstChild);
}
