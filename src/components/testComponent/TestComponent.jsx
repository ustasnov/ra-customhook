import PropTypes from 'prop-types';
import useJsonFetch from "../../hooks/usejsonfetch/useJsonFetch";

function TestComponent(props) {
  const { url, opts } = props;
  const { data, loading, error } = useJsonFetch(url, opts);

  if (loading) return (<div>Loading...</div>);
  if (error) return (<div>{error}</div>);
  if (data) return (<>{data && <div className="data">{data.status}</div>}</>);
}

export default TestComponent

Details.propTypes = {
  url: PropTypes.string,
  opts: PropTypes.object
}
