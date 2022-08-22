import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div className="card-container">
      <div className="content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
