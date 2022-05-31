/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Token } from './token.model';

@Injectable()
export class TokensService {
  private tokens: Token[] = [];

  insertToken(
    mint_id: string,
    token_name: string,
    shopkeeper_pubkey: string,
    market_valuation: number,
    token_supply: number,
    skeeper_state: string,
    pda: string,
    user_ata: string,
    pda_ata: string,
  ) {
    const newToken = new Token(
      mint_id,
      token_name,
      shopkeeper_pubkey,
      market_valuation,
      token_supply,
      skeeper_state,
      pda,
      user_ata,
      pda_ata,
    );
    this.tokens.push(newToken);
    return newToken;
  }

  getAllTokens() {
    return [...this.tokens];
  }

  getSingleToken(id: string) {
    const token = this.tokens.find((token) => token.mint_id === id);
    if (!token) {
      throw new NotFoundException('Could not find token by id');
    }
    return { ...token };
  }
}
