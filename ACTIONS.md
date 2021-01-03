## Classes

<dl>
<dt><a href="#AaveBorrowAction">AaveBorrowAction</a></dt>
<dd><p>AaveBorrowAction - Borrow tokens from Aave</p>
</dd>
<dt><a href="#AaveMigrateLendAction">AaveMigrateLendAction</a></dt>
<dd><p>AaveMigrateLendAction - Migrates Lend to Aave</p>
</dd>
<dt><a href="#AavePaybackAction">AavePaybackAction</a></dt>
<dd><p>AavePaybackAction - Payback borrowed tokens from Aave</p>
</dd>
<dt><a href="#AaveSupplyAction">AaveSupplyAction</a></dt>
<dd><p>AaveSupplyAction - Supply token to an aave position</p>
</dd>
<dt><a href="#AaveWithdrawAction">AaveWithdrawAction</a></dt>
<dd><p>AaveWithdrawAction - Withdraw token from an aave position</p>
</dd>
<dt><a href="#AavePaybackActionV1">AavePaybackActionV1</a></dt>
<dd><p>AavePaybackActionV1 - Payback borrowed tokens from AaveV1</p>
</dd>
<dt><a href="#AaveWithdrawActionV1">AaveWithdrawActionV1</a></dt>
<dd><p>AaveWithdrawActionV1 - Withdraw token from an aaveV1 position</p>
</dd>
<dt><a href="#SellAction">SellAction</a></dt>
<dd><p>Sells token on DeFi Saver exchange aggregator</p>
</dd>
<dt><a href="#SendTokenAction">SendTokenAction</a></dt>
<dd><p>Transfers specified token to specified address</p>
</dd>
<dt><a href="#CompoundBorrowAction">CompoundBorrowAction</a></dt>
<dd><p>CompoundBorrowAction - Borrow tokens from Compound</p>
</dd>
<dt><a href="#CompoundPaybackAction">CompoundPaybackAction</a></dt>
<dd><p>CompoundPaybackAction - Payback borrowed tokens from Compound</p>
</dd>
<dt><a href="#CompoundSupplyAction">CompoundSupplyAction</a></dt>
<dd><p>CompoundSupplyAction - Supply token to an Compound position</p>
</dd>
<dt><a href="#CompoundWithdrawAction">CompoundWithdrawAction</a></dt>
<dd><p>CompoundWithdrawAction - Withdraw token from an Compound position</p>
</dd>
<dt><a href="#AaveCustomFlashLoanV2Action">AaveCustomFlashLoanV2Action</a></dt>
<dd><p>AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2</p>
</dd>
<dt><a href="#AaveFlashLoanAction">AaveFlashLoanAction</a></dt>
<dd><p>Gets a flashloan from Aave v1</p>
</dd>
<dt><a href="#AaveFlashLoanPaybackAction">AaveFlashLoanPaybackAction</a></dt>
<dd><p>Pays back a flashloan from Aave v1</p>
</dd>
<dt><a href="#AaveV2FlashLoanAction">AaveV2FlashLoanAction</a></dt>
<dd><p>Gets a flashloan from Aave v2</p>
</dd>
<dt><a href="#AaveV2FlashLoanPaybackAction">AaveV2FlashLoanPaybackAction</a></dt>
<dd><p>Pays back a single flashloan from Aave v2</p>
</dd>
<dt><a href="#DyDxFlashLoanAction">DyDxFlashLoanAction</a></dt>
<dd><p>Gets a flashloan from DyDx</p>
</dd>
<dt><a href="#DyDxFlashLoanPaybackAction">DyDxFlashLoanPaybackAction</a></dt>
<dd><p>Pays back a flashloan from DyDx</p>
</dd>
<dt><a href="#MakerGenerateAction">MakerGenerateAction</a></dt>
<dd><p>MakerGenerateAction - Generated Dai from a Vault</p>
</dd>
<dt><a href="#MakerOpenVaultAction">MakerOpenVaultAction</a></dt>
<dd><p>MakerOpenVaultAction</p>
</dd>
<dt><a href="#MakerPaybackAction">MakerPaybackAction</a></dt>
<dd><p>MakerPaybackAction - Payback dai to a Vault</p>
</dd>
<dt><a href="#MakerSupplyAction">MakerSupplyAction</a></dt>
<dd><p>MakerSupplyAction - Supply token to a Vault</p>
</dd>
<dt><a href="#MakerWithdrawAction">MakerWithdrawAction</a></dt>
<dd><p>MakerWithdrawAction - Withdraw token from a Vault</p>
</dd>
<dt><a href="#UniswapSupplyAction">UniswapSupplyAction</a></dt>
<dd><p>Supplies a pair tokens to uniswap pool</p>
</dd>
<dt><a href="#UniswapWithdrawAction">UniswapWithdrawAction</a></dt>
<dd><p>Withdraws liquidity from uniswap pool</p>
</dd>
</dl>

