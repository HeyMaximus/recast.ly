var Search = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    var query = e.target.videosearch.value;
    props.searchYouTube(query, props.setList);
  }

  return (
    <form className="search-bar form-inline" onSubmit={(e) => { handleSubmit(e); }}>
      <input name='videosearch' className="form-control" type="text" placeholder="Search for video" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
