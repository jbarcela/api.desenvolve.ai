import { ValueTransformer } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class PasswordTransformer implements ValueTransformer {
    to(value) {
        return bcrypt.hashSync(value, 10);
    }
    from(value) {
        return value;
    }
}
