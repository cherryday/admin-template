import cn from 'classnames'
import { UserAvatarProps } from './UserAvatar.props'
import styles from './UserAvatar.module.css'

export const UserAvatar = ({ src, size = 'base', selected = false }: UserAvatarProps): JSX.Element => {
  return (
    <div className={cn(styles.avatar, {
      [styles.sm]: size === 'sm',
      [styles.base]: size === 'base',
      [styles.lg]: size === 'lg',
      [styles.selected]: selected
    })}>
      <img
        src={src}
        alt="avatar"
        className={styles.img}
      />
    </div>
  )
}