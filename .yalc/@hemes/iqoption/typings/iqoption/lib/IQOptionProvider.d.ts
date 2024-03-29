import { BaseIQOptionAccount, BaseIQOptionProvider, LogInCredentials } from './types';
export declare class IQOptionProvider implements BaseIQOptionProvider {
    private api;
    private webSocket;
    private isCorsBypassEnabled;
    constructor();
    enableCorsBypass(): Promise<void>;
    logIn({ email, password, }: LogInCredentials): Promise<BaseIQOptionAccount>;
}
//# sourceMappingURL=IQOptionProvider.d.ts.map