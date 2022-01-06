import cn from 'classnames'
import { DialogStatusProps } from './DialogStatus.props'
import styles from './DialogStatus.module.css'
import { ReactComponent as InfoIcon } from '../../../assets/icons/info.svg'
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg'

export const DialogStatus = ({ status, count = 0 }: DialogStatusProps): JSX.Element => {
  const buildChild = () => {
    if (status === 'new') {
      return <span>{count < 9 ? count : `${9}+`}</span>
    } else if (status === 'sent') {
      return <CheckIcon/>
    } else if (status === 'seen') {
      return <CheckIcon/>
    } else if (status === 'error') {
      return <InfoIcon/>
    }
  }

  return (
    <div className={cn(styles.status, {
      [styles.new]: status === 'new',
      [styles.sent]: status === 'sent',
      [styles.seen]: status === 'seen',
      [styles.error]: status === 'error'
    })}>
      {buildChild()}
    </div>
  )
}
