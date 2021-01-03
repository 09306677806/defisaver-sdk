const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Aave v2
 */
class AaveV2FlashLoanAction extends Action {
  /**
   * @param loanAmounts {Array}
   * @param tokens {Array}
   * @param modes {Array}
   * @param loanPayer {address}
   */
  constructor(loanAmounts, tokens, modes, loanPayer) {
    super(
      'FLAaveV2',
      getAddr('FLAaveV2'),
      ['uint256[]','address[]', 'uint256[]', 'address', 'uint256'],
      [loanAmounts, tokens, modes, loanPayer, 0]
    );
  }
}

module.exports = AaveV2FlashLoanAction;