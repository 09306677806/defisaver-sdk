const Action = require("../../Action");

/**
 * DyDxFlashLoanAction - Gets a flashloan from DyDx
 */
class DyDxFlashLoanAction extends Action {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super('FLDyDx', '0x0', ['uint256','address', 'uint256'], [loanAmount, tokenAddr, 0]);
  }
}

module.exports = DyDxFlashLoanAction;
