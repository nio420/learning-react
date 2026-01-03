import { useParams} from 'react-router-dom';

export default function Posts ({match}){
const {catagory} = useParams();
    return (
        <div>
            <div> The page post is - {catagory}  </div>
         </div>
    )
}