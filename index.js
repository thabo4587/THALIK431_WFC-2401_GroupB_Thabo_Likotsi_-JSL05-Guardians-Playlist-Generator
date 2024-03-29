// Array of songs with their titles, artists, and genres
 const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Stayin' Alive", artist: "Bee Gees", genre: "Disco" },
    { title: "Respect", artist: "Aretha Franklin", genre: "Soul" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Superstition", artist: "Stevie Wonder", genre: "Funk" }
];


// Object with guardians and their preferred genres
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlists for each guardian based on their preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {}; // Initialize an empty object to store playlists

    // Loop through each guardian and their preferred genre
    for (let key in guardians) {
        const genre = guardians[key]; // Get the genre preferred by the guardian
        
        // Filter songs based on the guardian's preferred genre and format the playlist
        playlists[key] = songs
            .filter(song => {
                return song.genre === genre;
            })
            .map(song => {
                return song.title + " by " + song.artist;
            });
    }

    return playlists; // Return the generated playlists
}

// Function to display the generated playlists on the webpage
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists'); // Get the playlists div from the HTML

    // Loop through each guardian and their playlist
    for (let guardian in playlists) {
        const playlist = playlists[guardian]; // Get the playlist of the current guardian
        
        // Create a div for the guardian's playlist
        const guardianDiv = document.createElement('div');
        guardianDiv.className = 'playlist';
        
        // Create a header for the guardian's playlist
        const guardianHeader = document.createElement('h2');
        guardianHeader.textContent = guardian + "'s Playlist";
        guardianDiv.appendChild(guardianHeader);
        
        // Format and create a paragraph for the guardian's playlist
        const formattedPlaylist = playlist.map(song => {
            const splitSong = song.split(' by ');
            return '<i class="song-title"><strong>' + splitSong[0] + '</strong></i> by ' + splitSong[1];
        }).join('<br>');
        
        const playlistText = document.createElement('p');
        playlistText.innerHTML = formattedPlaylist;
        
        guardianDiv.appendChild(playlistText); // Append the formatted playlist to the guardian's div

        playlistsDiv.appendChild(guardianDiv); // Append the guardian's div to the playlists div
    }
}

// Generate playlists based on guardians and songs
const playlists = generatePlaylist(guardians, songs);

// Display the generated playlists on the webpage
displayPlaylists(playlists);
