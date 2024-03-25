import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <LoaderContainer data-testid="loader">
    <Loader height={50} width={50} color="#ff0000" type="ThreeDots" />
  </LoaderContainer>
)

export default LoaderView
