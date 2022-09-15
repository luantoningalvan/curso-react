import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
  const { hasBorder = true, ...rest } = props;

  return (
    <img
      className={!hasBorder ? styles.avatar : styles.avatarWithBorder}
      {...rest}
    />
  );
}
