import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button";

export default function GoHome() {
    const navigate = useNavigate();
    return (
        <div className="absolute top-[3em] left-[3em] z-10">
            
            <Button
                variant={'ghost'}
                className=""
                onClick={() => navigate('/home')}
            >Back to Home</Button>
        </div>
    )
}