<a name="AaveBorrowAction"></a>

## AaveBorrowAction
AaveBorrowAction - Borrow tokens from Aave

**Kind**: global class  
<a name="new_AaveBorrowAction_new"></a>

### new AaveBorrowAction(market, tokenAddr, amount, rateMode, to, onBehlaf)
**Params**

- market <code>String</code>
- tokenAddr <code>String</code>
- amount <code>String</code>
- rateMode <code>Number</code>
- to <code>String</code>
- onBehlaf <code>String</code>

<a name="AaveMigrateLendAction"></a>

## AaveMigrateLendAction
AaveMigrateLendAction - Migrates Lend to Aave

**Kind**: global class  
<a name="new_AaveMigrateLendAction_new"></a>

### new AaveMigrateLendAction(lendAmount, from, to)
**Params**

- lendAmount <code>String</code>
- from <code>String</code>
- to <code>String</code>

<a name="AavePaybackAction"></a>

## AavePaybackAction
AavePaybackAction - Payback borrowed tokens from Aave

**Kind**: global class  
<a name="new_AavePaybackAction_new"></a>

### new AavePaybackAction(market, tokenAddr, amount, rateMode, from, onBehlaf)
**Params**

- market <code>String</code>
- tokenAddr <code>String</code>
- amount <code>String</code>
- rateMode <code>Number</code>
- from <code>String</code>
- onBehlaf <code>String</code>

<a name="AaveSupplyAction"></a>

## AaveSupplyAction
AaveSupplyAction - Supply token to an aave position

**Kind**: global class  
<a name="new_AaveSupplyAction_new"></a>

### new AaveSupplyAction(market, tokenAddr, amount, from, onBehlaf)
**Params**

- market <code>String</code>
- tokenAddr <code>String</code>
- amount <code>String</code>
- from <code>String</code>
- onBehlaf <code>String</code>

<a name="AaveWithdrawAction"></a>

## AaveWithdrawAction
AaveWithdrawAction - Withdraw token from an aave position

**Kind**: global class  
<a name="new_AaveWithdrawAction_new"></a>

### new AaveWithdrawAction(market, tokenAddr, amount, to)
**Params**

- market <code>String</code>
- tokenAddr <code>String</code>
- amount <code>String</code>
- to <code>String</code>

<a name="AavePaybackActionV1"></a>

## AavePaybackActionV1
AavePaybackActionV1 - Payback borrowed tokens from AaveV1

**Kind**: global class  
<a name="new_AavePaybackActionV1_new"></a>

### new AavePaybackActionV1(tokenAddr, amount, from, onBehalf)
**Params**

- tokenAddr <code>address</code>
- amount <code>String</code>
- from <code>address</code>
- onBehalf <code>address</code>

<a name="AaveWithdrawActionV1"></a>

## AaveWithdrawActionV1
AaveWithdrawActionV1 - Withdraw token from an aaveV1 position

**Kind**: global class  
<a name="new_AaveWithdrawActionV1_new"></a>

