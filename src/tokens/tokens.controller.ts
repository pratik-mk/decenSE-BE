/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  addToken(
    @Body('mint_id') mint_id: string,
    @Body('token_name') token_name: string,
    @Body('shopkeeper_pubkey') shopkeeper_pubkey: string,
    @Body('market_valuation') market_valuation: number,
    @Body('token_supply') token_supply: number,
    @Body('skeeper_state') skeeper_state: string,
    @Body('pda') pda: string,
    @Body('user_ata') user_ata: string,
    @Body('pda_ata') pda_ata: string,
  ): any {
    const generateToken = this.tokensService.insertToken(
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
    return generateToken;
  }

  @Get()
  getAllTokens() {
    return this.tokensService.getAllTokens();
  }

  @Get(':id')
  getToken(@Param('id') id: string) {
    return this.tokensService.getSingleToken(id);
  }
}
