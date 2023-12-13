import CompraHandle from "./CompraHandle";
import StaticUrls from "@/app/utilidad/StaticUrls";

// export async function generateStaticParams() {
    export function generateStaticParams() {
        const urls = StaticUrls()
        return urls;
        // return urls.map((url)=>({
        //     id_pelicula: url.id_pelicula,
        // }))
    }
export default function Compra( { params } ){
    const {id_pelicula} = params

    return (
        <CompraHandle info={id_pelicula}/>
    )
}