import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Alert Notifications</h1>

        <Notification>
          <>
            <AiFillCheckCircle className="icon name-green" />
            <div className="icon-name-container">
              <h1 className="icon-name name-green">Success</h1>
              <p className="icon-para">
                You can access all the files in the folder
              </p>
            </div>
          </>
        </Notification>
        <Notification>
          <>
            <RiErrorWarningFill className="icon name-red" />
            <div className="icon-name-container">
              <h1 className="icon-name name-red">Error</h1>
              <p className="icon-para">
                Sorry, you are not authorized to have access to delete the file.
              </p>
            </div>
          </>
        </Notification>
        <Notification>
          <>
            <MdWarning className="icon name-yellow" />
            <div className="icon-name-container">
              <h1 className="icon-name name-yellow">Warning</h1>
              <p className="icon-para">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </>
        </Notification>
        <Notification>
          <>
            <MdInfo className="icon name-blue" />
            <div className="icon-name-container">
              <h1 className="icon-name name-blue">Info</h1>
              <p className="icon-para">
                Anyone on the internet can view these files
              </p>
            </div>
          </>
        </Notification>
      </div>
    )
  }
}
export default AlertNotifications
