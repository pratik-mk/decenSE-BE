/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Token } from './token.model';

@Injectable()
export class TokensService {
  private tokens: Token[] = [];

  insertToken(tokenName: string, marketVal: number, tokenSupply: number) {
    const tokenId = new Date().toString();
    const newToken = new Token(
      new Date().toString(),
      tokenName,
      marketVal,
      tokenSupply,
    );
    this.tokens.push(newToken);
    return { id: tokenId };
  }
}
