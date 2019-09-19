import * as _ from 'lodash';

export class UtilsService {
    public static toDto<T, E>(
        model: new (entity: E, options?: any) => T,
        entity: E,
        options?: any,
    ): T {
        return new model(entity, options);
    }

    static get<B, C = undefined>(
        func: () => B,
        defaultValue?: C,
    ): B | C | undefined {
        try {
            const value = func();

            if (_.isUndefined(value)) {
                return defaultValue;
            }
            return value;
        } catch {
            return defaultValue;
        }
    }
}
