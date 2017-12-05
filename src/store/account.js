'use strict';

import { observable, action } from 'mobx';

/**
 * 账号信息
 */
class Account {

    @observable name = 'default name';

    @action
    setName(val) {
    	this.name = val;
    }
}

export default new Account();