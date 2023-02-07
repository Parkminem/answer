/* eslint-disable react/prop-types */
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SubHeader = ({ title, location, currentLocation }) => {
	return (
		<div className="header_wrap">
			<div className="header">
				<h2 className="sub_top">{title}</h2>
				<div className="location">
					<ul>
						<li>
							<a href="#">{location}</a>
						</li>
						<li>
							<span className="material-icons location_arrow">
								<NavigateNextIcon />
							</span>
						</li>
						<li>
							<a href="#">
								<span className="current_location">{currentLocation}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SubHeader;
