import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function PathNotFound({ setShowPage404 }) {
    const history = useHistory();

    setShowPage404(true);
    history.push('/');

    return null
}
