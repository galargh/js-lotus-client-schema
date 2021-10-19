// Code generated by github.com/filecoin-shipyard/js-lotus-client-schema/go-schemagen. DO NOT EDIT.

const CommonMethods = {
  AuthNew: {},
  AuthVerify: {},
  Closing: {
    subscription: true
  },
  Discover: {},
  LogAlerts: {},
  LogList: {},
  LogSetLevel: {},
  Session: {},
  Shutdown: {},
  Version: {}
}

const FullNodeMethods = {
  AuthNew: {},
  AuthVerify: {},
  BeaconGetEntry: {},
  ChainBlockstoreInfo: {},
  ChainCheckBlockstore: {},
  ChainDeleteObj: {},
  ChainExport: {
    subscription: true
  },
  ChainGetBlock: {},
  ChainGetBlockMessages: {},
  ChainGetGenesis: {},
  ChainGetMessage: {},
  ChainGetMessagesInTipset: {},
  ChainGetNode: {},
  ChainGetParentMessages: {},
  ChainGetParentReceipts: {},
  ChainGetPath: {},
  ChainGetTipSet: {},
  ChainGetTipSetAfterHeight: {},
  ChainGetTipSetByHeight: {},
  ChainHasObj: {},
  ChainHead: {},
  ChainNotify: {
    subscription: true
  },
  ChainReadObj: {},
  ChainSetHead: {},
  ChainStatObj: {},
  ChainTipSetWeight: {},
  ClientCalcCommP: {},
  ClientCancelDataTransfer: {},
  ClientCancelRetrievalDeal: {},
  ClientDataTransferUpdates: {
    subscription: true
  },
  ClientDealPieceCID: {},
  ClientDealSize: {},
  ClientFindData: {},
  ClientGenCar: {},
  ClientGetDealInfo: {},
  ClientGetDealStatus: {},
  ClientGetDealUpdates: {
    subscription: true
  },
  ClientGetRetrievalUpdates: {
    subscription: true
  },
  ClientHasLocal: {},
  ClientImport: {},
  ClientListDataTransfers: {},
  ClientListDeals: {},
  ClientListImports: {},
  ClientListRetrievals: {},
  ClientMinerQueryOffer: {},
  ClientQueryAsk: {},
  ClientRemoveImport: {},
  ClientRestartDataTransfer: {},
  ClientRetrieve: {},
  ClientRetrieveTryRestartInsufficientFunds: {},
  ClientRetrieveWithEvents: {
    subscription: true
  },
  ClientStartDeal: {},
  ClientStatelessDeal: {},
  Closing: {
    subscription: true
  },
  CreateBackup: {},
  Discover: {},
  GasEstimateFeeCap: {},
  GasEstimateGasLimit: {},
  GasEstimateGasPremium: {},
  GasEstimateMessageGas: {},
  ID: {},
  LogAlerts: {},
  LogList: {},
  LogSetLevel: {},
  MarketAddBalance: {},
  MarketGetReserved: {},
  MarketReleaseFunds: {},
  MarketReserveFunds: {},
  MarketWithdraw: {},
  MinerCreateBlock: {},
  MinerGetBaseInfo: {},
  MpoolBatchPush: {},
  MpoolBatchPushMessage: {},
  MpoolBatchPushUntrusted: {},
  MpoolCheckMessages: {},
  MpoolCheckPendingMessages: {},
  MpoolCheckReplaceMessages: {},
  MpoolClear: {},
  MpoolGetConfig: {},
  MpoolGetNonce: {},
  MpoolPending: {},
  MpoolPush: {},
  MpoolPushMessage: {},
  MpoolPushUntrusted: {},
  MpoolSelect: {},
  MpoolSetConfig: {},
  MpoolSub: {
    subscription: true
  },
  MsigAddApprove: {},
  MsigAddCancel: {},
  MsigAddPropose: {},
  MsigApprove: {},
  MsigApproveTxnHash: {},
  MsigCancel: {},
  MsigCreate: {},
  MsigGetAvailableBalance: {},
  MsigGetPending: {},
  MsigGetVested: {},
  MsigGetVestingSchedule: {},
  MsigPropose: {},
  MsigRemoveSigner: {},
  MsigSwapApprove: {},
  MsigSwapCancel: {},
  MsigSwapPropose: {},
  NetAddrsListen: {},
  NetAgentVersion: {},
  NetAutoNatStatus: {},
  NetBandwidthStats: {},
  NetBandwidthStatsByPeer: {},
  NetBandwidthStatsByProtocol: {},
  NetBlockAdd: {},
  NetBlockList: {},
  NetBlockRemove: {},
  NetConnect: {},
  NetConnectedness: {},
  NetDisconnect: {},
  NetFindPeer: {},
  NetPeerInfo: {},
  NetPeers: {},
  NetPubsubScores: {},
  NodeStatus: {},
  PaychAllocateLane: {},
  PaychAvailableFunds: {},
  PaychAvailableFundsByFromTo: {},
  PaychCollect: {},
  PaychGet: {},
  PaychGetWaitReady: {},
  PaychList: {},
  PaychNewPayment: {},
  PaychSettle: {},
  PaychStatus: {},
  PaychVoucherAdd: {},
  PaychVoucherCheckSpendable: {},
  PaychVoucherCheckValid: {},
  PaychVoucherCreate: {},
  PaychVoucherList: {},
  PaychVoucherSubmit: {},
  Session: {},
  Shutdown: {},
  StateAccountKey: {},
  StateAllMinerFaults: {},
  StateCall: {},
  StateChangedActors: {},
  StateCirculatingSupply: {},
  StateCompute: {},
  StateDealProviderCollateralBounds: {},
  StateDecodeParams: {},
  StateEncodeParams: {},
  StateGetActor: {},
  StateGetRandomnessFromBeacon: {},
  StateGetRandomnessFromTickets: {},
  StateListActors: {},
  StateListMessages: {},
  StateListMiners: {},
  StateLookupID: {},
  StateMarketBalance: {},
  StateMarketDeals: {},
  StateMarketParticipants: {},
  StateMarketStorageDeal: {},
  StateMinerActiveSectors: {},
  StateMinerAvailableBalance: {},
  StateMinerDeadlines: {},
  StateMinerFaults: {},
  StateMinerInfo: {},
  StateMinerInitialPledgeCollateral: {},
  StateMinerPartitions: {},
  StateMinerPower: {},
  StateMinerPreCommitDepositForPower: {},
  StateMinerProvingDeadline: {},
  StateMinerRecoveries: {},
  StateMinerSectorAllocated: {},
  StateMinerSectorCount: {},
  StateMinerSectors: {},
  StateNetworkName: {},
  StateNetworkVersion: {},
  StateReadState: {},
  StateReplay: {},
  StateSearchMsg: {},
  StateSectorExpiration: {},
  StateSectorGetInfo: {},
  StateSectorPartition: {},
  StateSectorPreCommitInfo: {},
  StateVMCirculatingSupplyInternal: {},
  StateVerifiedClientStatus: {},
  StateVerifiedRegistryRootKey: {},
  StateVerifierStatus: {},
  StateWaitMsg: {},
  SyncCheckBad: {},
  SyncCheckpoint: {},
  SyncIncomingBlocks: {
    subscription: true
  },
  SyncMarkBad: {},
  SyncState: {},
  SyncSubmitBlock: {},
  SyncUnmarkAllBad: {},
  SyncUnmarkBad: {},
  SyncValidateTipset: {},
  Version: {},
  WalletBalance: {},
  WalletDefaultAddress: {},
  WalletDelete: {},
  WalletExport: {},
  WalletHas: {},
  WalletImport: {},
  WalletList: {},
  WalletNew: {},
  WalletSetDefault: {},
  WalletSign: {},
  WalletSignMessage: {},
  WalletValidateAddress: {},
  WalletVerify: {}
}

