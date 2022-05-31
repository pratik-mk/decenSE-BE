/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTokenDto } from './dto/createToken.dto';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addToken(@Body() tokenData: CreateTokenDto): any {
    const generateToken = this.tokensService.insertToken(
      tokenData.mint_id,
      tokenData.token_name,
      tokenData.shopkeeper_pubkey,
      tokenData.market_valuation,
      tokenData.token_supply,
      tokenData.skeeper_state,
      tokenData.pda,
      tokenData.user_ata,
      tokenData.pda_ata,
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
