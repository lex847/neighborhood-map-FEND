
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchAllLocations = () => 
  fetch(`https://api.foursquare.com/v2/venues/search?ll=40.8250585,-73.9476404&intent=browse&radius=700&query=coffee&limit=6&client_id=004MZJ3NNBLTSYALLLXDQJ4UMRSWRDA52B5B4Y2QVQMH4THL&client_secret=VDBKT5F4MD0SIK4U4I0LCP3MAQYJ24425IIHYVHG5E13URU3&v=20180323`)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data.response.venues)

export const fetchVenueDetails = (id) => 
    fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=004MZJ3NNBLTSYALLLXDQJ4UMRSWRDA52B5B4Y2QVQMH4THL&client_secret=VDBKT5F4MD0SIK4U4I0LCP3MAQYJ24425IIHYVHG5E13URU3&v=20180323`)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => data.response.venue)
