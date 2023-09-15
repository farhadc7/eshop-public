import Image from "next/image";
//import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ className, width, height, src, alt, style }) => {
  return (
    // <LazyLoadImage
    //   style={style}
    //   className={className}
    //   src={src}
    //   alt={alt}
    //   width={width}
    //   height={height}
    // />
    <Image
      style={style}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
