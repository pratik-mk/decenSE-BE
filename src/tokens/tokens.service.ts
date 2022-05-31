/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Token } from './token.model';

@Injectable()
export class TokensService {
  private tokens: Token[] = [];

  insertToken(tokenName: string, marketVal: number, tokenSupply: number) {
    const tokenId = Math.random().toString();
    const newToken = new Token(tokenId, tokenName, marketVal, tokenSupply);
    this.tokens.push(newToken);
    return { id: tokenId };
  }

  getAllTokens() {
    return [...this.tokens];
  }

  getSingleToken(id: string) {
    const token = this.tokens.find((token) => token.id === id);
    if (!token) {
      throw new NotFoundException('Could not find token by id');
    }
    return { ...token };
  }
}
