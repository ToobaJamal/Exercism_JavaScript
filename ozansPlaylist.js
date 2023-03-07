/*
Implement the removeDuplicates function, which takes a playlist as a parameter and returns a new playlist where all the tracks are unique.
*/

function removeDuplicates(playlist) {
  const removedDuplicates = new Set(playlist)
  return [...removedDuplicates]
}

/*
Implement the hasTrack function, which takes a playlist and a track as parameters and returns a boolean that indicates whether the playlist contains the track.
*/

function hasTrack(playlist, track) {
  return playlist.includes(track)
}

/*
Implement the addTrack function, which takes a playlist and a track as parameters and returns a new playlist that includes the track.
*/

function addTrack(playlist, track) {
  const uniqueTracksPlaylist = new Set(playlist)
  uniqueTracksPlaylist.add(track)
  return [...uniqueTracksPlaylist]
}

/*
Implement the deleteTrack function, which takes a playlist and a track as parameters and returns a new playlist that does not include the track.
*/

function deleteTrack(playlist, track) {
  const uniquePlaylist = new Set(playlist)
  uniquePlaylist.delete(track)
  return [...uniquePlaylist]
}

/*
Implement the listArtists function, which takes a playlist as a parameter and returns the list of unique artists in the playlist. 
Note that the names of the tracks are formatted like <SONG> - <ARTIST>.
*/

function listArtists(playlist) {
  const artists = playlist.map(song => song.split('-')[1].trim())
  const uniqueArtists = new Set(artists)
  return [...uniqueArtists]
}
