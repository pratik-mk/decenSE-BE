/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateTokenDto {
  @IsNotEmpty({ message: 'mint_id is required' })
  mint_id: string;
  @IsNotEmpty({ message: 'token_name is required' })
  token_name: string;
  @IsNotEmpty({ message: 'shopkeeper_pubkey is required' })
  shopkeeper_pubkey: string;
  @IsNotEmpty({ message: 'market_valuation is required' })
  market_valuation: number;
  @IsNotEmpty({ message: 'token_supply is required' })
  token_supply: number;
  @IsNotEmpty({ message: 'skeeper_state is required' })
  skeeper_state: string;
  @IsNotEmpty({ message: 'pda is required' })
  pda: string;
  @IsNotEmpty({ message: 'user_ata is required' })
  user_ata: string;
  @IsNotEmpty({ message: 'pda_ata is required' })
  pda_ata: string;
}
