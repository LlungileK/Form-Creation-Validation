document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');


        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);


            // Convert the response to JSON
            const user = await response.json();


            // Clear the loading message
            dataContainer.innerHTML = '';


            // Create a list to display the user names
            const userList = document.createElement('ul');


            // Loop through each user and create an <li> element with their name
            user.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle any errors during the fetch operation
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Call the fetchUserData function once the DOM is fully loaded
    fetchUserData();
});