import { useState } from 'react';
import { IDialogProps } from '../../components/common/dialog';
import createStore from '..';
import { INotification } from '../../components/common/notification';

const LOCAL_KEY_USER_INFO = 'pabot_admin_user_info';
const NOTIFICATION_DURING_TIME = 5000;

const useGlobal = () => {
  const [layerPop, setLayerPop] = useState<null | 'modify' | 'password'>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(
    JSON.parse(localStorage.getItem(LOCAL_KEY_USER_INFO) || 'null')
  );

  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [dialog, setDialog] = useState<IDialogProps | null>(null);
  const [passwordExpiredDays, setPasswordExpiredDays] = useState(0);

  const saveUserInfo = (info: UserInfo | null) => {
    localStorage.setItem(LOCAL_KEY_USER_INFO, JSON.stringify(info));
    setUserInfo(info);
  };

  const dismissNotification = (notiKey: number) => {
    const tempNotis = notifications.filter((noti) => noti.notiKey !== notiKey);
    setNotifications(tempNotis);
  };

  const postNotification = (info: Omit<INotification, 'notiKey'>) => {
    const notiKey = notifications.length ? notifications[notifications.length - 1].notiKey + 1 : 0;
    setNotifications([...notifications, { ...info, notiKey }]);
    setInterval(() => {
      dismissNotification(notiKey);
    }, NOTIFICATION_DURING_TIME);
  };

  return {
    userInfo,
    notifications,
    dialog,
    layerPop,
    passwordExpiredDays,

    saveUserInfo,
    dismissNotification,
    postNotification,
    setDialog,
    setLayerPop,
    setPasswordExpiredDays,
  };
};

const GlobalStore = createStore(useGlobal, 'GlobalStore');

export default GlobalStore;

