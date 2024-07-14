import './style.css'
import { PropagateLoader } from 'react-spinners'
export const LoadingView = () => {
    return (
        <div className='register-loading-container'>
            <PropagateLoader />
        </div>
    )
}