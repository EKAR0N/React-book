import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';

const cx = classNames.bind(styles);

/* 페이지 템플릿을 위한 컴포넌트. 페이지의 틀, 타이틀, 콘텐츠 등 속성이 설정 */
const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <h1>일정 관리</h1>
    <div className={cx('content')}>{children}</div>
  </div>
  );

export default PageTemplate;
