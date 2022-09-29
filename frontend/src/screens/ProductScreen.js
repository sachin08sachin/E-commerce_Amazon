import { useParams } from 'react-router-dom';
//  <---------------------Get the slug from URL to show it in screen, to do that we need to use Hook(UseParams()) from react-router-dom----------------->
function ProductScreen() {
  const params = useParams();
  const {slug} = params;
  return <div>
    <h1>{slug}</h1>
    </div>
};
export default ProductScreen;
