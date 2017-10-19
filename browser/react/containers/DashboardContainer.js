// import Artist from '../components/Artist';
// import { toggleSong } from '../action-creators/player';
import StyleGuides from '../components/StyleGuides';
import { connect } from 'react-redux';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     selectedArtist: state.artists.selected,
//     children: ownProps.children
//   };
// };

const mapStateToProps = (state, ownProps) => {
  return {
  };
};


// const ArtistContainer = connect(
//   mapStateToProps
// )(Artist);
const DashboardContainer = connect(
  mapStateToProps
)(StyleGuides);

// export default ArtistContainer;
export default DashboardContainer;
