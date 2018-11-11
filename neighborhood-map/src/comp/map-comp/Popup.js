import React, {Component} from 'react'
import * as DataAPI from '../../DataAPI';
import Image from './Image.js'

class InfoWindowContent extends Component {
	state = {
		imageSrc: {},	
		venueDetails: {},
		detailsString: '',
		success: false
    }
    
	componentWillMount() {
		let img
		let constructString

        function handleErrors(response) {
            if (!response.ok) {
                this.setState({
                    success: false
                })
                throw Error(response.statusText);
            }
            return response;
        }

        DataAPI.fetchVenueDetails(this.props.locationId)
		    .then(handleErrors)
		        .then(data => {
                    console.log(data);
		    		if (data) {
		                const photo =  data.photos.groups.items[0].prefix + data.photos.groups.items[0].suffix
                            console.log(photo);
                        /*  if (photo !== undefined && photo !== null) {
			                img =`${bestPhoto.prefix}${bestPhoto.width}x${bestPhoto.height}${bestPhoto.suffix}`
		                } else {
			                img = process.env.PUBLIC_URL+'/no-photo-available.jpg'
		                }
		
		      let isOpen = ((data.hours !== undefined && data.hours.isopen))? 'Working Hours: '+ data.hours.isopen : 'Un available working hours'
		        let address = ((data.Location !== undefined && data.location.address )? 'Location : '+ data.location.address : '')
		        let phone = ((data.contact !== undefined && data.contact.phone) ? 'Phone: '+ data.contact.phone : '' )
		        let likes =  ((data.likes !== undefined && data.likes.count) ? 'Likes :' + data.likes.count : '')
		        let rating =  (data.rating !== undefined ? 'Rating :'+data.rating : '' )
        
                constructString =`${phone}   ${address} 
						  ${likes}  
						  ${rating} ${isOpen} Time Zone: ${data.timeZone}`
                        */
		}
		this.setState({
			success: true,
			venueDetails : data,
			imageSrc: img,
			detailsString: constructString
		})		
		})/*.catch(error => {
			console.log(`Error while Getting Venue Details FourSquareService May Be un reachable or unavailable `, error)
			this.setState({
				success:false
			})
		})*/
	}
	
	render() {
		const {title, latlng, venueId} = this.props
		return (
			<div className="picture-Style" tabIndex = {0} aria-label="Info window">
				<div className="window-title" tabIndex = {0}> {title }	</div>	
				{ 
				(this.state.success) &&	(this.state.imageSrc !== undefined && this.state.imageSrc !== null) && (
					<ul id="images-list" tabIndex = {0}>					
                            <Image  
                                imageSrc = {this.state.imageSrc} 
							    detailsData = {this.state.detailsString} >
							</Image>
						
					</ul>)
				}
				{(!this.state.success) && 
				( <div className="load-failed">Failed to Load data from foursquare API to get Venue details</div>)}				
			</div>
			)
	}
}

export default InfoWindowContent