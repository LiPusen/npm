import { getSen, getLoc, serialize } from '../utils'

export default {
    gTitle(state) {
        return state.info.memberType == 1 ? '美吖吖代理商' : '美吖吖美容院';
    }
}