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