### new AaveWithdrawActionV1(tokenAddr, amount, to)
**Params**

- tokenAddr <code>String</code>
- amount <code>String</code>
- to <code>String</code>

<a name="SellAction"></a>

## SellAction
Sells token on DeFi Saver exchange aggregator

**Kind**: global class  
<a name="new_SellAction_new"></a>

### new SellAction(exchangeOrder, from, to)
**Params**

- exchangeOrder <code>Array</code> - Stardard DFS Exchange data
- from <code>String</code> - Order sender
- to <code>String</code> - Order recipient

<a name="SendTokenAction"></a>

## SendTokenAction
Transfers specified token to specified address

**Kind**: global class  
<a name="new_SendTokenAction_new"></a>

### new SendTokenAction(token, to, amount)
**Params**

- token <code>String</code> - Token address
- to <code>String</code> - Transfer recipient
- amount <code>String</code> - Transfer amount

<a name="CompoundBorrowAction"></a>

## CompoundBorrowAction
CompoundBorrowAction - Borrow tokens from Compound

**Kind**: global class  
<a name="new_CompoundBorrowAction_new"></a>

### new CompoundBorrowAction(tokenAddr, amount, to)
**Params**

- tokenAddr <code>String</code>
- amount <code>String</code>
- to <code>String</code>

<a name="CompoundPaybackAction"></a>

## CompoundPaybackAction
CompoundPaybackAction - Payback borrowed tokens from Compound

**Kind**: global class  
<a name="new_CompoundPaybackAction_new"></a>

### new CompoundPaybackAction(tokenAddr, amount, from)
**Params**

- tokenAddr <code>String</code>
- amount <code>String</code>
- from <code>String</code>

<a name="CompoundSupplyAction"></a>

## CompoundSupplyAction
CompoundSupplyAction - Supply token to an Compound position

**Kind**: global class  
<a name="new_CompoundSupplyAction_new"></a>

### new CompoundSupplyAction(tokenAddr, amount, from)
**Params**

- tokenAddr <code>String</code>
- amount <code>String</code>
- from <code>String</code>

<a name="CompoundWithdrawAction"></a>

## CompoundWithdrawAction
CompoundWithdrawAction - Withdraw token from an Compound position

**Kind**: global class  
<a name="new_CompoundWithdrawAction_new"></a>

### new CompoundWithdrawAction(tokenAddr, amount, to)
**Params**

- tokenAddr <code>String</code>
- amount <code>String</code>
- to <code>String</code>

<a name="AaveCustomFlashLoanV2Action"></a>

## AaveCustomFlashLoanV2Action
AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveCustomFlashLoanV2Action_new"></a>

### new AaveCustomFlashLoanV2Action(viewer, loanPayer, viewerData)
**Params**

- viewer <code>address</code>
- loanPayer <code>address</code>
- viewerData <code>bytes</code>

<a name="AaveFlashLoanAction"></a>

## AaveFlashLoanAction
Gets a flashloan from Aave v1

**Kind**: global class  
<a name="new_AaveFlashLoanAction_new"></a>

### new AaveFlashLoanAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>String</code>
- tokenAddr <code>String</code>

<a name="AaveFlashLoanPaybackAction"></a>

## AaveFlashLoanPaybackAction
Pays back a flashloan from Aave v1

**Kind**: global class  
<a name="new_AaveFlashLoanPaybackAction_new"></a>

### new AaveFlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>String</code>
- tokenAddr <code>String</code>

<a name="AaveV2FlashLoanAction"></a>

## AaveV2FlashLoanAction
Gets a flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveV2FlashLoanAction_new"></a>

### new AaveV2FlashLoanAction(loanAmounts, tokens, modes, loanPayer)
**Params**

- loanAmounts <code>Array</code>
- tokens <code>Array</code>
- modes <code>Array</code>
- loanPayer <code>address</code>

<a name="AaveV2FlashLoanPaybackAction"></a>

