import Image from 'next/image';
import styles from './CircularImage.module.css';

const CircularImage = ({ src, alt }) => (
    <Image src={src} alt={alt} className={styles.circularImage} width={150} height={150} />
);

export default CircularImage;
