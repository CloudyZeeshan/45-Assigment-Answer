function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist 1", "Album Title 1");
console.log(album1);
const album2 = makeAlbum("Artist 2", "Album Title 2");
console.log(album2);
const album3 = makeAlbum("Artist 3", "Album Title 3", 12);
console.log(album3);
export {};