const StorageMinerMethods = {
  ActorAddress: {},
  ActorAddressConfig: {},
  ActorSectorSize: {},
  AuthNew: {},
  AuthVerify: {},
  CheckProvable: {},
  Closing: {
    subscription: true
  },
  ComputeProof: {},
  CreateBackup: {},
  DagstoreGC: {},
  DagstoreInitializeAll: {
    subscription: true
  },
  DagstoreInitializeShard: {},
  DagstoreListShards: {},
  DagstoreRecoverShard: {},
  DealsConsiderOfflineRetrievalDeals: {},
  DealsConsiderOfflineStorageDeals: {},
  DealsConsiderOnlineRetrievalDeals: {},
  DealsConsiderOnlineStorageDeals: {},
  DealsConsiderUnverifiedStorageDeals: {},
  DealsConsiderVerifiedStorageDeals: {},
  DealsImportData: {},
  DealsList: {},
  DealsPieceCidBlocklist: {},
  DealsSetConsiderOfflineRetrievalDeals: {},
  DealsSetConsiderOfflineStorageDeals: {},
  DealsSetConsiderOnlineRetrievalDeals: {},
  DealsSetConsiderOnlineStorageDeals: {},
  DealsSetConsiderUnverifiedStorageDeals: {},
  DealsSetConsiderVerifiedStorageDeals: {},
  DealsSetPieceCidBlocklist: {},
  Discover: {},
  ID: {},
  LogAlerts: {},
  LogList: {},
  LogSetLevel: {},
  MarketCancelDataTransfer: {},
  MarketDataTransferUpdates: {
    subscription: true
  },
  MarketGetAsk: {},
  MarketGetDealUpdates: {
    subscription: true
  },
  MarketGetRetrievalAsk: {},
  MarketImportDealData: {},
  MarketListDataTransfers: {},
  MarketListDeals: {},
  MarketListIncompleteDeals: {},
  MarketListRetrievalDeals: {},
  MarketPendingDeals: {},
  MarketPublishPendingDeals: {},
  MarketRestartDataTransfer: {},
  MarketRetryPublishDeal: {},
  MarketSetAsk: {},
  MarketSetRetrievalAsk: {},
  MiningBase: {},
  NetAddrsListen: {},
  NetAgentVersion: {},
  NetAutoNatStatus: {},
  NetBandwidthStats: {},
  NetBandwidthStatsByPeer: {},
  NetBandwidthStatsByProtocol: {},
  NetBlockAdd: {},
  NetBlockList: {},
  NetBlockRemove: {},
  NetConnect: {},
  NetConnectedness: {},
  NetDisconnect: {},
  NetFindPeer: {},
  NetPeerInfo: {},
  NetPeers: {},
  NetPubsubScores: {},
  PiecesGetCIDInfo: {},
  PiecesGetPieceInfo: {},
  PiecesListCidInfos: {},
  PiecesListPieces: {},
  PledgeSector: {},
  ReturnAddPiece: {},
  ReturnFetch: {},
  ReturnFinalizeSector: {},
  ReturnMoveStorage: {},
  ReturnReadPiece: {},
  ReturnReleaseUnsealed: {},
  ReturnSealCommit1: {},
  ReturnSealCommit2: {},
  ReturnSealPreCommit1: {},
  ReturnSealPreCommit2: {},
  ReturnUnsealPiece: {},
  RuntimeSubsystems: {},
  SealingAbort: {},
  SealingSchedDiag: {},
  SectorAddPieceToAny: {},
  SectorCommitFlush: {},
  SectorCommitPending: {},
  SectorGetExpectedSealDuration: {},
  SectorGetSealDelay: {},
  SectorMarkForUpgrade: {},
  SectorPreCommitFlush: {},
  SectorPreCommitPending: {},
  SectorRemove: {},
  SectorSetExpectedSealDuration: {},
  SectorSetSealDelay: {},
  SectorStartSealing: {},
  SectorTerminate: {},
  SectorTerminateFlush: {},
  SectorTerminatePending: {},
  SectorsList: {},
  SectorsListInStates: {},
  SectorsRefs: {},
  SectorsStatus: {},
  SectorsSummary: {},
  SectorsUnsealPiece: {},
  SectorsUpdate: {},
  Session: {},
  Shutdown: {},
  StorageAddLocal: {},
  StorageAttach: {},
  StorageBestAlloc: {},
  StorageDeclareSector: {},
  StorageDropSector: {},
  StorageFindSector: {},
  StorageInfo: {},
  StorageList: {},
  StorageLocal: {},
  StorageLock: {},
  StorageReportHealth: {},
  StorageStat: {},
  StorageTryLock: {},
  Version: {},
  WorkerConnect: {},
  WorkerJobs: {},
  WorkerStats: {}
}

