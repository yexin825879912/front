import { Service } from 'egg';

/**
 * cc 库
 * manager_interface_url
 */
// eslint-disable-next-line @typescript-eslint/class-name-casing
export default class Manager_interface_url extends Service {

  /**
   * 查询指定account的全局配置
   * account: 账户标识 例如N00000003057
   */
  public async findByAccount(account: string) {
    const { ctx, app } = this;
    try {
      const array = await app.commonDB.db().collection('manager_interface_url').findOne({ accountId: account });
      return array;
    } catch (error) {
      ctx.logger.error('Manager_interface_url-findByAccount', error);
      return [];
    }
  }
}
