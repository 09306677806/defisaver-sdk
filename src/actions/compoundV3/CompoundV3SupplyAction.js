const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');
const {getAssetInfoByAddress} = require("@defisaver/tokens");

/**
 * CompoundV3SupplyAction - Supply specified amount of token (base or collateral)
 */
 class CompoundV3SupplyAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param tokenAddr {EthAddress}
     * @param amount {uint256} wei amount of asset to supply
     * @param from {EthAddress} Address from where we're pulling the tokens
     * @param onBehalf {EthAddress} Address of the account we are supplying the tokens
     */
     constructor(market, tokenAddr, amount, from, onBehalf) {
        super('CompV3Supply', getAddr('CompV3Supply'), ['address','address','uint256','address', 'address'], [market, tokenAddr, amount, from, onBehalf]);

        this.mappableArgs = [
          this.args[0],
          this.args[1],
          this.args[2],
          this.args[3],
          this.args[4]
        ];
        this.tokenForApproval = tokenAddr;
      }

      async getAssetsToApprove() {
        const asset = getAssetInfoByAddress(this.tokenForApproval);

        if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[1]}];
        return [];
      }
  }

  module.exports = CompoundV3SupplyAction;