import React from 'react';
import PropTypes from 'prop-types';
import { FaBroadcastTower } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';


const ShowNotes = ({ show, setCurrentPlaying }) => (
  <div className="showNotes">
    <p className="show__date">{show.displayDate}</p>
    <h2>{show.title}</h2>
    <button
      className="button"
      onClick={() => setCurrentPlaying(show.displayNumber)}
      type="button"
    >
      <span className="icon"><FaBroadcastTower /></span> Play Episode {show.displayNumber}
    </button>
    <a className="button" download href={show.url}>
      <span className="icon"><MdFileDownload /></span> Download Show
    </a>
    <div dangerouslySetInnerHTML={{ __html: show.html }} />
  </div>
);

ShowNotes.propTypes = {
  show: PropTypes.object.isRequired,
  setCurrentPlaying: PropTypes.func.isRequired,
};

export default ShowNotes;
