import { NextRequest, NextResponse } from 'next/server';

declare class PulseServer {
    private bus;
    constructor();
    emit(channel: string, data: any): void;
    Handler(): (req: NextRequest) => NextResponse<unknown>;
}
declare const pulse: PulseServer;

export { pulse };
