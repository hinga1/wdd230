document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('membersContainer');
    const gridViewToggle = document.getElementById('gridView');
    const listViewToggle = document.getElementById('listView');

    gridViewToggle.addEventListener('change', function () {
        if (gridViewToggle.checked) {
            membersContainer.classList.remove('list-view');
            membersContainer.classList.add('grid-view');
        }
    });

    listViewToggle.addEventListener('change', function () {
        if (listViewToggle.checked) {
            membersContainer.classList.remove('grid-view');
            membersContainer.classList.add('list-view');
        }
    });

    // Function to load members from JSON and display them
    function loadMembers() {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => displayMembers(data.members))
            .catch(error => console.error('Error loading members:', error));
    }

    // Function to display members based on the selected view
    function displayMembers(members) {
        const viewClass = membersContainer.classList.contains('grid-view') ? 'grid' : 'list';
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card', viewClass);

            const memberImage = document.createElement('img');
            memberImage.src = member.image;
            memberImage.alt = member.name;

            const memberDetails = document.createElement('div');
            memberDetails.innerHTML = `<h3>${member.name}</h3>
                                       <p>${member.address}</p>
                                       <p>${member.phone}</p>
                                       <p>${member.website}</p>
                                       <p>${member.otherInfo}</p>
                                       <p>Membership Level: ${member.membershipLevel}</p>`;

            memberCard.appendChild(memberImage);
            memberCard.appendChild(memberDetails);
            membersContainer.appendChild(memberCard);
        });
    }

    // Initial load of members when the page loads
    loadMembers();
});
