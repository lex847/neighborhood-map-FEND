import React, {Component} from 'react'
import * as DataAPI from '../../DataAPI';

class  Image extends Component {
	render () {
		const{imageSrc, detailsData} = this.props

		return (
			<div>
			<img id="img" tabIndex = {0} alt="" className="site-image" src={imageSrc} />
			    <div tabIndex = {0}> {detailsData}</div>
			</div>
			)
	}



}
export default Image