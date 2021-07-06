const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourWithdrawAction - 
 */
class ReflexerNativeUniV2SaviourWithdrawAction extends Action {
  /**
   * @param to {EthAddress}
   * @param safeId {SafeId}
   * @param lpTokenAmount {string}
   */
  constructor(to, safeId, lpTokenAmount) {
    super('ReflexerNativeUniV2SaviourWithdraw', getAddr('ReflexerNativeUniV2SaviourWithdraw'), [['address','uint256','uint256', ]], [[to, safeId, lpTokenAmount]]);
    this.mappableArgs = [
        this.args[0][0],
        this.args[0][2],
      ];
}

  async getAssetsToApprove() {
    return [];
  }

}

module.exports = ReflexerNativeUniV2SaviourWithdrawAction;