## AaveV2FlashLoanPaybackAction
Pays back a single flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveV2FlashLoanPaybackAction_new"></a>

### new AaveV2FlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>String</code>
- tokenAddr <code>String</code>

<a name="DyDxFlashLoanAction"></a>

## DyDxFlashLoanAction
Gets a flashloan from DyDx

**Kind**: global class  
<a name="new_DyDxFlashLoanAction_new"></a>

### new DyDxFlashLoanAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>String</code>
- tokenAddr <code>String</code>

<a name="DyDxFlashLoanPaybackAction"></a>

## DyDxFlashLoanPaybackAction
Pays back a flashloan from DyDx

**Kind**: global class  
<a name="new_DyDxFlashLoanPaybackAction_new"></a>

### new DyDxFlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>String</code>
- tokenAddr <code>String</code>

<a name="MakerGenerateAction"></a>

## MakerGenerateAction
MakerGenerateAction - Generated Dai from a Vault

**Kind**: global class  
<a name="new_MakerGenerateAction_new"></a>

### new MakerGenerateAction(vaultId, amount, to, mcdManager)
**Params**

- vaultId <code>String</code>
- amount <code>String</code>
- to <code>String</code>
- mcdManager <code>String</code>

<a name="MakerOpenVaultAction"></a>

## MakerOpenVaultAction
MakerOpenVaultAction

**Kind**: global class  
<a name="new_MakerOpenVaultAction_new"></a>

### new MakerOpenVaultAction(joinAddr, mcdManager)
**Params**

- joinAddr <code>String</code>
- mcdManager <code>String</code>

<a name="MakerPaybackAction"></a>

## MakerPaybackAction
MakerPaybackAction - Payback dai to a Vault

**Kind**: global class  
<a name="new_MakerPaybackAction_new"></a>

### new MakerPaybackAction(vaultId, amount, from, mcdManager)
**Params**

- vaultId <code>String</code>
- amount <code>String</code>
- from <code>String</code>
- mcdManager <code>String</code>

<a name="MakerSupplyAction"></a>

## MakerSupplyAction
MakerSupplyAction - Supply token to a Vault

**Kind**: global class  
<a name="new_MakerSupplyAction_new"></a>

### new MakerSupplyAction(vaultId, amount, joinAddr, from, mcdManager)
**Params**

- vaultId <code>String</code>
- amount <code>String</code>
- joinAddr <code>String</code>
- from <code>String</code>
- mcdManager <code>String</code>

<a name="MakerWithdrawAction"></a>

## MakerWithdrawAction
MakerWithdrawAction - Withdraw token from a Vault

**Kind**: global class  
<a name="new_MakerWithdrawAction_new"></a>

### new MakerWithdrawAction(vaultId, amount, joinAddr, to, mcdManager)
**Params**

- vaultId <code>String</code>
- amount <code>String</code>
- joinAddr <code>String</code>
- to <code>String</code>
- mcdManager <code>String</code>

<a name="UniswapSupplyAction"></a>

## UniswapSupplyAction
Supplies a pair tokens to uniswap pool

**Kind**: global class  
<a name="new_UniswapSupplyAction_new"></a>

### new UniswapSupplyAction(uniSupplyData)
**Params**

- uniSupplyData <code>Array</code> - Uni supply struct
address tokenA;
address tokenB;
address from;
address to;
uint256 amountADesired;
uint256 amountBDesired;
uint256 amountAMin;
uint256 amountBMin;
uint256 deadline;

<a name="UniswapWithdrawAction"></a>

## UniswapWithdrawAction
Withdraws liquidity from uniswap pool

**Kind**: global class  
<a name="new_UniswapWithdrawAction_new"></a>

### new UniswapWithdrawAction(uniWithdrawData)
**Params**

- uniWithdrawData <code>Array</code> - Uni withdraw struct
address tokenA;
address tokenB;
uint256 liquidity;
address to;
address from;
uint256 amountAMin;
uint256 amountBMin;
uint256 deadline;
