import dynamic from "next/dynamic";

const Map = dynamic(()=> import("./Map" ), // dynamic import
        {ssr: false} // disable server side rendering
    )
export default Map;

// import dynamic from "next/dynamic";

// const DynamicMap = dynamic(() => import("./Map"), {
//   ssr: false
// });

// export default DynamicMap;
