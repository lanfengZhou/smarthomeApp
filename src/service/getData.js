import fetch from '../config/fetch'
// import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */

export const ledCtrl = (id) => fetch('/light/lightControl', {
	channel: id
});

export const curtainCtrl = (cmd) => fetch('/curtain/curtainControl', {
	cmd: cmd
});