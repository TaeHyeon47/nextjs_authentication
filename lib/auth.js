import {hash} from 'bcryptjs';

export async function hashPassword(password) {
   const hasehdPassword = await hash(password, 12);
   return hashedPassword;
}