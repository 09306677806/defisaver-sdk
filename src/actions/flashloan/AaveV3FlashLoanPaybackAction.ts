import {SendTokenAction} from "../basic/SendTokenAction";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a single flashloan from Aave v3
 * 
 * @category Flashloans
 */
export class AaveV3FlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(tokenAddr, getAddr('FLAaveV3'), loanAmount);
  }
}