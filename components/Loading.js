import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading({ className = "" }) {
    return (
        <Skeleton className={className} />
    )
}

export default Loading