function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist 1", "album title 1");
console.log(album1);
var album2 = make_album("Artist 2", "album title 2");
console.log(album2);
var album3 = make_album("Artist 3", "album title 3", 12);
console.log(album3);
