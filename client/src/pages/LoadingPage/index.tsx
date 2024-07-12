import './style.css'
import { PropagateLoader } from 'react-spinners'
export const LoadingPage = () => {
    return (
        <div className='register-loading-container'>
            <PropagateLoader />
        </div>
    )
}