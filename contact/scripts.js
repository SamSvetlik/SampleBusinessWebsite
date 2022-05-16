const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})
// I just copy/pasted this from the form we made for our portfolio site.
// The checkpoint assignment didn't specify that we needed the submission to
// do anything, but I figured it couldn't hurt.