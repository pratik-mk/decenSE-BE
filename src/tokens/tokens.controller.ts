/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  addToken(
    @Body('tokenName') tokenName: string,
    @Body('marketVal') marketVal: number,
    @Body('tokenSupply') tokenSupply: number,
  ): any {
    const generatedId = this.tokensService.insertToken(
      tokenName,
      marketVal,
      tokenSupply,
    );
    return { id: generatedId };
  }

  @Get()
  getAllTokens() {
    return this.tokensService.getAllTokens();
  }
}