const GatewayMethods = {
  ChainGetBlockMessages: {},
  ChainGetMessage: {},
  ChainGetPath: {},
  ChainGetTipSet: {},
  ChainGetTipSetAfterHeight: {},
  ChainGetTipSetByHeight: {},
  ChainHasObj: {},
  ChainHead: {},
  ChainNotify: {
    subscription: true
  },
  ChainReadObj: {},
  GasEstimateMessageGas: {},
  MpoolPush: {},
  MsigGetAvailableBalance: {},
  MsigGetPending: {},
  MsigGetVested: {},
  StateAccountKey: {},
  StateDealProviderCollateralBounds: {},
  StateGetActor: {},
  StateListMiners: {},
  StateLookupID: {},
  StateMarketBalance: {},
  StateMarketStorageDeal: {},
  StateMinerInfo: {},
  StateMinerPower: {},
  StateMinerProvingDeadline: {},
  StateNetworkVersion: {},
  StateReadState: {},
  StateSearchMsg: {},
  StateSectorGetInfo: {},
  StateVerifiedClientStatus: {},
  StateWaitMsg: {},
  Version: {},
  WalletBalance: {}
}

const WalletMethods = {
  WalletDelete: {},
  WalletExport: {},
  WalletHas: {},
  WalletImport: {},
  WalletList: {},
  WalletNew: {},
  WalletSign: {}
}

const WorkerMethods = {
  AddPiece: {},
  Enabled: {},
  Fetch: {},
  FinalizeSector: {},
  Info: {},
  MoveStorage: {},
  Paths: {},
  ProcessSession: {},
  ReleaseUnsealed: {},
  Remove: {},
  SealCommit1: {},
  SealCommit2: {},
  SealPreCommit1: {},
  SealPreCommit2: {},
  Session: {},
  SetEnabled: {},
  StorageAddLocal: {},
  TaskDisable: {},
  TaskEnable: {},
  TaskTypes: {},
  UnsealPiece: {},
  Version: {},
  WaitQuiet: {}
}

export { CommonMethods, FullNodeMethods, StorageMinerMethods, GatewayMethods, WalletMethods, WorkerMethods }
