import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const SpecificBrand = () => {

    const router = useRouter();
    const productsData = useSelector((state: any) => state.products);

    return (
        <h1>brand</h1>
    )
}

export default SpecificBrand