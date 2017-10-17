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

export const doorCtrl = (state) => fetch('/io/ioControl', {
	key:'lock',
	value:state
});

export const getTH = () => fetch('/env/getData', {
});

export const getProtect =  () => fetch('/io/getIoState',{
	position:'parlour'
});

export const ptzCtrl =  (dir) => fetch('/camera/ptzControl',{
	dir:dir
});

export const tvLearn = (key) => fetch('/tv/irLearn',{
	key:key
});
export const tvCtrl = (key) => fetch('/tv/irControl',{
	key:key
});

//厨房控制
export const commonIoCtrl = (key,state) => fetch('/io/ioControl', {
	key:key,
	value:state
});

export const getIoState =() => fetch('/io/getIoState',{
	position:'kitchen'
})
// export const getImg = () => fetch('')