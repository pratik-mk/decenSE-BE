/* eslint-disable prettier/prettier */
export class Token {
  constructor(
    public mint_id: string,
    public token_name: string,
    public shopkeeper_pubkey: string,
    public market_valuation: number,
    public token_supply: number,
    public skeeper_state: string,
    public pda: string,
    public user_ata: string,
    public pda_ata: string,
  ) {}
}

//sample body
// {
//   "mint_id": "mint_id1234",
//   "token_name": "testToken123",
//   "shopkeeper_pubkey": "0x1234",
//   "market_valuation": 100,
//   "token_supply": 1000,
//   "skeeper_state": "skeeper_state123",
//   "pda": "pda123",
//   "user_ata": "user_ata123",
//   "pda_ata": "pda_ata123"
// }
