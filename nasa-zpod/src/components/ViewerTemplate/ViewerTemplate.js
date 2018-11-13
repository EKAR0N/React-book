/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './ViewerTemplate.module.scss';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, spaceNavigator /* props 비구조화 할당 */}) => {
  return (
    <div className={cx('viewer-template')}>
      <header>
        Astronomy Picture of the Day
      </header>
      <div className={cx('viewer-wrapper')}>
        {viewer} {/* props 사용 */}
        <div className={cx('space-navigator-wrapper')}>
          {spaceNavigator} {/* props 사용 */}
        </div>
      </div>
    </div>
  )
}

export default ViewerTemplate;
