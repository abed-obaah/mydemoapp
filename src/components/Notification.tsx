import { notification } from 'antd';

const openNotification = (content: string): void => {
  notification.info({
    message: `Notification`,
    description: content,
    placement: 'topRight',
    onClose: () => {
      window.location.reload();
    }
  });
};

export default openNotification;